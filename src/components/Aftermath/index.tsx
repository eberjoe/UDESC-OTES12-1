import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

import { SurvivalItems, SurvivalItemIndex, stageLimits } from '../../constants';

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

const INITIAL_OFFSET = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
];

export const Aftermath = () => {
  const [dragOffset, setDragOffset] = useState(INITIAL_OFFSET);

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
          x={
            Math.ceil(Math.random() * (stageLimits.x - 250) + 25) -
            dragOffset[SurvivalItemIndex.OXYGEN].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.OXYGEN].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.OXYGEN]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Water
          x={
            Math.ceil(Math.random() * (stageLimits.x - 241) + 25) -
            dragOffset[SurvivalItemIndex.WATER].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.WATER].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.WATER]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Map
          x={
            Math.ceil(Math.random() * (stageLimits.x - 253) + 25) -
            dragOffset[SurvivalItemIndex.MAP].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.MAP].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.MAP]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Food
          x={
            Math.ceil(Math.random() * (stageLimits.x - 251) + 25) -
            dragOffset[SurvivalItemIndex.FOOD].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.FOOD].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.FOOD]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Txrx
          x={
            Math.ceil(Math.random() * (stageLimits.x - 265) + 25) -
            dragOffset[SurvivalItemIndex.TXRX].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.TXRX].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.TXRX]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Rope
          x={
            Math.ceil(Math.random() * (stageLimits.x - 250) + 25) -
            dragOffset[SurvivalItemIndex.ROPE].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.ROPE].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.ROPE]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <EmergencyKit
          x={
            Math.ceil(Math.random() * (stageLimits.x - 258) + 25) -
            dragOffset[SurvivalItemIndex.EMERGENCY_KIT].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.EMERGENCY_KIT].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.EMERGENCY_KIT]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Parachute
          x={
            Math.ceil(Math.random() * (stageLimits.x - 288) + 55) -
            dragOffset[SurvivalItemIndex.PARACHUTE].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.PARACHUTE].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.PARACHUTE]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Lifeboat
          x={
            Math.ceil(Math.random() * (stageLimits.x - 273) + 25) -
            dragOffset[SurvivalItemIndex.LIFEBOAT].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.LIFEBOAT].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.LIFEBOAT]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Beacon
          x={
            Math.ceil(Math.random() * (stageLimits.x - 241) + 25) -
            dragOffset[SurvivalItemIndex.BEACON].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.BEACON].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.BEACON]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Firearm
          x={
            Math.ceil(Math.random() * (stageLimits.x - 259) + 25) -
            dragOffset[SurvivalItemIndex.FIREARM].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.FIREARM].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.FIREARM]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Milk
          x={
            Math.ceil(Math.random() * (stageLimits.x - 240) + 25) -
            dragOffset[SurvivalItemIndex.MILK].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.MILK].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.MILK]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Heater
          x={
            Math.ceil(Math.random() * (stageLimits.x - 250) + 25) -
            dragOffset[SurvivalItemIndex.HEATER].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.HEATER].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.HEATER]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Compass
          x={
            Math.ceil(Math.random() * (stageLimits.x - 237) + 25) -
            dragOffset[SurvivalItemIndex.COMPASS].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.COMPASS].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.COMPASS]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
        <Matches
          x={
            Math.ceil(Math.random() * (stageLimits.x - 235) + 25) -
            dragOffset[SurvivalItemIndex.MATCHES].x
          }
          y={
            Math.ceil(Math.random() * (stageLimits.y - 100) + 10) -
            dragOffset[SurvivalItemIndex.MATCHES].y
          }
          crashItem={SurvivalItems[SurvivalItemIndex.MATCHES]}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
        />
      </Layer>
    </Stage>
  );
};
