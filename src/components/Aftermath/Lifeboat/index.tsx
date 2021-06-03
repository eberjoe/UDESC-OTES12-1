import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { DrawingProps } from '../../../types';

export const Lifeboat = ({ x, y, crashItem }: DrawingProps) => {
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
        width={45}
        height={25}
        cornerRadius={[15, 7, 7, 15]}
        stroke="red"
        strokeWidth={7}
        fill="yellow"
        rotation={12}
      />
      <Text
        x={x - 20}
        y={y - 15}
        text={crashItem.description}
        visible={tootip}
      />
    </Group>
  );
};
