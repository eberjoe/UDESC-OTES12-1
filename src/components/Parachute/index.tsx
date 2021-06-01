import { Arc, Group } from 'react-konva';
import { MissionItem } from '../../models';

export const Parachute = (props: { x: number; y: number }) => (
  <Group id={MissionItem.PARACHUTE.toString()} draggable rotation={35}>
    <Arc
      x={props.x}
      y={props.y}
      angle={180}
      innerRadius={30}
      outerRadius={30}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
    <Arc
      x={props.x + 2}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={5}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
    <Arc
      x={props.x + 7}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={5}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
    <Arc
      x={props.x + 12}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={5}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
    <Arc
      x={props.x + 17}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={5}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
    <Arc
      x={props.x + 22}
      y={props.y}
      angle={180}
      innerRadius={5}
      outerRadius={5}
      rotation={180}
      stroke="black"
      strokeWidth={1}
    />
  </Group>
);
