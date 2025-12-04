import React, { useState } from 'react';
import { TabType } from './types';
import StudyDashboard from './components/StudyDashboard';
import ReclusiveSupport from './components/ReclusiveSupport';
import RestingGuide from './components/RestingGuide';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.STUDY);

  const getTabButtonClass = (type: TabType) => {
    const baseClass = "h-[58px] sm:h-[60px] w-full rounded-md font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500";
    const activeClass = "bg-blue-600 text-white shadow-lg shadow-blue-500/30";
    const inactiveClass = "bg-gray-700 text-gray-300 hover:bg-gray-600";
    
    return `${baseClass} ${activeTab === type ? activeClass : inactiveClass}`;
  };

  const renderContent = () => {
    switch (activeTab) {
      case TabType.STUDY:
        return <StudyDashboard />;
      case TabType.RECLUSIVE:
        return <ReclusiveSupport />;
      case TabType.RESTING:
        return <RestingGuide />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* 
        Container based on JSON specs:
        Approx Width: 724px, Height: 519px
        Using responsive max-w for better mobile support while respecting the design intent.
      */}
      <div 
        className="w-full max-w-3xl bg-gray-800/50 border border-gray-600 rounded-lg shadow-2xl backdrop-blur-sm p-6 flex flex-col gap-6"
        style={{ minHeight: '520px' }}
      >
        {/* Header / Title (Optional but good for UX) */}
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            청년 성장 지원 플랫폼
          </h1>
          <p className="text-gray-400 text-xs mt-1">당신의 오늘을 응원합니다</p>
        </div>

        {/* Tab Buttons Row - Mapped to Button1, Button2, Button3 positions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveTab(TabType.STUDY)}
            className={getTabButtonClass(TabType.STUDY)}
          >
            공부
            <span className="block text-[10px] font-normal opacity-70 mt-1">학업 집중 & 목표 달성</span>
          </button>
          <button 
            onClick={() => setActiveTab(TabType.RECLUSIVE)}
            className={getTabButtonClass(TabType.RECLUSIVE)}
          >
            은둔형 외톨이
            <span className="block text-[10px] font-normal opacity-70 mt-1">소통 & 작은 변화</span>
          </button>
          <button 
            onClick={() => setActiveTab(TabType.RESTING)}
            className={getTabButtonClass(TabType.RESTING)}
          >
            쉬었음 세대
            <span className="block text-[10px] font-normal opacity-70 mt-1">휴식 & 진로 탐색</span>
          </button>
        </div>

        {/* Misc1 Content Area */}
        <div className="flex-1 relative">
          <div 
            className="absolute inset-0 rounded-lg p-6 overflow-hidden border-2 border-dashed border-gray-600 bg-gray-900/40 transition-all duration-300"
            style={{ 
              borderColor: activeTab === TabType.STUDY ? '#3b82f6' : 
                          activeTab === TabType.RECLUSIVE ? '#10b981' : '#facc15' 
            }}
          >
            {renderContent()}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;