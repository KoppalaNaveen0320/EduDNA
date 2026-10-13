// EduDNA Shared API Client
const API_BASE_URL = 'http://localhost:8000';

export const EduDNA_API = {
  // Check API health status
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/health`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Return fallback status
      return { status: 'Offline (Demo Mode)', mock: true };
    }
  },

  // Get student genome profile
  async getStudentGenome(studentId = 'S1001') {
    try {
      const res = await fetch(`${API_BASE_URL}/api/genome/${studentId}`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback mock genome
      return {
        student_id: studentId,
        name: 'Aarav Sharma',
        grade: '10th Grade',
        learning_style: 'Visual & Interactive',
        engagement_score: 91.4,
        mastery_rate: 84.5,
        cognitive_speed: '1.2x (Above Average)',
        dna_markers: [
          { name: 'Conceptual Retention', score: 88, color: '#6366f1' },
          { name: 'Visual Synthesis', score: 94, color: '#06b6d4' },
          { name: 'Problem Speed', score: 82, color: '#a855f7' },
          { name: 'Focus Endurance', score: 86, color: '#10b981' }
        ],
        recent_activity: [
          { topic: 'Linear Equations & Graphs', status: 'Completed', score: '92%' },
          { topic: 'Calculus: Derivatives', status: 'In Progress', score: '78%' },
          { topic: 'Matrix Operations', status: 'Scheduled', score: '--' }
        ]
      };
    }
  },

  // Get classroom analytics for teachers
  async getTeacherAnalytics() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/teacher/analytics`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      return {
        total_students: 42,
        avg_mastery: 81.2,
        class_engagement: 87.5,
        at_risk_count: 3,
        students: [
          { id: 'S1001', name: 'Aarav Sharma', mastery: 84.5, style: 'Visual', status: 'Excelling' },
          { id: 'S1002', name: 'Priya Patel', mastery: 89.5, style: 'Auditory', status: 'Excelling' },
          { id: 'S1003', name: 'Rohan Verma', mastery: 68.0, style: 'Kinesthetic', status: 'Needs Review' },
          { id: 'S1005', name: 'Vikram Singh', mastery: 61.5, style: 'Reading/Writing', status: 'At Risk' }
        ]
      };
    }
  },

  // Get parent summary report
  async getParentReport(studentId = 'S1001') {
    try {
      const res = await fetch(`${API_BASE_URL}/api/parent/${studentId}`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      return {
        student_id: studentId,
        name: 'Aarav Sharma',
        streak_days: 14,
        weekly_hours: 6.5,
        attendance_rate: '98%',
        ai_tutor_feedback: 'Aarav demonstrates high comprehension in visual algebra modules. Suggested focus area is spaced review for calculus theorems.',
        strong_topics: ['Graph Theory', 'Linear Algebra', 'Kinematics'],
        review_topics: ['Derivatives', 'Thermodynamics']
      };
    }
  }
};
