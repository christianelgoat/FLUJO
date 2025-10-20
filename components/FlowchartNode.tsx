import React from 'react';
import type { Stage } from '../types';

interface FlowchartNodeProps {
  stage: Stage;
}

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div>
    <h4 className="flex items-center text-lg font-semibold text-slate-700 mb-3">
      <div className="flex-shrink-0 h-10 w-10 bg-sky-100/70 text-sky-600 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="ml-3">{title}</span>
    </h4>
    <div className="ml-2 pl-11 border-l-2 border-slate-200 text-slate-600 text-sm">
      {children}
    </div>
  </div>
);

const IconClipboardList: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
  </svg>
);

const IconWrench: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const IconFileCheck: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
  </svg>
);

const FlowchartNode: React.FC<FlowchartNodeProps> = ({ stage }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto z-10">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group">
        
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 h-full w-1 bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"></div>

        <div className="p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
              {stage.id}
            </div>
            <div className="ml-5">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{stage.title}</h3>
              <p className="text-slate-500 mt-1.5 leading-relaxed">{stage.description}</p>
            </div>
          </div>
          
          <div className="mt-8 space-y-6 border-t border-slate-200 pt-8">
            <Section title="Acciones Realizadas" icon={<IconClipboardList className="w-5 h-5" />}>
              <ul className="list-disc pl-5 space-y-1.5">
                {stage.actions.map((action, index) => <li key={index}>{action}</li>)}
              </ul>
            </Section>

            <Section title="Herramientas Utilizadas" icon={<IconWrench className="w-5 h-5" />}>
              <ul className="list-disc pl-5 space-y-1.5">
                {stage.tools.map((tool, index) => <li key={index}>{tool}</li>)}
              </ul>
            </Section>

            <Section title="Evidencia / Criterios Clave" icon={<IconFileCheck className="w-5 h-5" />}>
               <ul className="list-disc pl-5 space-y-1.5">
                {stage.evidence.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowchartNode;