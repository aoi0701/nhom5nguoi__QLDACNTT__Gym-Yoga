import { buildDemoState } from '../frontend/src/lib/demoSeed.js';
import { starterRoutines } from '../frontend/src/lib/starter.js';
import { uid, isoOf } from '../frontend/src/lib/format.js';

const API_BASE = 'http://localhost:8080';

async function login(identifier, password) {
  const res = await fetch(`${API_BASE}/api/login/password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: API_BASE },
    body: JSON.stringify({ identifier, password })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Login failed for ${identifier}: ${res.status} ${err}`);
  }
  const cookie = res.headers.get('set-cookie');
  const gymsid = cookie ? cookie.split(';')[0] : '';
  const data = await res.json();
  return { user: data.user, cookie: gymsid };
}

async function getState(cookie) {
  const res = await fetch(`${API_BASE}/api/data`, {
    headers: { Cookie: cookie }
  });
  if (!res.ok) throw new Error(`GET /api/data failed: ${res.status}`);
  return res.json();
}

async function putState(cookie, state, baseRev) {
  const res = await fetch(`${API_BASE}/api/data`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
      Origin: API_BASE
    },
    body: JSON.stringify({ state, baseRev })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`PUT /api/data failed: ${res.status} ${err}`);
  }
  return res.json();
}

// Generate an alternate dataset for regular user
function buildUserDemoState() {
  const baseDemo = buildDemoState();
  // Adjust user data: slightly different bodyweight, fewer weeks, different accent
  const userWorkouts = baseDemo.workouts.slice(-20).map((w, idx) => ({
    ...w,
    id: uid(),
    name: w.name,
    bw: Math.round((72.5 + (idx * 0.1)) * 10) / 10,
    entries: w.entries.map(e => ({
      ...e,
      topW: e.topW ? Math.round(e.topW * 0.75 / 2.5) * 2.5 : null,
      sets: e.sets.map(s => ({
        ...s,
        w: s.w ? Math.round(s.w * 0.75 / 2.5) * 2.5 : 0,
        r: Math.max(5, s.r - (idx % 2 === 0 ? 0 : 1))
      }))
    }))
  }));

  const userBw = baseDemo.bodyweight.slice(-15).map(b => ({
    ...b,
    w: Math.round((74.0 - (74.0 - 71.5) * (Math.random() * 0.2 + 0.8)) * 10) / 10
  }));

  return {
    ...baseDemo,
    workouts: userWorkouts,
    bodyweight: userBw,
    measurements: baseDemo.measurements.slice(-4),
    targetW: 70,
    accent: 'cyan'
  };
}

async function main() {
  console.log('Seeding data for openGym accounts...');

  // 1. Seed Admin
  console.log('\n[1/2] Logging in as admin...');
  const adminAuth = await login('admin', 'Admin@OpenGym2026');
  console.log(`Logged in as: ${adminAuth.user.name} (id: ${adminAuth.user.id}, admin: ${adminAuth.user.admin})`);

  const adminCurrent = await getState(adminAuth.cookie);
  const adminDemo = buildDemoState();
  const adminState = {
    ...adminCurrent.state,
    ...adminDemo,
    accent: 'lime',
    theme: 'dark'
  };

  console.log(`Pushing demo data to admin (${adminDemo.workouts.length} workouts, ${adminDemo.routines.length} routines, ${adminDemo.bodyweight.length} weigh-ins)...`);
  await putState(adminAuth.cookie, adminState, adminCurrent.rev);
  console.log('Admin account data seeded successfully!');

  // 2. Seed User
  console.log('\n[2/2] Logging in as user...');
  const userAuth = await login('user', 'User@OpenGym2026');
  console.log(`Logged in as: ${userAuth.user.name} (id: ${userAuth.user.id}, admin: ${userAuth.user.admin})`);

  const userCurrent = await getState(userAuth.cookie);
  const userDemo = buildUserDemoState();
  const userState = {
    ...userCurrent.state,
    ...userDemo,
    accent: 'cyan',
    theme: 'dark'
  };

  console.log(`Pushing demo data to user (${userDemo.workouts.length} workouts, ${userDemo.routines.length} routines, ${userDemo.bodyweight.length} weigh-ins)...`);
  await putState(userAuth.cookie, userState, userCurrent.rev);
  console.log('User account data seeded successfully!');

  console.log('\nDone seeding both accounts!');
}

main().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
});
