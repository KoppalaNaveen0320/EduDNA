# EduDNA: AI-Powered Learning Genome Platform

EduDNA is an intelligent educational platform that maps every learner's cognitive **Learning Genome (DNA)** using Graph Neural Networks (GNN) and multimodal engagement tracking.

---

## 🌟 Key Features

- **🧬 Cognitive Learning Genome:** Models student mastery velocity, retention decay, and preferred modalities (Visual, Auditory, Kinesthetic, Reading/Writing).
- **📊 Graph Neural Network (GNN) Embeddings:** Predicts concept mastery sequences and optimal learning paths through topic dependency graphs.
- **🎓 Student Dashboard:** Visualizes individual learning DNA, progress tracking, and personalized recommendations.
- **👩‍🏫 Teacher Analytics:** Classroom-wide mastery heatmap, modality clustering, and automated at-risk intervention radar.
- **🏡 Parent Portal:** Longitudinal habit tracking, study streaks, and AI tutor summaries.

---

## 📁 Repository Structure

```
EduDNA/
├── backend/
│   ├── app/
│   │   ├── ai/             # GNN architecture, feature engineering, LLM services
│   │   ├── api/            # REST API endpoints (FastAPI)
│   │   ├── models/         # Database models (SQLAlchemy)
│   │   └── main.py         # Application entrypoint
│   ├── datasets/           # Synthetic student, attendance, & quiz datasets
│   ├── trained_models/     # Serialized PyTorch & scikit-learn models
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── student_dashboard/  # Student Learning Genome portal
│   ├── teacher_dashboard/  # Teacher classroom radar
│   ├── parent_dashboard/   # Parent visibility portal
│   ├── shared/             # Common CSS design system & API client
│   └── index.html          # Unified multi-role portal gateway
├── docs/                   # Architecture, API docs, & setup guides
└── notebooks/              # Jupyter notebooks for EDA and GNN training
```

---

## 🚀 Getting Started

### 1. Backend Service
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate   # On Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
- API Docs: `http://localhost:8000/docs`

### 2. Frontend Dashboards
```bash
cd frontend
# Open index.html directly or run a local server:
npx serve .
# Or
python -m http.server 3000
```
- Portal Gateway: `http://localhost:3000/index.html`

---

## 📄 Documentation
- [Architecture Details](docs/ARCHITECTURE.md)
- [API Reference](docs/API_DOCUMENTATION.md)
- [Local Setup Guide](docs/SETUP_GUIDE.md)

---

## 📜 License
MIT License.