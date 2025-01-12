import React from 'react';
import { Department } from '../types/auth';

interface Props {
  onSelect: (department: Department) => void;
}

export function DepartmentSelection({ onSelect }: Props) {
  const departments: Department[] = [
    'HQ Department',
    'Script Department',
    'Vocal Department',
    'Edit Department'
  ];

  return (
    <div className="grid grid-cols-2 gap-5 p-6 bg-white/20 rounded-xl border-[10px] border-rainbow animate-border-rainbow">
      <h2 className="col-span-2 text-2xl font-bold text-white text-center mb-6">
        Department
      </h2>
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onSelect(dept)}
          className="p-5 text-center bg-white/20 rounded-xl cursor-pointer text-xl font-bold text-white 
                   shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-white/40"
        >
          {dept}
        </button>
      ))}
    </div>
  );
}