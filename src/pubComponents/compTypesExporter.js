import React from 'react';
import Progress from './progress/Progress';
import DataDisplay from './dataDisplay/DataDisplay';
import Buttons from './buttons/Buttons';
import Timeline from './timeline/Timeline';
import Text from './text/Text';
import Lists from './lists/Lists';
import Forms from './forms/Forms';
import Waves from './waves/Waves';
import Cards from './cards/Cards';
import AllComponents from './AllComponents';

export const compTypes = [
  { id: 1, name: 'All Components', comp: <AllComponents /> },
  { id: 2, name: 'Cards', comp: <Cards /> },
  { id: 3, name: 'Buttons', comp: <Buttons /> },
  { id: 4, name: 'Data Display', comp: <DataDisplay /> },
  { id: 5, name: 'Forms', comp: <Forms /> },
  { id: 6, name: 'Lists', comp: <Lists /> },
  { id: 7, name: 'Progress', comp: <Progress /> },
  { id: 8, name: 'Text', comp: <Text /> },
  { id: 9, name: 'Timeline', comp: <Timeline /> },
  { id: 10, name: 'Waves', comp: <Waves /> },
];
