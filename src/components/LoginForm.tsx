import React, { useState } from 'react';
import { members } from '../data/members';

interface Props {
  onLogin: (memberId: string) => void;
}

export function LoginForm({ onLogin }: Props) {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const member = members[memberId];
    if (member && member.password === password) {
      setError('');
      onLogin(memberId);
    } else {
      setError('WRONG ENTRY (If you think this is wrong, contact your Heads)');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 p-6 bg-white/20 rounded-xl border-[10px] border-rainbow animate-border-rainbow w-full max-w-md">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">Member ID</label>
        <input
          type="text"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          placeholder="Enter Member ID"
          className="w-full p-3 rounded-lg text-lg bg-white/90 placeholder-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="w-full p-3 rounded-lg text-lg bg-white/90 placeholder-gray-400"
        />
      </div>

      <button
        onClick={handleLogin}
        className="mt-4 p-4 bg-white/20 rounded-xl cursor-pointer text-xl font-bold text-white 
                 shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-white/40"
      >
        Login
      </button>
      
      {error && (
        <p className="text-red-500 font-bold text-center">{error}</p>
      )}
    </div>
  );
}