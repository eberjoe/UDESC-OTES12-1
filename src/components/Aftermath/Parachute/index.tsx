import { useState } from 'react';
import { Arc, Group, Line, Text } from 'react-konva';
import { DrawingProps } from '../../../constants';

export const Parachute = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Arc
        x={x}
        y={y}
        angle={180}
        innerRadius={0}
        outerRadius={30}
        rotation={180}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Line
        x={x}
        y={y}
        points={[
          -30, 0, 0, 50, -25, 0, -20, 0, 0, 50, -10, 0, 10, 0, 0, 50, 20, 0, 0,
          50, 25, 0, 30, 0, 0, 50
        ]}
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={x - 58}
        y={y - 45}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
