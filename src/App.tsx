import React, { useState } from 'react';
import { DepartmentSelection } from './components/DepartmentSelection';
import { RoleSelection } from './components/RoleSelection';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { Department, Role, User } from './types/auth';
import { members } from './data/members';

function App() {
  const [step, setStep] = useState<'department' | 'role' | 'login' | 'dashboard'>('department');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleDepartmentSelect = (department: Department) => {
    setSelectedDepartment(department);
    setStep('role');
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep('login');
  };

  const handleLogin = (memberId: string) => {
    const memberData = members[memberId];
    if (memberData) {
      setUser({
        memberId,
        name: memberData.name,
        department: memberData.department as Department,
        role: memberData.role as Role
      });
      setStep('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient animate-gradient overflow-hidden">
      {step === 'department' && <DepartmentSelection onSelect={handleDepartmentSelect} />}
      {step === 'role' && <RoleSelection onSelect={handleRoleSelect} />}
      {step === 'login' && <LoginForm onLogin={handleLogin} />}
      {step === 'dashboard' && user && <Dashboard user={user} />}
    </div>
  );
}

export default App;