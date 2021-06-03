import { useState } from 'react';
import { Group, Line, Ellipse, Text } from 'react-konva';
import { DrawingProps } from '../../../constants';

export const Food = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
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
        visible={tootip}
      />
    </Group>
  );
};
