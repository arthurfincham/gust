import React from 'react';

export default function BasicButton() {
  return (
    <div className="flex items-center justify-center w-2/3 py-6 bg-white md:w-1/3 rounded-xl h-5/6">
      <button className="px-3 py-2 shadow-lg hover:bg-primary-700 bg-primary-600 rounded-xl hover:shadow-primary-200/40">
        <span className="tracking-wide text-white font-sans-b">
          Basic Button
        </span>
      </button>
    </div>
  );
}
