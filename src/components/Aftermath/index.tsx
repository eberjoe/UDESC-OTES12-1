import { Stage, Layer } from 'react-konva';

import { CrashItems, SurvivalItem } from '../../constants';

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
  setTrunk: (items: SurvivalItem[]) => void;
};

export const Aftermath = ({ stageLimits, setTrunk }: AfterMathProps) => {
  return (
    <Stage
      width={stageLimits.x}
      height={stageLimits.y}
      style={{ background: '#bbb', border: '1px solid black' }}
    >
      <Layer>
        <Oxygen
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.OXYGEN]}
        />
        <Water
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.WATER]}
        />
        <Map
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.MAP]}
        />
        <Food
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.FOOD]}
        />
        <Txrx
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.TXRX]}
        />
        <Rope
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.ROPE]}
        />
        <EmergencyKit
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.EMERGENCY_KIT]}
        />
        <Parachute
          x={Math.random() * (stageLimits.x - 150) + 55}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.PARACHUTE]}
        />
        <Lifeboat
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.LIFEBOAT]}
        />
        <Beacon
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.BEACON]}
        />
        <Firearm
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.FIREARM]}
        />
        <Milk
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.MILK]}
        />
        <Heater
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.HEATER]}
        />
        <Compass
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.COMPASS]}
        />
        <Matches
          x={Math.random() * (stageLimits.x - 150) + 25}
          y={Math.random() * (stageLimits.y - 100) + 10}
          crashItem={CrashItems[SurvivalItem.MATCHES]}
        />
      </Layer>
    </Stage>
  );
};
