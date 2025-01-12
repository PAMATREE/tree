export interface MemberData {
  password: string;
  name: string;
  department: string;
  role: string;
  isSuperAdmin?: boolean;
  lastSeen?: Date;
}

export const members: Record<string, MemberData> = {
  "0001": { 
    password: "1234", 
    name: "SRIJA BANIK", 
    department: "HQ", 
    role: "SUPER_HEAD",
    isSuperAdmin: true,
    lastSeen: new Date()
  },
  "0002": { password: "1235", name: "ARYAN KRISHNA", department: "HQ", role: "HEAD" },
  "0003": { password: "1236", name: "MANGALDEEP PAL", department: "HQ", role: "HEAD" },
  // ... rest of the members
};