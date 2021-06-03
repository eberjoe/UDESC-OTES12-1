import { useState } from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Heater = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);
  const [pos, setPos] = useState({ x, y });
  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
      onDragMove={(e) => {
        if (
          x + e.currentTarget.getPosition().x > stageLimits.x - 14 ||
          y + e.currentTarget.getPosition().y > stageLimits.y - 26 ||
          x + e.currentTarget.getPosition().x < 0 ||
          y + e.currentTarget.getPosition().y < 0
        ) {
          e.currentTarget.setPosition({
            x: pos.x - x,
            y: pos.y - y
          });
        }
        setPos({
          x: x + e.currentTarget.getPosition().x,
          y: y + e.currentTarget.getPosition().y
        });
      }}
    >
      <Rect
        x={x}
        y={y}
        width={23}
        height={34}
        stroke="black"
        strokeWidth={1}
        fill="cyan"
      />
      <Line
        x={x + 2}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Line
        x={x + 9}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Line
        x={x + 16}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Text
        x={x - 35}
        y={y - 15}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 35}
        y={y - 15}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
