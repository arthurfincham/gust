import DummyBar from './docComponents/DummyBar';

import React from 'react';
export default function UsingComponents() {
  return (
    <div className="w-full h-auto space-y-4 docWrapper">
      <div className="flex justify-center w-full demoBox">
        <DummyBar min={0} max={100} value={75} />
      </div>

      <p>To get the code for a component, click on the tag button.</p>
      <p>From there you can copy and paste the component as required.</p>
    </div>
  );
}
