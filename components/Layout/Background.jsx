import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default Background;