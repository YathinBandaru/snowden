/* script.js - Central site logic for CyberShield Academy
   - Authentication (signup/login/logout)
   - Per-user credits & completed courses storage
   - Dashboard rendering (reads `courses` from course-data.js)
   - Cursor (Doraemon-bell) UI that works across pages
   - Progress bar helpers, small animations, quiz result storage
*/

/* ---------------- Authentication ---------------- */

function signup() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  if (!username || !password) { alert("Please fill all fields"); return; }

  if (localStorage.getItem("user_" + username)) {
    alert("User already exists. Please login or choose another username.");
    return;
  }

  localStorage.setItem("user_" + username, password);
  localStorage.setItem("credits_" + username, "0");
  localStorage.setItem("completed_" + username, JSON.stringify([]));
  localStorage.setItem("currentUser", username);
  animateToast("Account created — welcome " + username);
  setTimeout(()=> window.location.href = "dashboard.html", 800);
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const stored = localStorage.getItem("user_" + username);
  if (stored && stored === password) {
    localStorage.setItem("currentUser", username);
    animateToast("Welcome back, " + username + "!");
    setTimeout(()=> window.location.href = "dashboard.html", 700);
  } else {
    alert("Incorrect username or password.");
  }
}

function demoAccount() {
  const demo = "guest";
  if (!localStorage.getItem("user_" + demo)) {
    localStorage.setItem("user_" + demo, "guest123");
    localStorage.setItem("credits_" + demo, "60");
    localStorage.setItem("completed_" + demo, JSON.stringify(["phishing"]));
  }
  localStorage.setItem("currentUser", demo);
  animateToast("Using demo account");
  setTimeout(()=> window.location.href = "dashboard.html", 600);
}

function logout() {
  localStorage.removeItem("currentUser");
  animateToast("Logged out");
  setTimeout(()=> window.location.href = "login.html", 400);
}

function getUser() {
  return localStorage.getItem("currentUser");
}

function requireLoginOrRedirect() {
  const protectedPages = ["dashboard.html","courses.html","course-content.html","quiz.html","scenarios.html","rewards.html","certificate.html"];
  const path = (window.location.pathname || "").toLowerCase();
  const needsAuth = protectedPages.some(p => path.includes(p));
  if (needsAuth && !getUser()) {
    alert("Please login first.");
    window.location.href = "login.html";
  }
}

/* ---------------- User Data Helpers ---------------- */

function _creditsKey(user) { return "credits_" + user; }
function _completedKey(user) { return "completed_" + user; }
function _progressKey(courseId, user) { return `progress_${courseId}_${user}`; }

function getCredits(user = null) {
  const u = user || getUser();
  if (!u) return 0;
  return parseInt(localStorage.getItem(_creditsKey(u)) || "0", 10);
}
function setCredits(v, user = null) {
  const u = user || getUser();
  if (!u) return;
  localStorage.setItem(_creditsKey(u), String(v));
}
function addCredits(amount) {
  const u = getUser();
  if (!u) return;
  const cur = getCredits(u);
  setCredits(cur + amount, u);
  refreshDashboardIfPresent();
  animateToast("+" + amount + " credits");
}

function getCompletedCourses(user = null) {
  const u = user || getUser();
  if (!u) return [];
  try { return JSON.parse(localStorage.getItem(_completedKey(u)) || "[]"); } catch(e){ return []; }
}
function markCourseComplete(courseId, credit = 60) {
  const u = getUser();
  if (!u) return;
  const key = _completedKey(u);
  const list = getCompletedCourses(u);
  if (!list.includes(courseId)) {
    list.push(courseId);
    localStorage.setItem(key, JSON.stringify(list));
    addCredits(credit);
    animateToast(`Completed: ${courseId}`);
  } else {
    animateToast("Already completed");
  }
}

function getCourseProgress(courseId, user = null) {
  const u = user || getUser();
  if (!u) return 0;
  return parseInt(localStorage.getItem(_progressKey(courseId, u)) || "0", 10);
}
function setCourseProgress(courseId, val, user = null) {
  const u = user || getUser();
  if (!u) return;
  const v = Math.max(0, Math.min(100, parseInt(val || 0, 10)));
  localStorage.setItem(_progressKey(courseId, u), String(v));
  refreshDashboardIfPresent();
}

/* ---------------- UI helpers ---------------- */

function animateToast(msg) {
  const t = document.createElement("div");
  t.innerText = msg;
  Object.assign(t.style, {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    background: "linear-gradient(90deg,#61b9db,#7bd4e8)",
    color: "#06262f",
    padding: "10px 14px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(20,40,60,0.12)",
    zIndex: 99999,
    fontWeight: 700,
    opacity: 0,
    transform: "translateY(8px)",
    transition: "opacity .28s ease, transform .28s ease"
  });
  document.body.appendChild(t);
  requestAnimationFrame(()=> { t.style.opacity = 1; t.style.transform = "translateY(0)"; });
  setTimeout(()=> { t.style.opacity = 0; t.style.transform = "translateY(8px)"; setTimeout(()=> t.remove(), 350); }, 1400);
}

/* ---------------- Cursor (bell) ---------------- */

