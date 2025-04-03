import React from 'react';
import { Topic } from '../types';
import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  onClick: (topic: Topic) => void;
}

export function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(topic)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={topic.imageUrl} 
          alt={topic.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
        <p className="text-gray-600 mb-4">{topic.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
          <span className="text-sm text-gray-500">{topic.progress}%</span>
          <ChevronRight className="ml-2 text-gray-400" />
        </div>
      </div>
    </div>
  );
}