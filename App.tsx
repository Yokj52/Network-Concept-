import React, { useState } from 'react';
import { topics } from './data';
import { Topic, SearchResult } from './types';
import { TopicCard } from './components/TopicCard';
import { TopicModal } from './components/TopicModal';
import { SearchBar } from './components/SearchBar';
import { GraduationCap } from 'lucide-react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topicsData, setTopicsData] = useState(topics);

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  const handleSearchSelect = (result: SearchResult) => {
    const topic = topicsData.find(t => t.id === result.topicId);
    if (topic) {
      setSelectedTopic(topic);
    }
  };

  const handleSubtopicComplete = (topicId: string, subtopicId: string) => {
    setTopicsData(prevTopics => {
      return prevTopics.map(topic => {
        if (topic.id === topicId) {
          const updatedSubtopics = topic.subtopics.map(subtopic => 
            subtopic.id === subtopicId 
              ? { ...subtopic, completed: !subtopic.completed }
              : subtopic
          );
          
          const completedCount = updatedSubtopics.filter(st => st.completed).length;
          const progress = Math.round((completedCount / updatedSubtopics.length) * 100);
          
          return {
            ...topic,
            subtopics: updatedSubtopics,
            progress
          };
        }
        return topic;
      });
    });
  };

  const totalProgress = Math.round(
    topicsData.reduce((acc, topic) => acc + topic.progress, 0) / topicsData.length
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Network Learning Platform
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <SearchBar onSelect={handleSearchSelect} />
              <div>
                <span className="text-sm text-gray-500">Overall Progress</span>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${totalProgress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{totalProgress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topicsData.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onClick={handleTopicClick}
            />
          ))}
        </div>
      </main>

      {selectedTopic && (
        <TopicModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          onSubtopicComplete={handleSubtopicComplete}
        />
      )}
    </div>
  );
}

export default App;