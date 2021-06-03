import { useState } from 'react';
import { Group, Line, Ellipse, Text } from 'react-konva';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Food = ({ x, y, crashItem }: DrawingProps) => {
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
          y + e.currentTarget.getPosition().y > stageLimits.y - 16 ||
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
      <Line
        x={x}
        y={y}
        points={[0, 0, 15, 0, 15, 15]}
        tension={0.6}
        closed
        rotation={-45}
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        fillLinearGradientEndPoint={{ x: 50, y: 50 }}
        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
      />
      <Line
        x={x + 21}
        y={y + 5}
        points={[0, 0, 15, 0, 15, 15]}
        tension={0.6}
        closed
        rotation={-225}
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        fillLinearGradientEndPoint={{ x: 50, y: 50 }}
        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
      />
      <Ellipse x={x + 10} y={y + 2} radiusX={12} radiusY={2} fill="green" />
      <Ellipse x={x + 10} y={y + 3} radiusX={12} radiusY={2} fill="brown" />
      <Text
        x={x - 47}
        y={y - 25}
        text={crashItem.description}
        visible={false}
      />
      <Text
        x={x - 47}
        y={y - 25}
        text={`${pos.x}, ${pos.y}`}
        visible={tootip}
      />
    </Group>
  );
};
