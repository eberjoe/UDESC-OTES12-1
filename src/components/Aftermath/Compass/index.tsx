import { useState } from 'react';
import { Group, Circle, Star, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Compass = ({ x, y, crashItem }: DrawingProps) => {
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
      <Circle x={x} y={y} radius={10} fill="gold" />
      <Star
        x={x}
        y={y}
        numPoints={8}
        innerRadius={2}
        outerRadius={7}
        fill="black"
      />
      <Text
        x={x - 20}
        y={y - 24}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 20}
        y={y - 24}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
