"""Vercel entrypoint for FastAPI application."""

try:
    from .main import app
except ImportError:
    from main import app

__all__ = ["app"]
