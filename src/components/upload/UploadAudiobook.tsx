import React, { useState } from 'react';
import { AudioFormat, AudioUpload, EpisodeType } from '../../types/upload';
import { UploadForm } from './UploadForm';

export function UploadAudiobook() {
  const [format, setFormat] = useState<AudioFormat | null>(null);
  const [episodeType, setEpisodeType] = useState<EpisodeType | null>(null);
  const [episodeNumber, setEpisodeNumber] = useState<number | null>(null);

  const handleSubmit = (data: AudioUpload) => {
    // Handle the upload submission
    console.log('Uploading audiobook:', data);
  };

  if (!format) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Select Format</h2>
        {(['15mins', 'full book summary', 'TREE ORIGINALS'] as AudioFormat[]).map((fmt) => (
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

  if (format === 'full book summary' && !episodeType) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Select Episode Type</h2>
        {(['10min prologue', 'Normal Episodes'] as EpisodeType[]).map((type) => (
          <button
            key={type}
            onClick={() => setEpisodeType(type)}
            className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
          >
            {type}
          </button>
        ))}
      </div>
    );
  }

  if ((format === 'full book summary' && episodeType === 'Normal Episodes' && episodeNumber === null) ||
      (format === 'TREE ORIGINALS' && episodeNumber === null)) {
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
      type="audiobook"
      format={format}
      episodeType={episodeType}
      episodeNumber={episodeNumber}
      onSubmit={handleSubmit}
    />
  );
}