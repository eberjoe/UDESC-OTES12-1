import { useState } from 'react';
import { Group, Rect, Star, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Map = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
    >
      <Rect
        x={x}
        y={y}
        width={25}
        height={40}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Rect
        x={x}
        y={y + 4}
        width={25}
        height={32}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Star
        x={x + 6}
        y={y + 11}
        innerRadius={2}
        outerRadius={5}
        numPoints={5}
        rotation={90}
        fill="black"
      />
      <Star
        x={x + 15}
        y={y + 28}
        innerRadius={1}
        outerRadius={4}
        numPoints={5}
        rotation={10}
        fill="black"
      />
      <Star
        x={x + 16}
        y={y + 15}
        innerRadius={1}
        outerRadius={3}
        numPoints={5}
        rotation={45}
        fill="black"
      />
      <Text
        x={x - 75}
        y={y - 15}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
