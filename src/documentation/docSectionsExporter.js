import React from 'react';
import InstallTailwind from './InstallTailwind';
import CustomFonts from './CustomFonts';
import CustomColors from './CustomColors';
import UsingComponents from './UsingComponents';

export const docSections = [
  { id: 1, name: 'Install Tailwind', comp: <InstallTailwind /> },
  { id: 2, name: 'Custom Colors', comp: <CustomColors /> },
  { id: 3, name: 'Custom Fonts', comp: <CustomFonts /> },
  { id: 4, name: 'Components', comp: <UsingComponents /> },
];
