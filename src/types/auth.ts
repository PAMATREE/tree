export interface User {
  memberId: string;
  name: string;
  department: Department;
  role: Role;
  isSuperAdmin?: boolean;
  lastSeen?: Date;
}

export type Department = 'HQ' | 'VOCAL' | 'SCRIPT' | 'EDITING' | 'FRONTEND' | 'BACKEND' | 'FINANCE' | 'MUSIC' | 'MARKETING';
export type Role = 'SUPER_HEAD' | 'HEAD' | 'MEMBER';

export interface ProjectActivity {
  id: string;
  title: string;
  type: 'audiobook' | 'ebook' | 'podcast';
  status: 'pending' | 'completed';
  uploadedBy: string;
  uploadedAt: Date;
  lastModified: Date;
}