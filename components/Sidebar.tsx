'use client';

import { View } from '@/lib/types';

const NAV = [
  { group: 'Core' },
  { id: 'dashboard', label: 'Dashboard',    icon: '◈' },
  { id: 'heatmap',   label: 'Heatmap',      icon: '▦' },
  { id: 'team',      label: 'Team',         icon: '◉' },
  { id: 'projects',  label: 'Projects',     icon: '▤' },
  { id: 'pipeline',  label: 'Pipeline',     icon: '◎' },
  { id: 'leave',     label: 'Leave Sync',   icon: '◷' },
  { id: 'offices',   label: 'Offices',      icon: '⊞' },
  { group: 'Growth' },
  { id: 'scenarios', label: 'Scenarios',    icon: '⊕' },
  { id: 'profit',    label: 'Profitability',icon: '$' },
  { group: 'V3', badge: true },
  { id: 'ai',        label: 'AI Forecasting', icon: '⚡', badge: 'AI' },
  { id: 'reports',   label: 'Reports',       icon: '▥',  badge: 'NEW' },
  { id: 'digest',    label: 'Weekly Digest', icon: '✉',  badge: 'NEW' },
  { id: 'pmsync',    label: 'Tool Sync',     icon: '⟳',  badge: 'NEW' },
  { group: 'Account' },
  { id: 'pricing',   label: 'Pricing',      icon: '◇' },
  { id: 'settings',  label: 'Settings',     icon: '⚙' },
];

interface SidebarProps {
  view: View;
  setView: (v: View) => void;
  firmName: string;
}

export default function Sidebar({ view, setView, firmName }: SidebarProps) {
  return (
    <aside className="app-sidebar">
      <div className="nav-logo">
        Load<span>map</span>
        <div style={{ fontSize: 11, color: 'var(--dim)', fontWeight: 400, marginTop: 2 }}>
          {firmName}
        </div>
      </div>

      <nav style={{ flex: 1, paddingBottom: 16 }}>
        {NAV.map((item, i) => {
          if ('group' in item && !('id' in item)) {
            return (
              <div key={i} className="nav-group-label">{item.group}</div>
            );
          }
          const navItem = item as { id: string; label: string; icon: string; badge?: string };
          return (
            <button
              key={navItem.id}
              className={`nav-item ${view === navItem.id ? 'active' : ''}`}
              onClick={()=> setView(navItem.id as View)}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: 'center', flexShrink: 0 }}>
                {navItem.icon}
              </span>
              {navItem.label}
              {navItem.badge && (
                <span
                  className="nav-badge"
                  style={{
                    background: navItem.badge === 'AI' ? 'var(--blue-dim)' : '#2a1a4a',
                    color: navItem.badge === 'AI' ? 'var(--blue)' : '#a78bfa',
                    border: `1px solid ${navItem.badge === 'AI' ? 'var(--blue)' : '#6d28d9'}`,
                  }}
                >
                  {navItem.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}