import React, { useState } from 'react';
import { AudioUpload, EbookUpload, PodcastUpload } from '../../types/upload';

interface Props {
  type: 'audiobook' | 'ebook' | 'podcast';
  format: string;
  episodeType?: string | null;
  episodeNumber?: number | null;
  educationClass?: string | null;
  board?: string | null;
  category?: string | null;
  onSubmit: (data: AudioUpload | EbookUpload | PodcastUpload) => void;
}

const GENRES = [
  'Fiction', 'Non-Fiction', 'Mystery', 'Thriller', 'Romance', 'Science Fiction',
  'Fantasy', 'Horror', 'Biography', 'History', 'Self-Help', 'Business',
  'Technology', 'Science', 'Arts', 'Music', 'Travel', 'Cooking'
];

export function UploadForm({ type, format, episodeType, episodeNumber, educationClass, board, category, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [previewClip, setPreviewClip] = useState<File | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');

  const handleGenreToggle = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else if (selectedGenres.length < 6) {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleHashtagAdd = () => {
    if (hashtagInput && !hashtags.includes(hashtagInput)) {
      setHashtags([...hashtags, hashtagInput]);
      setHashtagInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseData = {
      title,
      description,
      thumbnail,
      previewClip,
      genres: selectedGenres,
      hashtags,
    };

    if (type === 'audiobook' || type === 'podcast') {
      onSubmit({
        ...baseData,
        audio: file,
        format,
        episodeType,
        episodeNumber,
      } as AudioUpload | PodcastUpload);
    } else {
      onSubmit({
        ...baseData,
        file,
        format,
        class: educationClass,
        board,
        category,
      } as EbookUpload);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-6 bg-white/20 rounded-xl">
      <h2 className="text-2xl font-bold text-white text-center">Upload {format}</h2>
      
      <div className="grid gap-4">
        <label className="text-white">
          {type === 'ebook' ? 'Upload File' : 'Upload Audio'}
          <input
            type="file"
            accept={type === 'ebook' ? '.pdf,.epub,.mobi' : '.mp3,.wav'}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-white
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-white/20 file:text-white
                     hover:file:bg-white/30"
            required
          />
        </label>

        <label className="text-white">
          Upload Thumbnail
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-white
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-white/20 file:text-white
                     hover:file:bg-white/30"
            required
          />
        </label>

        <label className="text-white">
          Upload Preview Clip
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setPreviewClip(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-white
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-white/20 file:text-white
                     hover:file:bg-white/30"
            required
          />
        </label>

        <label className="text-white">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md bg-white/10 border-transparent p-2 text-white"
            required
          />
        </label>

        <label className="text-white">
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md bg-white/10 border-transparent p-2 text-white"
            rows={4}
            required
          />
        </label>

        <div className="text-white">
          <p className="mb-2">Select Genres (max 6)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {GENRES.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => handleGenreToggle(genre)}
                className={`p-2 rounded ${
                  selectedGenres.includes(genre)
                    ? 'bg-white/40 text-white'
                    : 'bg-white/10 text-white/70'
                } ${selectedGenres.length >= 6 && !selectedGenres.includes(genre) ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={selectedGenres.length >= 6 && !selectedGenres.includes(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="text-white">
          <p className="mb-2">Hashtags</p>
          <div className="flex gap-2 mb-2 flex-wrap">
            {hashtags.map((tag) => (
              <span key={tag} className="bg-white/20 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={hashtagInput}
              onChange={(e) => setHashtagInput(e.target.value)}
              className="flex-1 rounded-md bg-white/10 border-transparent p-2 text-white"
              placeholder="Add hashtag"
            />
            <button
              type="button"
              onClick={handleHashtagAdd}
              className="px-4 py-2 bg-white/20 rounded-md text-white hover:bg-white/30"
            >
              Add
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 p-4 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors font-bold"
        >
          Upload Now
        </button>
      </div>
    </form>
  );
}