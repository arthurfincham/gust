import React from 'react';

export default function OutlinedButton() {
  return (
    <div className="flex items-center justify-center w-2/3 py-6 bg-white md:w-1/3 rounded-xl h-5/6">
      <button className="px-3 py-2 bg-white border-2 shadow-lg hover:bg-gray-50 rounded-xl hover:shadow-primary-200/40 border-primary-600">
        <span className="tracking-wide text-primary-600 font-sans-bb">
          Outlined Button
        </span>
      </button>
    </div>
  );
}
