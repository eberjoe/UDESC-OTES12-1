import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../constants';

export const Matches = ({ x, y, crashItem }: DrawingProps) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Rect
        x={x}
        y={y}
        width={8}
        height={14}
        stroke="black"
        strokeWidth={1}
        fill="brown"
      />
      <Rect
        x={x}
        y={y + 4}
        width={8}
        height={10}
        stroke="black"
        strokeWidth={1}
        fill="red"
      />
      <Text
        x={x - 45}
        y={y - 15}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
