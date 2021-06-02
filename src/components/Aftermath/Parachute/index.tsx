import { useState } from 'react';
import { Arc, Group, Text } from 'react-konva';
import { SurvivalItem } from '../../../models';

export const Parachute = (props: { x: number; y: number }) => {
  const [tootip, setTooltip] = useState(false);

  return (
    <Group id={SurvivalItem.PARACHUTE.toString()} draggable>
      <Arc
        x={props.x}
        y={props.y}
        angle={180}
        innerRadius={0}
        outerRadius={30}
        rotation={180}
        stroke="black"
        strokeWidth={1}
        fill="white"
        onMouseOver={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      />
      <Text
        x={props.x - 55}
        y={props.y}
        text="Para-quedas de seda"
        visible={tootip}
      />
    </Group>
  );
};
