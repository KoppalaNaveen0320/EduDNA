# EduDNA Architecture Overview

EduDNA is an AI-driven educational platform that models every learner's unique **Learning Genome (DNA)**. By leveraging Graph Neural Networks (GNN) and multimodal engagement tracking, EduDNA maps concept dependencies, predicts student retention, and provides targeted interventions.

---

## 1. High-Level Architecture

```
[ Frontend Dashboards ]
├── Student Dashboard (Learning Genome, Mastery, Pathways)
├── Teacher Dashboard (Class Analytics, At-Risk Interventions)
└── Parent Dashboard  (Progress Insights, Habit Tracking)
          │
          ▼ (REST / JSON)
[ FastAPI Backend Services ]
├── Auth & User Management
├── Learning Genome Engine (GNN + Embeddings)
├── Recommendation Pipeline
├── Concept Mastery & Knowledge Graph
└── Analytics & Reporting
          │
          ▼
[ Database & AI Storage ]
├── SQLite / PostgreSQL (Relational Data)
├── Trained PyTorch Models (gnn.pt, genome_model.pkl)
└── Dataset Pipelines (Attendance, Quizzes, Synthetic Students)
```

---

## 2. Core Modules

### 2.1 Learning Genome Model
The Learning Genome represents each learner as a multidimensional vector:
- **Cognitive Speed:** Rate of concept acquisition.
- **Mastery Retention:** Knowledge decay over spaced intervals.
- **Preferred Modality:** Visual, Auditory, Kinesthetic, Reading/Writing.
- **Engagement Stability:** Focus consistency across session durations.

### 2.2 Knowledge Graph & GNN
- **Graph Nodes:** Academic concepts (e.g., Matrix Multiplication, Eigenvalues).
- **Graph Edges:** Prerequisites and contextual relationships.
- **GNN Embedding:** Predicts probability of mastery for subsequent topics given historical performance.

### 2.3 Recommendation Engine
- Generates individualized practice sets and optimal review schedules.
- Flags learning plateaus early to trigger teacher interventions.

---

## 3. Directory Layout

```
EduDNA/
├── backend/
│   ├── app/
│   │   ├── ai/             # GNN models, preprocessing, LLM explanations
│   │   ├── api/            # FastAPI route controllers
│   │   ├── models/         # SQLAlchemy ORM models
│   │   └── services/       # Business logic layer
│   ├── datasets/           # Student, quiz, and attendance training data
│   └── trained_models/     # Saved model weights and artifacts
├── frontend/
│   ├── student_dashboard/  # Student portal UI
│   ├── teacher_dashboard/  # Teacher classroom dashboard
│   ├── parent_dashboard/   # Parent visibility portal
│   └── shared/             # Common API clients, styles, and components
├── docs/                   # Architectural guides and API documentation
└── notebooks/              # Research, EDA, and model training experiments
```
