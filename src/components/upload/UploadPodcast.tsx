import React, { useState } from 'react';
import { PodcastFormat, PodcastUpload } from '../../types/upload';
import { UploadForm } from './UploadForm';

export function UploadPodcast() {
  const [format, setFormat] = useState<PodcastFormat | null>(null);
  const [episodeNumber, setEpisodeNumber] = useState<number | null>(null);

  const handleSubmit = (data: PodcastUpload) => {
    // Handle the upload submission
    console.log('Uploading podcast:', data);
  };

  if (!format) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Select Format</h2>
        {(['Tree Originals', 'Guest Special', 'CHIT-CHAT'] as PodcastFormat[]).map((fmt) => (
          <button
            key={fmt}
            onClick={() => setFormat(fmt)}
            className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
          >
            {fmt}
          </button>
        ))}
      </div>
    );
  }

  if (format === 'Tree Originals' && !episodeNumber) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Select Episode Number</h2>
        <input
          type="number"
          min="1"
          className="p-2 rounded"
          onChange={(e) => setEpisodeNumber(parseInt(e.target.value))}
        />
        <button
          onClick={() => setEpisodeNumber(parseInt(document.querySelector('input')?.value || '1'))}
          className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <UploadForm
      type="podcast"
      format={format}
      episodeNumber={episodeNumber}
      onSubmit={handleSubmit}
    />
  );
}