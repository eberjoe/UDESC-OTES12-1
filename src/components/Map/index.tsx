import { Group, Rect, Star } from 'react-konva';
import { MissionItem } from '../../models';

export const Map = (props: { x: number; y: number }) => (
  <Group id={MissionItem.MAP.toString()} draggable>
    <Rect
      x={props.x}
      y={props.y}
      width={25}
      height={40}
      stroke="black"
      strokeWidth={1}
      fill="white"
    />
    <Rect
      x={props.x}
      y={props.y + 4}
      width={25}
      height={32}
      stroke="black"
      strokeWidth={1}
      fill="white"
    />
    <Star
      x={props.x + 6}
      y={props.y + 11}
      innerRadius={2}
      outerRadius={5}
      numPoints={5}
      rotation={90}
      fill="black"
    />
    <Star
      x={props.x + 15}
      y={props.y + 28}
      innerRadius={1}
      outerRadius={4}
      numPoints={5}
      rotation={10}
      fill="black"
    />
    <Star
      x={props.x + 16}
      y={props.y + 15}
      innerRadius={1}
      outerRadius={3}
      numPoints={5}
      rotation={45}
      fill="black"
    />
  </Group>
);
