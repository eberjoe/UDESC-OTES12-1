import { useState } from 'react';
import { Group, Line, Rect, Circle, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Txrx = ({ x, y, crashItem }: DrawingProps) => {
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
      <Rect
        x={x}
        y={y}
        width={36}
        height={21}
        stroke="black"
        fill="gray"
        strokeWidth={1}
      />
      <Rect
        x={x + 3}
        y={y + 3}
        width={30}
        height={15}
        stroke="black"
        strokeWidth={1}
      />
      <Circle x={x + 7} y={y + 11} radius={2} fill="black" />
      <Circle x={x + 13} y={y + 11} radius={2} fill="black" />
      <Circle x={x + 19} y={y + 11} radius={2} fill="black" />
      <Line x={x + 34} y={y} points={[0, 0, 5, -10, 2, 2]} stroke="black" />
      <Text
        x={x - 67}
        y={y - 27}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 67}
        y={y - 27}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
