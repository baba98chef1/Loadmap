export interface TeamMember {
    id: number;
    name: string;
    role: string;
    av: string;
    rate: number;
    cost: number;
    sen: 'Junior' | 'Mid' | 'Senior';
    color: string;
    skills: string[];
    alloc: Record<string, number>;
  }
  
  export interface Project {
    id: string;
    num?: string;
    name: string;
    client: string;
    status: 'active' | 'pipeline' | 'won';
    color: string;
    start: number;
    end: number;
    budget: number;
    billed: number;
    prob?: number;
    skillReqs?: SkillReq[];
  }
  
  export interface SkillReq {
    id: number;
    skill: string;
    hrs: number;
    assignedId: number | null;
  }
  
  export interface LeaveEntry {
    pid: number;
    label: string;
    start: number;
    end: number;
    color: string;
  }
  
  export interface PipelineDeal {
    id: string;
    name: string;
    client: string;
    prob: number;
    value: number;
    startWeek: number;
    dur: number;
    needs: string[];
  }
  
  export type View =
    | 'dashboard'
    | 'heatmap'
    | 'team'
    | 'projects'
    | 'pipeline'
    | 'leave'
    | 'scenarios'
    | 'profit'
    | 'ai'
    | 'reports'
    | 'digest'
    | 'pmsync'
    | 'offices'
    | 'pricing'
    | 'settings';