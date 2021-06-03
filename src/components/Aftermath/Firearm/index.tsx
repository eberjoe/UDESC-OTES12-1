import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Firearm = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
    >
      <Line
        x={x}
        y={y}
        points={[0, 0, 13, 0, 13, 3, 4, 3, 3, 9, -2, 9, 0, 0]}
        closed
        fill="black"
        rotation={-15}
      />
      <Line
        x={x + 31}
        y={y}
        points={[0, 0, 13, 0, 13, 3, 4, 3, 3, 9, -2, 9, 0, 0]}
        closed
        fill="black"
        scaleX={-1}
        rotation={15}
      />
      <Text
        x={x - 40}
        y={y - 18}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
