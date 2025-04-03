import React from 'react';
import { Topic, Subtopic } from '../types';
import { X, CheckCircle, Circle, ExternalLink } from 'lucide-react';

interface TopicModalProps {
  topic: Topic;
  onClose: () => void;
  onSubtopicComplete: (topicId: string, subtopicId: string) => void;
}

export function TopicModal({ topic, onClose, onSubtopicComplete }: TopicModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{topic.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="space-y-8">
            {topic.subtopics.map((subtopic) => (
              <div key={subtopic.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{subtopic.title}</h3>
                  <button
                    onClick={() => onSubtopicComplete(topic.id, subtopic.id)}
                    className="flex items-center text-sm text-blue-500 hover:text-blue-600"
                  >
                    {subtopic.completed ? (
                      <CheckCircle className="h-5 w-5 mr-1" />
                    ) : (
                      <Circle className="h-5 w-5 mr-1" />
                    )}
                    {subtopic.completed ? 'Completed' : 'Mark as Complete'}
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{subtopic.content}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Points:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {subtopic.keyPoints.map((point, index) => (
                      <li key={index} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>

                {subtopic.resources && subtopic.resources.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Additional Resources:</h4>
                    <ul className="space-y-2">
                      {subtopic.resources.map((resource, index) => (
                        <li key={index}>
                          <a
                            href={resource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            {new URL(resource).hostname.replace('www.', '')}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}