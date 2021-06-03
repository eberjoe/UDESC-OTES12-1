import { useState } from 'react';
import { Arc, Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const EmergencyKit = ({ x, y, crashItem }: DrawingProps) => {
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
        width={30}
        height={20}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Rect x={x + 10} y={y + 8} width={10} height={4} fill="red" />
      <Rect x={x + 13} y={y + 5} width={4} height={10} fill="red" />
      <Arc
        x={x + 15}
        y={y}
        angle={180}
        innerRadius={5}
        outerRadius={7}
        rotation={180}
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={x - 47}
        y={y - 20}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
