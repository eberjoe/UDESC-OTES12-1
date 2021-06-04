import { useState } from 'react';
import { Arc, Group, Rect, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const EmergencyKit = ({
  x,
  y,
  crashItem,
  setDragOffset,
  dragOffset
}: DrawingProps) => {
  const [tooltip, setTooltip] = useState(false);
  const [pos, setPos] = useState({ x, y });

  return (
    <Group
      draggable
      onMouseOver={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onMouseDown={(e) => e.currentTarget.moveToTop()}
      onDragMove={(e) => {
        if (
          x + e.target.x() > stageLimits.x - 14 ||
          y + e.target.y() > stageLimits.y - 26 ||
          x + e.target.x() < 0 ||
          y + e.target.y() < 0
        ) {
          e.currentTarget.setPosition({
            x: pos.x - x,
            y: pos.y - y
          });
        }
        setPos({
          x: x + e.target.x(),
          y: y + e.target.y()
        });
      }}
      onDragEnd={(e) => {
        if (pos.x > 600 && pos.x < 740 && pos.y > 158 && pos.y < 250) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.EMERGENCY_KIT] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Rect
        x={x}
        y={y}
        width={30}
        height={20}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Rect x={x + 10} y={y + 8} width={10} height={4} fill="red" />
      <Rect x={x + 13} y={y + 5} width={4} height={10} fill="red" />
      <Arc
        x={x + 15}
        y={y}
        angle={180}
        innerRadius={5}
        outerRadius={7}
        rotation={180}
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={x - 47}
        y={y - 20}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
