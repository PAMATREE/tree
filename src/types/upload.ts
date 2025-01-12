export type AudioFormat = '15mins' | 'full book summary' | 'TREE ORIGINALS';
export type PodcastFormat = 'Tree Originals' | 'Guest Special' | 'CHIT-CHAT';
export type EbookFormat = 'Most Demanding' | 'Education' | 'Special Reads' | 'BOOKS';
export type EpisodeType = '10min prologue' | 'Normal Episodes';
export type EducationClass = '9' | '10' | '11' | '12';
export type EducationBoard = 'cbse' | 'icse';
export type EducationCategory = 'projects' | 'notes';

export interface UploadFormBase {
  title: string;
  description: string;
  thumbnail: File | null;
  previewClip: File | null;
  genres: string[];
  hashtags: string[];
}

export interface AudioUpload extends UploadFormBase {
  audio: File | null;
  format: AudioFormat;
  episodeNumber?: number;
  episodeType?: EpisodeType;
}

export interface EbookUpload extends UploadFormBase {
  file: File | null;
  format: EbookFormat;
  class?: EducationClass;
  board?: EducationBoard;
  category?: EducationCategory;
}

export interface PodcastUpload extends UploadFormBase {
  audio: File | null;
  format: PodcastFormat;
  episodeNumber?: number;
}