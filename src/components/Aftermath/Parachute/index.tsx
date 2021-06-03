import { useState } from 'react';
import { Arc, Group, Line, Text } from 'react-konva';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Parachute = ({ x, y, crashItem }: DrawingProps) => {
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
          y + e.currentTarget.getPosition().y < 20
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
      <Arc
        x={x}
        y={y}
        angle={180}
        innerRadius={0}
        outerRadius={30}
        rotation={180}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Arc
        x={x}
        y={y - 30}
        angle={150}
        innerRadius={3}
        outerRadius={10}
        rotation={15}
        fill="red"
      />
      <Line
        x={x}
        y={y}
        points={[
          -30, 0, 0, 50, -25, 0, -20, 0, 0, 50, -10, 0, 10, 0, 0, 50, 20, 0, 0,
          50, 25, 0, 30, 0, 0, 50
        ]}
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={x - 58}
        y={y - 45}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 58}
        y={y - 45}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
