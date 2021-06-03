import { Stage, Layer, Rect } from 'react-konva';

import { SurvivalItems, SurvivalItemIndex } from '../../constants';

import { Oxygen } from './Oxygen';
import { Water } from './Water';
import { Map } from './Map';
import { Food } from './Food';
import { Txrx } from './Txrx';
import { Rope } from './Rope';
import { EmergencyKit } from './EmergencyKit';
import { Parachute } from './Parachute';
import { Lifeboat } from './Lifeboat';
import { Beacon } from './Beacon';
import { Firearm } from './Firearm';
import { Milk } from './Milk';
import { Heater } from './Heater';
import { Compass } from './Compass';
import { Matches } from './Matches';

type AfterMathProps = {
  stageLimits: { x: number; y: number };
};

export const Aftermath = ({ stageLimits }: AfterMathProps) => {
  return (
    <Stage
      width={stageLimits.x}
      height={stageLimits.y}
      style={{ background: '#bbb', border: '1px solid black' }}
    >
      <Layer>
        <Rect
          x={stageLimits.x - 200}
          y={stageLimits.y - 150}
          width={170}
          height={120}
          stroke="brown"
          strokeWidth={2}
          dash={[10, 5]}
        />

        <Oxygen
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.OXYGEN]}
        />
        <Water
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.WATER]}
        />
        <Map
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.MAP]}
        />
        <Food
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.FOOD]}
        />
        <Txrx
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.TXRX]}
        />
        <Rope
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.ROPE]}
        />
        <EmergencyKit
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.EMERGENCY_KIT]}
        />
        <Parachute
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 55)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.PARACHUTE]}
        />
        <Lifeboat
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.LIFEBOAT]}
        />
        <Beacon
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.BEACON]}
        />
        <Firearm
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.FIREARM]}
        />
        <Milk
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.MILK]}
        />
        <Heater
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.HEATER]}
        />
        <Compass
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.COMPASS]}
        />
        <Matches
          x={Math.ceil(Math.random() * (stageLimits.x - 150) + 25)}
          y={Math.ceil(Math.random() * (stageLimits.y - 100) + 10)}
          crashItem={SurvivalItems[SurvivalItemIndex.MATCHES]}
        />
      </Layer>
    </Stage>
  );
};
