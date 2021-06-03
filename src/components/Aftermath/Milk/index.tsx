import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Milk = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
    >
      <Rect x={x} y={y} width={10} height={15} stroke="gold" fill="white" />
      <Text
        x={x - 50}
        y={y - 15}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
