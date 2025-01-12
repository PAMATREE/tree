import React from 'react';
import { User, ProjectActivity } from '../../types/auth';
import { Activity, Users, FileEdit, Eye } from 'lucide-react';

interface Props {
  user: User;
  recentActivities: ProjectActivity[];
}

export function AdminDashboard({ user, recentActivities }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 w-full max-w-7xl">
      <div className="col-span-full bg-white/20 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Super Admin Dashboard
        </h2>
        <div className="text-white space-y-2">
          <p>Welcome back, {user.name}!</p>
          <p>Last login: {user.lastSeen?.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white/20 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Recent Activities
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="bg-white/10 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-semibold">{activity.title}</h4>
                  <p className="text-white/70 text-sm">
                    Uploaded by: {activity.uploadedBy}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                    <Eye className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                    <FileEdit className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-white/70 text-sm">
                Last modified: {activity.lastModified.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/20 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4">
          <button className="p-4 bg-white/20 rounded-lg text-white hover:bg-white/30 text-left">
            View All Uploads
          </button>
          <button className="p-4 bg-white/20 rounded-lg text-white hover:bg-white/30 text-left">
            Manage Members
          </button>
          <button className="p-4 bg-white/20 rounded-lg text-white hover:bg-white/30 text-left">
            Review Pending Content
          </button>
        </div>
      </div>
    </div>
  );
}