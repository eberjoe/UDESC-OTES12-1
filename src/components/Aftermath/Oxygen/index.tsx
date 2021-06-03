import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Oxygen = ({ x, y, crashItem }: DrawingProps) => {
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
      <Rect x={x} y={y} width={10} height={49} cornerRadius={3} fill="green" />
      <Rect
        x={x + 12}
        y={y}
        width={10}
        height={49}
        cornerRadius={3}
        fill="green"
      />
      <Text
        x={x - 68}
        y={y - 15}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 68}
        y={y - 15}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
