"""Vercel entrypoint for FastAPI application."""
from main import app

# Vercel serverless function handler
handler = app
