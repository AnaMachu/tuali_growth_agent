# tuali_growth_agent

Repo for Hack4her 2026 "Tuali Growth Agent" track.

## Project Structure

```text
tuali-growth-agent/
|-- frontend/
|-- backend/
|-- mock_data/
|-- tests/
|-- docs/
|-- requirements.txt
|-- .gitignore
`-- README.md
```

## Folder Guide

### `frontend/`
Contains the user-facing app.

- `pages/`: Screen-level views and route-based experiences.
- `components/`: Reusable UI building blocks shared across pages.
- `services/`: Frontend logic for API calls, helpers, and integrations.
- `styles/`: Global styles, tokens, themes, and shared CSS.

### `backend/`
Contains the server-side logic and product intelligence.

- `api/`: Routes, controllers, and request/response handlers.
- `agent/`: Core agent orchestration, prompts, and decision flows.
- `mcp/`: MCP-related integrations, adapters, or tool definitions.
- `services/`: Business logic used by the API and agent layers.
- `database/`: Connection setup, queries, migrations, or seeds.
- `models/`: Data models, schemas, and typed entities.
- `utils/`: Shared backend helpers and utility functions.

### `mock_data/`
Sample or fake data for local development, demos, and testing.

### `tests/`
Automated tests for backend logic, API endpoints, and future integrations.

### `docs/`
Internal documentation such as architecture notes, workflows, and product decisions.

### `README.md`
Quick entry point for understanding the repository.

### `requirements.txt`
Main Python dependencies for the project.

### `.gitignore`
Files and folders that should stay out of version control, such as virtual environments and cache files.
