import { useState } from 'react';
import { Group, Star, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Beacon = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Star
        x={x}
        y={y}
        numPoints={13}
        innerRadius={3}
        outerRadius={10}
        stroke="yellow"
        strokeWidth={1}
        fill="white"
        rotation={12}
      />
      <Text
        x={x - 80}
        y={y - 25}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
