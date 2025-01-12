import React, { useState } from 'react';
import { UploadAudiobook } from './UploadAudiobook';
import { UploadEbook } from './UploadEbook';
import { UploadPodcast } from './UploadPodcast';
import { Headphones, Book, Podcast } from 'lucide-react';

type UploadType = 'audiobook' | 'ebook' | 'podcast' | null;

export function UploadSection() {
  const [uploadType, setUploadType] = useState<UploadType>(null);

  if (!uploadType) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 w-full max-w-4xl">
        <button
          onClick={() => setUploadType('audiobook')}
          className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
        >
          <Headphones className="w-12 h-12 text-white mb-4" />
          <span className="text-xl font-bold text-white">Audiobook</span>
        </button>

        <button
          onClick={() => setUploadType('ebook')}
          className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
        >
          <Book className="w-12 h-12 text-white mb-4" />
          <span className="text-xl font-bold text-white">E-Book</span>
        </button>

        <button
          onClick={() => setUploadType('podcast')}
          className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
        >
          <Podcast className="w-12 h-12 text-white mb-4" />
          <span className="text-xl font-bold text-white">Podcast</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl p-8">
      <button
        onClick={() => setUploadType(null)}
        className="mb-6 text-white hover:underline"
      >
        ← Back to upload options
      </button>

      {uploadType === 'audiobook' && <UploadAudiobook />}
      {uploadType === 'ebook' && <UploadEbook />}
      {uploadType === 'podcast' && <UploadPodcast />}
    </div>
  );
}