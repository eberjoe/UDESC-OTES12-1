import { useState } from 'react';
import { Group, Star, Text } from 'react-konva';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Beacon = ({ x, y, crashItem }: DrawingProps) => {
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
          x + e.currentTarget.getPosition().x > stageLimits.x - 5 ||
          y + e.currentTarget.getPosition().y > stageLimits.y - 5 ||
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
        visible={false}
      />
      <Text
        x={x - 80}
        y={y - 25}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
