# EduDNA API Documentation

The EduDNA REST API is powered by FastAPI.

- **Base URL:** `http://localhost:8000`
- **Interactive Swagger Docs:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

---

## 1. System Health

### `GET /health`
Returns the status of the API server and database connection.

**Response:**
```json
{
  "status": "Healthy"
}
```

---

## 2. Learning Genome Endpoints

### `GET /api/genome/{student_id}`
Retrieves the computed Learning Genome metrics for a student.

**Response:**
```json
{
  "student_id": "S1001",
  "learning_style": "Visual",
  "cognitive_speed": 1.15,
  "mastery_rate": 82.0,
  "dna_vector": [0.88, 0.82, 1.15, 0.94]
}
```

---

## 3. Student Analytics

### `GET /api/students/{student_id}/mastery`
Retrieves concept mastery percentages across enrolled subjects.

**Response:**
```json
{
  "student_id": "S1001",
  "concepts": [
    { "name": "Linear Algebra", "mastery": 85.0 },
    { "name": "Calculus", "mastery": 78.5 }
  ]
}
```

---

## 4. Recommendations

### `GET /api/recommendations/{student_id}`
Retrieves personalized next learning activities and review prompts.

**Response:**
```json
{
  "student_id": "S1001",
  "recommendations": [
    {
      "topic": "Matrix Eigenvalues",
      "modality": "Interactive Simulation",
      "priority": "High",
      "estimated_mins": 25
    }
  ]
}
```

---

## 5. Teacher Interventions

### `GET /api/teacher/at-risk`
Lists students flagged for academic or attendance intervention.
