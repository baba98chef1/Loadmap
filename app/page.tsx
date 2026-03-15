'use client';

import { useState } from 'react';
import { View } from '@/lib/types';
import { TEAM, PROJECTS, ALLOC, LEAVE, TIMEOFF } from '@/lib/data';
import Sidebar from '@/components/Sidebar';

// Placeholder views — we'll build each one properly next
function ComingSoon({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, gap: 16, textAlign: 'center' }}>
      <div style={{ fontSize: 48 }}>🚧</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--white)' }}>{title}</div>
      <div style={{ fontSize: 14, color: 'var(--dim)', maxWidth: 340 }}>This view is being built. Check back soon.</div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>('dashboard');
  const [firmName] = useState('Apex Consulting');
  const [members, setMembers] = useState(TEAM);
  const [projects, setProjects] = useState(PROJECTS);
  const [alloc] = useState(ALLOC);
  const [leave, setLeave] = useState(LEAVE);
  const [timeoff] = useState(TIMEOFF);

  function renderView() {
    switch (view) {
      case 'dashboard':   return <ComingSoon title="Dashboard" />;
      case 'heatmap':     return <ComingSoon title="Heatmap" />;
      case 'team':        return <ComingSoon title="Team" />;
      case 'projects':    return <ComingSoon title="Projects" />;
      case 'pipeline':    return <ComingSoon title="Pipeline" />;
      case 'leave':       return <ComingSoon title="Leave Sync" />;
      case 'scenarios':   return <ComingSoon title="Scenarios" />;
      case 'profit':      return <ComingSoon title="Profitability" />;
      case 'ai':          return <ComingSoon title="AI Forecasting" />;
      case 'reports':     return <ComingSoon title="Reports" />;
      case 'digest':      return <ComingSoon title="Weekly Digest" />;
      case 'pmsync':      return <ComingSoon title="Tool Sync" />;
      case 'offices':     return <ComingSoon title="Offices" />;
      case 'pricing':     return <ComingSoon title="Pricing" />;
      case 'settings':    return <ComingSoon title="Settings" />;
      default:            return <ComingSoon title="Dashboard" />;
    }
  }

  return (
    <div className="app-shell">
      <Sidebar view={view} setView={setView} firmName={firmName} />
      <main className="app-main">
        {renderView()}
      </main>
    </div>
  );}