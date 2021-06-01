import { Group, Line, Rect, Circle } from 'react-konva';
import { MissionItem } from '../../models';

export const Txrx = (props: { x: number; y: number }) => (
  <Group id={MissionItem.TXRX.toString()} draggable>
    <Rect
      x={props.x}
      y={props.y}
      width={46}
      height={31}
      stroke="black"
      fill="gray"
      strokeWidth={1}
    />
    <Rect
      x={props.x + 3}
      y={props.y + 3}
      width={40}
      height={25}
      stroke="black"
      strokeWidth={1}
    />
    <Circle x={props.x + 7} y={props.y + 11} radius={2} fill="black" />
    <Circle x={props.x + 13} y={props.y + 11} radius={2} fill="black" />
    <Circle x={props.x + 19} y={props.y + 11} radius={2} fill="black" />
    <Line
      x={props.x + 44}
      y={props.y}
      points={[0, 0, 5, -10, 2, 2]}
      stroke="black"
    />
  </Group>
);
