export interface Topic {
  id: string;
  title: string;
  description: string;
  progress: number;
  subtopics: Subtopic[];
  imageUrl: string;
}

export interface Subtopic {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  keyPoints: string[];
  resources?: string[];
}

export interface SearchResult {
  topicId: string;
  topicTitle: string;
  subtopicId: string;
  subtopicTitle: string;
  matchType: 'title' | 'content' | 'keyPoints';
}