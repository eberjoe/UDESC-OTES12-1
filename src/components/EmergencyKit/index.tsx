import { Arc, Group, Rect } from 'react-konva';
import { MissionItem } from '../../models';

export const EmergencyKit = (props: { x: number; y: number }) => (
  <Group id={MissionItem.EMERGENCY_KIT.toString()} draggable>
    <Rect
      x={props.x}
      y={props.y}
      width={30}
      height={20}
      stroke="black"
      strokeWidth={1}
      fill="white"
    />
    <Rect x={props.x + 10} y={props.y + 8} width={10} height={4} fill="red" />
    <Rect x={props.x + 13} y={props.y + 5} width={4} height={10} fill="red" />
    <Arc
      x={props.x + 15}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={7}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
  </Group>
);
