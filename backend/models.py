from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


class LeadCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=8, max_length=20)
    country: str = Field(..., min_length=2, max_length=50)
    business_type: str = Field(..., min_length=2, max_length=50)
    message: Optional[str] = Field("", max_length=1000)


class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    phone: str
    country: str
    business_type: str
    message: str = ""
    status: str = "new"  # new, contacted, qualified, converted
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class LeadResponse(BaseModel):
    id: str
    message: str
    timestamp: datetime


class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    role: str
    content: str
    rating: int = Field(default=5, ge=1, le=5)
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)


class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    order: int = 0
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str