import React, { useState } from 'react';
import { staticFlowchartData } from './data/flowchartData';
import Flowchart from './components/Flowchart';
import type { Stage } from './types';

const App: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(staticFlowchartData[0]?.id ?? 1);

  return (
    <main className="bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen font-sans text-slate-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Diagrama de Flujo de Validación de MVP</h1>
        </header>

        {staticFlowchartData.length > 0 && (
            <Flowchart 
              stages={staticFlowchartData}
              activeStageId={activeStageId}
              onStageSelect={setActiveStageId}
            />
        )}
      </div>
    </main>
  );
};

export default App;