(function cursorInit(){
  const cursor = document.getElementById('doraemon-cursor') || null;
  if (!cursor) return;
  document.documentElement.style.cursor = 'none';
  cursor.style.position = 'fixed';
  cursor.style.left = '0';
  cursor.style.top = '0';
  cursor.style.width = '36px';
  cursor.style.height = '36px';
  cursor.style.pointerEvents = 'none';
  cursor.style.zIndex = 99999;
  cursor.style.transform = 'translate3d(-9999px,-9999px,0)';
  cursor.style.transition = 'transform .08s linear, opacity .2s';
  cursor.style.opacity = 0;

  let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
  let posX = mouseX, posY = mouseY;
  const ease = 0.16;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = 1;
    cursor.classList.remove('click-animate');
  });

  function animate(){
    posX += (mouseX - posX) * ease;
    posY += (mouseY - posY) * ease;
    cursor.style.transform = `translate3d(${posX - 18}px, ${posY - 18}px, 0)`;
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('mousedown', ()=> cursor.classList.add('click-animate'));
  window.addEventListener('mouseup', ()=> setTimeout(()=> cursor.classList.remove('click-animate'), 300));
})();

/* ---------------- Progress bars initializer ---------------- */

function initProgressBars() {
  document.querySelectorAll('.progress').forEach(p => {
    const val = parseInt(p.getAttribute('data-value') || '0', 10);
    const inner = p.querySelector('.progress-bar');
    if (inner) {
      inner.style.width = '0%';
      setTimeout(()=> inner.style.width = Math.min(100, Math.max(0, val)) + '%', 200);
    }
  });
}

/* ---------------- Dashboard rendering ---------------- */

function escapeHtml(str){
  if (!str) return "";
  return String(str).replace(/[&<>"'`=\/]/g, function(s) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'}[s];
  });
}

function buildCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card glass-card hover-tilt";
  card.setAttribute("data-id", course.id);

  card.innerHTML = `
    <div class="card-media"><img src="${course.image}" alt="${escapeHtml(course.title)}" onerror="this.onerror=null; this.src='images/placeholder-course.png'"/></div>
    <div class="card-body">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <h3 class="card-title">${escapeHtml(course.title)}</h3>
        <span class="badge-completed" style="display:none;background:linear-gradient(90deg,#a8e6a1,#7bd4e8);padding:6px 10px;border-radius:12px;font-weight:800;color:#0b3a2e">✓ Done</span>
      </div>
      <p class="card-desc">${(course.description || "").trim().slice(0,200)}${(course.description||"").length>200 ? '...' : ''}</p>

      <div style="margin-top:10px;display:flex;gap:12px;align-items:center">
        <div style="flex:1">
          <div class="progress" aria-hidden="true">
            <div class="progress-bar" style="width:0%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:13px;color:#6d7a80">
            <div class="progress-pct">0%</div>
            <div style="font-weight:700" class="small-action">Earn up to ${course.quizCredits || 60} credits</div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn small start-btn">Open</button>
          <button class="btn ghost small quiz-btn">Quiz</button>
        </div>
      </div>
    </div>
  `;

  const startBtn = card.querySelector(".start-btn");
  startBtn.addEventListener("click", ()=> {
    window.location.href = `course-content.html?course=${encodeURIComponent(course.title)}`;
  });

  const quizBtn = card.querySelector(".quiz-btn");
  quizBtn.addEventListener("click", ()=> {
    window.location.href = `quiz.html?course=${encodeURIComponent(course.id)}`;
  });

  return card;
}

function refreshDashboardIfPresent() {
  const cred = document.getElementById("credit-display");
  if (cred) cred.innerText = getCredits();
  const userEl = document.getElementById("user-name");
  if (userEl) userEl.innerText = getUser() || "User";
  document.querySelectorAll(".course-card").forEach(card => {
    const id = card.getAttribute("data-id");
    if (!id) return;
    const prog = getCourseProgress(id);
    const bar = card.querySelector(".progress-bar");
    if (bar) bar.style.width = prog + "%";
    const pct = card.querySelector(".progress-pct");
    if (pct) pct.innerText = prog + "%";
    const badge = card.querySelector(".badge-completed");
    if (badge) {
      const completed = getCompletedCourses().includes(id);
      badge.style.display = completed ? "inline-block" : "none";
    }
  });
}

function loadDashboard() {
  requireLoginOrRedirect();
  const user = getUser();
  if (!user) return;
  const userNameEl = document.getElementById("user-name");
  if (userNameEl) userNameEl.innerText = user;
  const creditEl = document.getElementById("credit-display");
  if (creditEl) creditEl.innerText = getCredits();

  const grid = document.getElementById("dashboard-course-list");
  if (!grid) return;
  grid.innerHTML = "";

  if (!window.courses || !Array.isArray(window.courses)) {
    grid.innerHTML = "<div style='padding:18px'>No courses found.</div>";
    return;
  }

  window.courses.forEach(course => {
    const stored = localStorage.getItem(_progressKey(course.id, user));
    if (stored === null) {
      const completed = getCompletedCourses().includes(course.id);
      localStorage.setItem(_progressKey(course.id, user), completed ? "100" : String(course.progress || 0));
    }
    const card = buildCourseCard(course);
    grid.appendChild(card);
  });

  setTimeout(()=> refreshDashboardIfPresent(), 180);
}

/* DOM ready */
document.addEventListener('DOMContentLoaded', function(){
  try { initProgressBars(); } catch(e){}
  try { refreshDashboardIfPresent(); } catch(e){}
});
