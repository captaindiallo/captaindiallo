from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import logging
import os

# Import models and database
from models import (
    Lead, LeadCreate, LeadResponse, 
    Testimonial, FAQ, 
    StatusCheck, StatusCheckCreate
)
from database import (
    db, leads_collection, testimonials_collection, faqs_collection,
    status_checks_collection, init_db
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(title="Jiba Mobile API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Jiba Mobile API is running", "status": "healthy"}


# Lead Management Endpoints
@api_router.post("/leads", response_model=LeadResponse)
async def create_lead(lead_data: LeadCreate):
    """Submit a new lead from the contact form"""
    try:
        # Create lead object
        lead = Lead(**lead_data.dict())
        
        # Insert into database
        result = await leads_collection.insert_one(lead.dict())
        
        if result.inserted_id:
            logger.info(f"New lead created: {lead.email} from {lead.country}")
            return LeadResponse(
                id=lead.id,
                message="Application submitted successfully! We'll contact you within 24 hours.",
                timestamp=lead.created_at
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save lead")
            
    except Exception as e:
        logger.error(f"Error creating lead: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


@api_router.get("/leads", response_model=list[Lead])
async def get_leads():
    """Get all leads (admin endpoint)"""
    try:
        leads = await leads_collection.find({"status": {"$ne": "deleted"}}).to_list(1000)
        return [Lead(**lead) for lead in leads]
    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


# Content Management Endpoints
@api_router.get("/testimonials", response_model=list[Testimonial])
async def get_testimonials():
    """Get all active testimonials"""
    try:
        testimonials = await testimonials_collection.find({"is_active": True}).to_list(100)
        return [Testimonial(**testimonial) for testimonial in testimonials]
    except Exception as e:
        logger.error(f"Error fetching testimonials: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


@api_router.get("/faqs", response_model=list[FAQ])
async def get_faqs():
    """Get all active FAQs ordered by order field"""
    try:
        faqs = await faqs_collection.find({"is_active": True}).sort("order", 1).to_list(100)
        return [FAQ(**faq) for faq in faqs]
    except Exception as e:
        logger.error(f"Error fetching FAQs: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


# Legacy endpoints (keep for compatibility)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    await status_checks_collection.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=list[StatusCheck])
async def get_status_checks():
    status_checks = await status_checks_collection.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


# Include the router in the main app
app.include_router(api_router)


@app.on_event("startup")
async def startup_event():
    """Initialize database on startup"""
    await init_db()
    logger.info("Database initialized successfully")


@app.on_event("shutdown")
async def shutdown_event():
    """Clean up on shutdown"""
    # Close database connections if needed
    logger.info("Application shutting down")