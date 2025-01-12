import React, { useState } from 'react';
import { EbookFormat, EbookUpload, EducationClass, EducationBoard, EducationCategory } from '../../types/upload';
import { UploadForm } from './UploadForm';

export function UploadEbook() {
  const [format, setFormat] = useState<EbookFormat | null>(null);
  const [educationClass, setEducationClass] = useState<EducationClass | null>(null);
  const [board, setBoard] = useState<EducationBoard | null>(null);
  const [category, setCategory] = useState<EducationCategory | null>(null);

  const handleSubmit = (data: EbookUpload) => {
    // Handle the upload submission
    console.log('Uploading ebook:', data);
  };

  if (!format) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Select Format</h2>
        {(['Most Demanding', 'Education', 'Special Reads', 'BOOKS'] as EbookFormat[]).map((fmt) => (
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

  if (format === 'Education') {
    if (!educationClass) {
      return (
        <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Select Class</h2>
          {(['9', '10', '11', '12'] as EducationClass[]).map((cls) => (
            <button
              key={cls}
              onClick={() => setEducationClass(cls)}
              className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
            >
              Class {cls}
            </button>
          ))}
        </div>
      );
    }

    if (!board) {
      return (
        <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Select Board</h2>
          {(['cbse', 'icse'] as EducationBoard[]).map((b) => (
            <button
              key={b}
              onClick={() => setBoard(b)}
              className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
            >
              {b.toUpperCase()}
            </button>
          ))}
        </div>
      );
    }

    if (!category) {
      return (
        <div className="grid grid-cols-1 gap-4 p-6 bg-white/20 rounded-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Select Category</h2>
          {(['projects', 'notes'] as EducationCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      );
    }
  }

  return (
    <UploadForm
      type="ebook"
      format={format}
      educationClass={educationClass}
      board={board}
      category={category}
      onSubmit={handleSubmit}
    />
  );
}