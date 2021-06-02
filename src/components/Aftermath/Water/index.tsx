import { Group, Ellipse } from 'react-konva';
import { SurvivalItem } from '../../../models';

export const Water = (props: { x: number; y: number }) => (
  <Group id={SurvivalItem.WATER.toString()} draggable>
    <Ellipse x={props.x} y={props.y} radiusX={7} radiusY={18} fill="blue" />
  </Group>
);
