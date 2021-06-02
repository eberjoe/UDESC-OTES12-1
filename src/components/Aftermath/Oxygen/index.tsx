import { Group, Ellipse } from 'react-konva';
import { SurvivalItem } from '../../../models';

export const Oxygen = (props: { x: number; y: number }) => (
  <Group id={SurvivalItem.OXYGEN.toString()} draggable>
    <Ellipse x={props.x} y={props.y} radiusX={5} radiusY={30} fill="green" />
    <Ellipse
      id={SurvivalItem.OXYGEN.toString()}
      x={props.x + 12}
      y={props.y}
      radiusX={5}
      radiusY={30}
      fill="green"
    />
  </Group>
);
