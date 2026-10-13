# EduDNA Development Setup Guide

Follow this guide to get the backend and frontend up and running locally.

---

## Prerequisites
- **Python:** 3.10 or higher
- **Node.js:** 18+ (optional, for frontend dev server)
- **Git**

---

## 1. Backend Setup

1. Open a terminal in the project root:
   ```bash
   cd EduDNA/backend
   ```

2. Create and activate a virtual environment:
   ```bash
   # Windows PowerShell
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. Verify server is running at:
   - API Status: `http://localhost:8000`
   - API Docs: `http://localhost:8000/docs`

---

## 2. Frontend Setup

1. Open `frontend/index.html` directly in your browser or run a lightweight local server:
   ```bash
   cd EduDNA/frontend
   npx serve .
   ```
   Or use Python:
   ```bash
   python -m http.server 3000
   ```

2. Access the dashboards:
   - Portal Gateway: `http://localhost:3000/index.html`
   - Student Dashboard: `http://localhost:3000/student_dashboard/index.html`
   - Teacher Dashboard: `http://localhost:3000/teacher_dashboard/index.html`
   - Parent Portal: `http://localhost:3000/parent_dashboard/index.html`
