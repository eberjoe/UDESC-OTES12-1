import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Rope = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);
  const [pos, setPos] = useState({ x, y });
  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
      onDragMove={(e) =>
        setPos({
          x: x + e.currentTarget.getPosition().x,
          y: y + e.currentTarget.getPosition().y
        })
      }
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
        visible={false}
      />
      <Text
        x={x - 55}
        y={y - 15}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
