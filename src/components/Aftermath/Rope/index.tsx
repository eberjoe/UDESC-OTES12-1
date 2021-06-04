import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Rope = ({
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
        if (pos.x > 604 && pos.x < 749 && pos.y > 147 && pos.y < 239) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.ROPE] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Line
        x={x}
        y={y}
        points={[12, 5, 17, 20, 1, 18, 2, 30]}
        tension={0.9}
        stroke="gold"
        strokeWidth={5}
      />
      <Text
        x={x - 55}
        y={y - 15}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
