# EduDNA Research & Experiment Notebooks

This directory contains Jupyter notebooks used for data analysis, feature engineering, and model prototyping for EduDNA's Learning Genome AI.

---

## Notebook Catalog

### [01_exploratory_data_analysis.ipynb](01_exploratory_data_analysis.ipynb)
- Ingests `backend/datasets/synthetic_students.csv`, `attendance.csv`, and `quiz_data.csv`.
- Analyzes distribution of learning modalities (Visual, Auditory, Kinesthetic, Reading/Writing).
- Computes correlation between attendance duration and quiz mastery rates.
- Produces baseline summary statistics for genome modeling.

### [02_learning_genome_training.ipynb](02_learning_genome_training.ipynb)
- Constructs prerequisite concept dependency graphs.
- Defines and trains Graph Neural Network (GNN) embeddings using PyTorch Geometric.
- Evaluates next-concept mastery prediction accuracy.
- Serializes trained weights to `backend/trained_models/`.

---

## Running the Notebooks

Launch Jupyter Notebook or JupyterLab:
```bash
cd EduDNA/notebooks
jupyter notebook
```
Ensure your Python kernel has pandas, numpy, matplotlib, seaborn, torch, and scikit-learn installed.
