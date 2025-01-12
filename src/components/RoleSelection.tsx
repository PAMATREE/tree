import React from 'react';
import { Role } from '../types/auth';

interface Props {
  onSelect: (role: Role) => void;
}

export function RoleSelection({ onSelect }: Props) {
  const roles: Role[] = ['Head', 'Member'];

  return (
    <div className="grid grid-cols-2 gap-5 p-6 bg-white/20 rounded-xl border-[10px] border-rainbow animate-border-rainbow">
      <h2 className="col-span-2 text-2xl font-bold text-white text-center mb-6">
        Select Your Role
      </h2>
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onSelect(role)}
          className="p-5 text-center bg-white/20 rounded-xl cursor-pointer text-xl font-bold text-white 
                   shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-white/40"
        >
          {role}
        </button>
      ))}
    </div>
  );
}