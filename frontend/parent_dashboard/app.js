import { EduDNA_API } from '../shared/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const report = await EduDNA_API.getParentReport('S1001');

  document.getElementById('parent-student-name').textContent = report.name;
  document.getElementById('ai-feedback').textContent = `"${report.ai_tutor_feedback}"`;
  document.getElementById('stat-streak').textContent = `${report.streak_days} Days`;
  document.getElementById('stat-attendance').textContent = report.attendance_rate;

  const strongList = document.getElementById('strong-topics');
  strongList.innerHTML = '';
  report.strong_topics.forEach(topic => {
    const li = document.createElement('li');
    li.style.cssText = 'padding:0.75rem 1rem; background:rgba(16,185,129,0.08); border-radius:var(--radius-sm); border:1px solid rgba(16,185,129,0.2); font-weight:600; font-size:0.95rem;';
    li.innerHTML = `⭐ ${topic}`;
    strongList.appendChild(li);
  });

  const reviewList = document.getElementById('review-topics');
  reviewList.innerHTML = '';
  report.review_topics.forEach(topic => {
    const li = document.createElement('li');
    li.style.cssText = 'padding:0.75rem 1rem; background:rgba(245,158,11,0.08); border-radius:var(--radius-sm); border:1px solid rgba(245,158,11,0.2); font-weight:600; font-size:0.95rem;';
    li.innerHTML = `🎯 ${topic}`;
    reviewList.appendChild(li);
  });
});
