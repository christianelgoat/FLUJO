import React, { useState, useEffect } from 'react';
import type { Stage } from '../types';
import FlowchartNode from './FlowchartNode';
import SidebarNav from './SidebarNav';

interface FlowchartProps {
  stages: Stage[];
  activeStageId: number;
  onStageSelect: (id: number) => void;
}

const Flowchart: React.FC<FlowchartProps> = ({ stages, activeStageId, onStageSelect }) => {
  const [displayStage, setDisplayStage] = useState<Stage | undefined>(stages.find(s => s.id === activeStageId));
  const [animationClass, setAnimationClass] = useState('animate-contentFadeIn');

  useEffect(() => {
    if (displayStage?.id !== activeStageId) {
      setAnimationClass('animate-contentFadeOut');

      const timer = setTimeout(() => {
        setDisplayStage(stages.find(s => s.id === activeStageId));
        setAnimationClass('animate-contentFadeIn');
      }, 300); // Must match the duration of contentFadeOut animation

      return () => clearTimeout(timer);
    }
  }, [activeStageId, stages, displayStage]);

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
      <SidebarNav 
        stages={stages} 
        activeStageId={activeStageId} 
        onStageSelect={onStageSelect} 
      />
      <div className="flex-1 relative min-h-[650px]">
        {displayStage && (
          <div className={animationClass}>
            <FlowchartNode stage={displayStage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Flowchart;