import React from 'react';
import { User } from '../types/auth';
import { UploadSection } from './upload/UploadSection';
import { AdminDashboard } from './admin/AdminDashboard';

interface Props {
  user: User;
}

export function Dashboard({ user }: Props) {
  // Mock data for admin dashboard
  const recentActivities = [
    {
      id: '1',
      title: 'New Audiobook Upload',
      type: 'audiobook',
      status: 'pending',
      uploadedBy: 'Aryan Krishna',
      uploadedAt: new Date(),
      lastModified: new Date()
    },
    // Add more mock activities as needed
  ];

  if (user.isSuperAdmin) {
    return <AdminDashboard user={user} recentActivities={recentActivities} />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 p-8 w-full max-w-4xl">
      <div className="bg-white/20 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          Welcome, {user.name}!
        </h2>
        <div className="text-white space-y-2">
          <p>Member ID: {user.memberId}</p>
          <p>Department: {user.department}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>

      <UploadSection />
    </div>
  );
}