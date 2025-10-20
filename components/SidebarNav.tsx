import React from 'react';
import type { Stage } from '../types';

interface SidebarNavProps {
  stages: Stage[];
  activeStageId: number;
  onStageSelect: (id: number) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ stages, activeStageId, onStageSelect }) => {
  return (
    <aside className="w-full md:w-20 flex-shrink-0">
      <div className="md:sticky top-8 self-start">
        <div className="relative flex flex-row md:flex-col items-center justify-center md:justify-start gap-4 md:gap-0 p-4 md:p-0 bg-slate-100/50 md:bg-transparent rounded-lg">
          {/* Connector Line */}
          <div 
            className="absolute top-1/2 left-4 right-4 h-1 md:h-full md:w-1 bg-sky-200 -translate-y-1/2 md:translate-y-0 md:top-4 md:bottom-4 md:left-1/2 md:-translate-x-1/2" 
            aria-hidden="true"
          ></div>
          
          {/* Stage Buttons */}
          <ul className="relative flex flex-row md:flex-col items-center justify-around w-full md:w-auto md:space-y-8 z-10">
            {stages.map(stage => {
              const isActive = stage.id === activeStageId;
              return (
                <li key={stage.id}>
                  <button
                    onClick={() => onStageSelect(stage.id)}
                    className={`flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                      ${isActive 
                        ? 'w-12 h-12 bg-sky-500 border-sky-600 text-white font-bold text-xl shadow-lg scale-110' 
                        : 'w-10 h-10 bg-white border-slate-300 text-slate-500 hover:bg-sky-50 hover:border-sky-400 hover:scale-110'
                      }`
                    }
                    aria-current={isActive ? 'step' : undefined}
                    aria-label={`Ir a la Etapa ${stage.id}`}
                  >
                    {stage.id}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;