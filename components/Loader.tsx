
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
      <p className="ml-4 text-slate-600 text-lg">Generando diagrama de flujo...</p>
    </div>
  );
};

export default Loader;
