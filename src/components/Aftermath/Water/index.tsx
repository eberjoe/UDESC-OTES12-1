import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Water = ({ x, y, crashItem }: DrawingProps) => {
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
      <Rect x={x} y={y} width={14} height={26} cornerRadius={5} fill="blue" />
      <Text
        x={x - 25}
        y={y - 15}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 25}
        y={y - 15}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
