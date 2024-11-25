import * as React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';



const chartSetting = {
  yAxis: [
    {
      label: 'Skill Level',
    },
  ],
  series: [{ dataKey: 'value', color: '#004AAD',}],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};


export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'name', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}


const dataset = [
    {
      name: 'Skill 1',
      level: 'Basic',
      value: 3,
    },
    {
      name: 'Skill 2',
      level: 'Advanced',
      value: 3,
    },
    {
      name: 'Skill 3',
      level: 'Advanced',
      value: 2,
    },
    {
      name: 'Skill 4',
      level: 'Advanced',
      value: 1,
    },


];

