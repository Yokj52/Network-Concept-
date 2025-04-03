import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { topics } from '../data';
import { SearchResult } from '../types';

interface SearchBarProps {
  onSelect: (result: SearchResult) => void;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchTopics = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    topics.forEach(topic => {
      topic.subtopics.forEach(subtopic => {
        if (subtopic.title.toLowerCase().includes(query)) {
          searchResults.push({
            topicId: topic.id,
            topicTitle: topic.title,
            subtopicId: subtopic.id,
            subtopicTitle: subtopic.title,
            matchType: 'title'
          });
        } else if (subtopic.content.toLowerCase().includes(query)) {
          searchResults.push({
            topicId: topic.id,
            topicTitle: topic.title,
            subtopicId: subtopic.id,
            subtopicTitle: subtopic.title,
            matchType: 'content'
          });
        } else {
          subtopic.keyPoints.forEach(point => {
            if (point.toLowerCase().includes(query)) {
              searchResults.push({
                topicId: topic.id,
                topicTitle: topic.title,
                subtopicId: subtopic.id,
                subtopicTitle: subtopic.title,
                matchType: 'keyPoints'
              });
            }
          });
        }
      });
    });

    setResults(searchResults.slice(0, 5));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchTopics(value);
    setIsOpen(true);
  };

  const handleResultClick = (result: SearchResult) => {
    onSelect(result);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search topics..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
          {results.map((result, index) => (
            <button
              key={`${result.topicId}-${result.subtopicId}-${index}`}
              onClick={() => handleResultClick(result)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="text-sm font-medium text-gray-900">
                {result.subtopicTitle}
              </div>
              <div className="text-xs text-gray-500">
                in {result.topicTitle}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}