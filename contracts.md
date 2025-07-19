# Jiba Mobile Landing Page - API Contracts & Integration Plan

## Current Mock Data (frontend/src/mock/data.js)

### Static Data (will remain frontend-only)
- **howItWorksSteps**: 4-step process (static content)
- **features**: 6 feature benefits (static content)
- **countries**: 10 African countries array (static reference data)
- **businessTypes**: 9 business categories array (static reference data)

### Dynamic Data (will be moved to backend)
- **testimonials**: 3 customer success stories from Ghana & Côte d'Ivoire
- **faqs**: 6 frequently asked questions with answers

## Backend API Endpoints

### 1. Contact/Lead Management
```
POST /api/leads
- Purpose: Submit contact form from landing page
- Body: {
    fullName: string,
    email: string,
    phone: string, 
    country: string,
    businessType: string,
    message?: string
  }
- Response: { id: string, message: string, timestamp: datetime }
- Storage: MongoDB 'leads' collection
```

```
GET /api/leads
- Purpose: Admin endpoint to retrieve all leads
- Response: Array of lead objects
- Auth: Basic admin protection (for future)
```

### 2. Content Management
```
GET /api/testimonials
- Purpose: Fetch customer success stories
- Response: Array of testimonial objects
- Cache: Can be cached on frontend
```

```
GET /api/faqs  
- Purpose: Fetch frequently asked questions
- Response: Array of FAQ objects
- Cache: Can be cached on frontend
```

## Database Models

### Lead Model
```python
class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    phone: str
    country: str
    business_type: str
    message: Optional[str] = ""
    status: str = "new"  # new, contacted, qualified, converted
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
```

### Testimonial Model
```python
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    role: str
    content: str
    rating: int = 5
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

### FAQ Model
```python
class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    order: int = 0
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

## Frontend Integration Plan

### Phase 1: Contact Form Integration
1. Update `Contact.jsx` to call `POST /api/leads` instead of mock submission
2. Handle API responses and error states
3. Remove mock setTimeout, replace with actual API call
4. Add proper loading states and error handling

### Phase 2: Dynamic Content Integration  
1. Update `Testimonials.jsx` to fetch from `GET /api/testimonials`
2. Update `FAQ.jsx` to fetch from `GET /api/faqs`
3. Add loading states while fetching content
4. Keep static data (features, steps, countries, business types) as is

### Phase 3: Error Handling & UX
1. Add proper error boundaries
2. Implement retry logic for failed API calls
3. Add offline/network error messaging
4. Graceful fallbacks to cached/static content

## Implementation Priority

**High Priority (MVP):**
1. Lead submission endpoint - core business functionality
2. Basic error handling and validation

**Medium Priority:**
1. Dynamic testimonials and FAQs
2. Admin lead management endpoints

**Low Priority:**
1. Analytics and tracking
2. Email notifications for new leads
3. Advanced admin features

## Migration Strategy

1. **Backend First**: Implement all models and endpoints
2. **Gradual Integration**: Start with contact form, then dynamic content
3. **Preserve UX**: Maintain existing animations and interactions
4. **Backward Compatibility**: Keep mock data as fallback during transition

## Testing Requirements

**Backend Testing:**
- Lead submission validation
- Database operations
- API endpoint responses

**Frontend Integration Testing:**
- Form submission flow
- Error state handling
- Loading state behavior
- Network failure scenarios