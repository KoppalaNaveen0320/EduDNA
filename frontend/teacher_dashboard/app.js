import { EduDNA_API } from '../shared/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const analytics = await EduDNA_API.getTeacherAnalytics();

  document.getElementById('stat-students').textContent = `${analytics.total_students} Learners`;
  document.getElementById('stat-mastery').textContent = `${analytics.avg_mastery}%`;
  document.getElementById('stat-atrisk').textContent = `${analytics.at_risk_count} Students`;

  const tbody = document.getElementById('student-roster');
  tbody.innerHTML = '';

  analytics.students.forEach(student => {
    const tr = document.createElement('tr');
    
    let statusBadge = '<span class="badge success">Excelling</span>';
    if (student.status === 'Needs Review') {
      statusBadge = '<span class="badge warning">Needs Review</span>';
    } else if (student.status === 'At Risk') {
      statusBadge = '<span class="badge" style="background:rgba(244,63,94,0.15); color:var(--accent-rose); border-color:rgba(244,63,94,0.3);">At Risk</span>';
    }

    tr.innerHTML = `
      <td style="font-family:monospace; color:var(--text-muted);">${student.id}</td>
      <td style="font-weight:600;">${student.name}</td>
      <td><span class="badge">${student.style}</span></td>
      <td>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <span style="font-weight:600; min-width:40px;">${student.mastery}%</span>
          <div class="progress-container" style="width:100px; margin:0;">
            <div class="progress-bar" style="width:${student.mastery}%;"></div>
          </div>
        </div>
      </td>
      <td>${statusBadge}</td>
    `;
    tbody.appendChild(tr);
  });
});
