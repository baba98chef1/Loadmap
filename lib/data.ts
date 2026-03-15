export const CURRENT_WEEK = 9;
export const CAP = 40;
export const CAP_DAILY = 8;

export const TEAM = [
  { id: 1, name: 'Mara Jensen',     role: 'Strategy Lead',    av: 'MJ', rate: 195, cost: 95,  sen: 'Senior', color: '#6366F1', skills: ['Strategy','Workshops','OKRs'],           alloc: { p1: 32, p2: 0,  p3: 8  } },
  { id: 2, name: 'Dev Patel',       role: 'Sr. Consultant',   av: 'DP', rate: 165, cost: 80,  sen: 'Senior', color: '#3B82F6', skills: ['Analytics','Tableau','Finance'],           alloc: { p1: 16, p2: 24, p3: 0  } },
  { id: 3, name: 'Sofia Reyes',     role: 'Project Manager',  av: 'SR', rate: 145, cost: 70,  sen: 'Mid',    color: '#10B981', skills: ['PM','Agile','Stakeholder Mgmt'],           alloc: { p1: 24, p2: 16, p3: 0  } },
  { id: 4, name: 'Theo Nakamura',   role: 'Data Analyst',     av: 'TN', rate: 140, cost: 65,  sen: 'Mid',    color: '#F59E0B', skills: ['SQL','Python','Modeling'],                 alloc: { p1: 8,  p2: 32, p3: 0  } },
  { id: 5, name: 'Priya Ahluwalia', role: 'UX Researcher',    av: 'PA', rate: 155, cost: 75,  sen: 'Senior', color: '#F43F5E', skills: ['Research','Prototyping','Testing'],        alloc: { p1: 0,  p2: 0,  p3: 40 } },
  { id: 6, name: "Liam O'Brien",    role: 'Jr. Consultant',   av: 'LO', rate: 110, cost: 48,  sen: 'Junior', color: '#8B5CF6', skills: ['Research','Decks','Analysis'],             alloc: { p1: 16, p2: 0,  p3: 16 } },
];

export const PROJECTS = [
  { id: 'p1', num: 'PRJ-001', name: 'Meridian Ops Overhaul',   client: 'Meridian Group',  status: 'active',   color: '#6366F1', start: 9,  end: 16, budget: 280000, billed: 140000 },
  { id: 'p2', num: 'PRJ-002', name: 'Flux Analytics Platform', client: 'Flux Capital',    status: 'active',   color: '#3B82F6', start: 10, end: 18, budget: 195000, billed: 80000  },
  { id: 'p3', num: 'PRJ-003', name: 'Harlow Brand Strategy',   client: 'Harlow & Sons',   status: 'active',   color: '#10B981', start: 9,  end: 13, budget: 95000,  billed: 75000  },
  { id: 'p4', num: 'PRJ-004', name: 'NovaCare Digital Cx',     client: 'NovaCare Health', status: 'pipeline', color: '#F59E0B', start: 13, end: 20, budget: 340000, billed: 0, prob: 75 },
  { id: 'p5', num: 'PRJ-005', name: 'Venture GTM Sprint',      client: 'Venture Labs',    status: 'pipeline', color: '#F43F5E', start: 15, end: 18, budget: 78000,  billed: 0, prob: 50 },
  { id: 'p6', num: 'PRJ-006', name: 'Zenith Market Entry',     client: 'Zenith Corp',     status: 'won',      color: '#8B5CF6', start: 17, end: 21, budget: 220000, billed: 0  },
];

export const ALLOC: Record<string, Record<string, number>> = {
  '1': { p1: 32, p2: 0,  p3: 8  },
  '2': { p1: 16, p2: 24, p3: 0  },
  '3': { p1: 24, p2: 16, p3: 0  },
  '4': { p1: 8,  p2: 32, p3: 0  },
  '5': { p1: 0,  p2: 0,  p3: 40 },
  '6': { p1: 16, p2: 0,  p3: 16 },
};

export const LEAVE = [
  { pid: 5, label: 'Annual Leave',   start: 2,  end: 4,  color: '#F43F5E' },
  { pid: 1, label: 'Conference',     start: 3,  end: 4,  color: '#6366F1' },
  { pid: 3, label: 'Sick Leave',     start: 7,  end: 8,  color: '#F59E0B' },
  { pid: 2, label: 'Annual Leave',   start: 9,  end: 11, color: '#3B82F6' },
  { pid: 4, label: 'Public Holiday', start: 9,  end: 10, color: '#10B981' },
  { pid: 6, label: 'Annual Leave',   start: 11, end: 12, color: '#8B5CF6' },
];

export const TIMEOFF: Record<number, number[]> = {
  11: [5], 12: [5, 1], 16: [3], 18: [2, 4], 20: [6],
};

export const PIPELINE = [
  { id: 'pl1', name: 'NovaCare Digital Cx',   client: 'NovaCare Health', prob: 75, value: 340000, startWeek: 13, dur: 7,  needs: ['Strategy', 'PM'] },
  { id: 'pl2', name: 'Venture GTM Sprint',    client: 'Venture Labs',    prob: 55, value: 78000,  startWeek: 15, dur: 4,  needs: ['Strategy', 'Research'] },
  { id: 'pl3', name: 'Zenith Market Entry',   client: 'Zenith Corp',     prob: 90, value: 220000, startWeek: 17, dur: 5,  needs: ['Strategy', 'Finance'] },
  { id: 'pl4', name: 'Orion Transformation',  client: 'Orion Systems',   prob: 30, value: 480000, startWeek: 19, dur: 10, needs: ['Strategy', 'Analytics'] },
];

export const ALL_SKILLS = [
  'Strategy','Execution','Design','Technology','Finance','Marketing',
  'Operations','Data','OKRs','Workshops','Agile','PM','Analytics',
  'Tableau','SQL','Python','Modeling','Research','Prototyping',
  'Testing','Decks','Analysis','Stakeholder Mgmt',
];

export function util(personId: number | string, alloc: Record<string, Record<string, number>> = ALLOC): number {
  const a = alloc[String(personId)] || {};
  return Math.round((Object.values(a).reduce((s, v) => s + v, 0) / CAP) * 100);
}

export function uColor(pct: number): string {
  return pct > 100 ? '#ef4444' : pct > 85 ? '#f59e0b' : pct > 60 ? '#10b981' : '#3b82f6';
}

export function sColor(status: string): string {
  return status === 'active' ? '#10b981' : status === 'pipeline' ? '#f59e0b' : '#8B5CF6';
}

export function fmt(n: number | string): string {
  const v = Number(n);
  if (!v && v !== 0) return '--';
  if (v >= 1e6) return '$' + (v / 1e6).toFixed(1) + 'M';
  if (v >= 1000) return '$' + Math.round(v / 1000) + 'k';
  return '$' + v;
}