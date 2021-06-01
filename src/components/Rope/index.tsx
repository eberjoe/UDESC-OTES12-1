import { Group, Line } from 'react-konva';
import { MissionItem } from '../../models';

export const Rope = (props: { x: number; y: number }) => (
  <Group id={MissionItem.ROPE.toString()} draggable>
    <Line
      x={props.x}
      y={props.y}
      points={[0, 0, 5, 5, 12, 5, 17, 20, 1, 18, 2, 30]}
      tension={0.9}
      stroke="gold"
      strokeWidth={5}
    />
  </Group>
);
