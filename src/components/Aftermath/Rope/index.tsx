import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Rope = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Line
        x={x}
        y={y}
        points={[12, 5, 17, 20, 1, 18, 2, 30]}
        tension={0.9}
        stroke="gold"
        strokeWidth={5}
      />
      <Text
        x={x - 55}
        y={y - 15}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
