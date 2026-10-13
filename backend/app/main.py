from fastapi import FastAPI
from app.database import Base, engine

app = FastAPI(
    title="EduDNA API",
    version="1.0.0",
    description="AI Powered Learning Genome Platform"
)

Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {
        "message": "Welcome to EduDNA API",
        "status": "Running"
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }