import { useState } from 'react';
import { Group, Line, Rect, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Heater = ({
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
        if (pos.x > 600 && pos.x < 747 && pos.y > 151 && pos.y < 235) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.HEATER] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Rect
        x={x}
        y={y}
        width={23}
        height={34}
        stroke="black"
        strokeWidth={1}
        fill="cyan"
      />
      <Line
        x={x + 2}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Line
        x={x + 9}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Line
        x={x + 16}
        y={y + 2}
        points={[0, 0, 5, 5, 0, 10, 5, 15, 0, 20, 5, 25, 0, 30]}
        stroke="grey"
        strokeWidth={3}
      />
      <Text
        x={x - 35}
        y={y - 15}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
