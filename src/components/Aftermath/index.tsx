import { Stage, Layer } from 'react-konva';

import { SurvivalItem } from '../../models';

import { Oxygen } from './Oxygen';
import { Water } from './Water';
import { Map } from './Map';
import { Food } from './Food';
import { Txrx } from './Txrx';
import { Rope } from './Rope';
import { EmergencyKit } from './EmergencyKit';
import { Parachute } from './Parachute';

type AfterMathProps = {
  stageLimits: { x: number; y: number };
  setTrunk: (items: SurvivalItem[]) => void;
};

export const Aftermath = ({ stageLimits, setTrunk }: AfterMathProps) => {
  return (
    <Stage width={stageLimits.x} height={stageLimits.y}>
      <Layer>
        <Oxygen
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Water
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Map
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Food
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Txrx
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Rope
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <EmergencyKit
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
        <Parachute
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
        />
      </Layer>
    </Stage>
  );
};
