import { Group, Line, Ellipse } from 'react-konva';
import { MissionItem } from '../../models';

export const Food = (props: { x: number; y: number }) => (
  <Group id={MissionItem.FOOD.toString()} draggable>
    <Line
      x={props.x}
      y={props.y}
      points={[0, 0, 15, 0, 15, 15]}
      tension={0.6}
      closed
      rotation={-45}
      fillLinearGradientStartPoint={{ x: -50, y: -50 }}
      fillLinearGradientEndPoint={{ x: 50, y: 50 }}
      fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
    />
    <Line
      x={props.x + 21}
      y={props.y + 5}
      points={[0, 0, 15, 0, 15, 15]}
      tension={0.6}
      closed
      rotation={-225}
      fillLinearGradientStartPoint={{ x: -50, y: -50 }}
      fillLinearGradientEndPoint={{ x: 50, y: 50 }}
      fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
    />
    <Ellipse
      x={props.x + 10}
      y={props.y + 2}
      radiusX={12}
      radiusY={2}
      fill="green"
    />
    <Ellipse
      x={props.x + 10}
      y={props.y + 3}
      radiusX={12}
      radiusY={2}
      fill="brown"
    />
  </Group>
);
