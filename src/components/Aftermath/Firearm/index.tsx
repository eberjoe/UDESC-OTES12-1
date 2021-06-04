import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Firearm = ({
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
          x + e.target.x() > stageLimits.x - 20 ||
          y + e.target.y() > stageLimits.y - 16 ||
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
        if (pos.x > 600 && pos.x < 740 && pos.y > 151 && pos.y < 263) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.FIREARM] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Line
        x={x}
        y={y}
        points={[0, 0, 13, 0, 13, 3, 4, 3, 3, 9, -2, 9, 0, 0]}
        closed
        fill="black"
        rotation={-15}
      />
      <Line
        x={x + 31}
        y={y}
        points={[0, 0, 13, 0, 13, 3, 4, 3, 3, 9, -2, 9, 0, 0]}
        closed
        fill="black"
        scaleX={-1}
        rotation={15}
      />
      <Text
        x={x - 40}
        y={y - 18}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
