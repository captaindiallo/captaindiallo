from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
leads_collection = db.leads
testimonials_collection = db.testimonials
faqs_collection = db.faqs
status_checks_collection = db.status_checks

async def init_db():
    """Initialize database with sample data if collections are empty"""
    
    # Initialize testimonials if empty
    if await testimonials_collection.count_documents({}) == 0:
        sample_testimonials = [
            {
                "id": "1",
                "name": "Kwame Asante",
                "location": "Accra, Ghana",
                "role": "Mobile Vendor",
                "content": "Jiba Mobile helped me get a smartphone without any upfront cost. Now I can accept mobile payments and my business has grown by 300%!",
                "rating": 5,
                "is_active": True
            },
            {
                "id": "2", 
                "name": "Adjoa Mensah",
                "location": "Kumasi, Ghana",
                "role": "Food Seller",
                "content": "The POS device has made transactions so much easier for my customers. I'm earning more and serving more people every day.",
                "rating": 5,
                "is_active": True
            },
            {
                "id": "3",
                "name": "Koffi Kouadio", 
                "location": "Abidjan, Côte d'Ivoire",
                "role": "Transport Driver",
                "content": "With my financed smartphone, I can now accept ride bookings through apps. My income has doubled in just 3 months!",
                "rating": 5,
                "is_active": True
            }
        ]
        await testimonials_collection.insert_many(sample_testimonials)
    
    # Initialize FAQs if empty
    if await faqs_collection.count_documents({}) == 0:
        sample_faqs = [
            {
                "id": "1",
                "question": "What makes Jiba Mobile different from other financing options?",
                "answer": "We offer 0% interest financing specifically designed for Africa's informal economy. Unlike traditional lenders, we understand the unique challenges of micro-businesses and provide flexible payment terms that work with your income.",
                "order": 1,
                "is_active": True
            },
            {
                "id": "2",
                "question": "How do you determine my eligibility?",
                "answer": "We use AI-powered assessment that looks beyond traditional credit scores. We consider your business activity, mobile money transactions, social connections, and earning potential to make fair decisions.",
                "order": 2,
                "is_active": True
            },
            {
                "id": "3",
                "question": "What happens if my device gets stolen or damaged?",
                "answer": "All our devices come with built-in protection coverage. If your device is stolen or damaged, we'll help you get a replacement quickly so your business doesn't suffer.",
                "order": 3,
                "is_active": True
            },
            {
                "id": "4",
                "question": "Can I pay early without penalties?",
                "answer": "Absolutely! You can pay off your device early at any time without any penalties or extra fees. We encourage early payments when possible.",
                "order": 4,
                "is_active": True
            },
            {
                "id": "5",
                "question": "What support do you provide after I get my device?",
                "answer": "We provide ongoing business training, technical support, and access to our network of merchants and partners to help you maximize your earning potential.",
                "order": 5,
                "is_active": True
            },
            {
                "id": "6",
                "question": "Which countries do you currently serve?",
                "answer": "We're currently active in Ghana and Côte d'Ivoire, with plans to expand to Senegal, Egypt, Ethiopia, DRC, Tanzania, Sudan, Algeria, and Madagascar in the coming months.",
                "order": 6,
                "is_active": True
            }
        ]
        await faqs_collection.insert_many(sample_faqs)