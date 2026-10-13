import { EduDNA_API } from '../shared/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const profile = await EduDNA_API.getStudentGenome('S1001');

  // Update header & metrics
  document.getElementById('student-name').textContent = profile.name;
  document.getElementById('student-style').textContent = `DNA: ${profile.learning_style}`;
  document.getElementById('student-meta').textContent = `${profile.grade} • ID: ${profile.student_id}`;
  document.getElementById('val-mastery').textContent = `${profile.mastery_rate}%`;
  document.getElementById('val-engagement').textContent = `${profile.engagement_score}%`;

  // Render DNA markers
  const markersContainer = document.getElementById('markers-container');
  markersContainer.innerHTML = '';
  profile.dna_markers.forEach(marker => {
    const item = document.createElement('div');
    item.style.marginBottom = '1.1rem';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:0.25rem;">
        <span>${marker.name}</span>
        <span style="font-weight:700; color:${marker.color};">${marker.score}%</span>
      </div>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${marker.score}%; background: ${marker.color};"></div>
      </div>
    `;
    markersContainer.appendChild(item);
  });

  // Render activity
  const activityContainer = document.getElementById('activity-container');
  activityContainer.innerHTML = '';
  profile.recent_activity.forEach(act => {
    const actItem = document.createElement('div');
    actItem.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0; border-bottom:1px solid rgba(255,255,255,0.05);';
    actItem.innerHTML = `
      <div>
        <div style="font-weight:600; font-size:0.95rem;">${act.topic}</div>
        <div style="font-size:0.8rem; color:var(--text-muted);">${act.status}</div>
      </div>
      <span class="badge ${act.status === 'Completed' ? 'success' : ''}">${act.score}</span>
    `;
    activityContainer.appendChild(actItem);
  });
});
