import { useState } from 'react';
import { Group, Line, Rect, Circle, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Txrx = ({
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
        if (pos.x > 600 && pos.x < 733 && pos.y > 167 && pos.y < 248) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.TXRX] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Rect
        x={x}
        y={y}
        width={36}
        height={21}
        stroke="black"
        fill="gray"
        strokeWidth={1}
      />
      <Rect
        x={x + 3}
        y={y + 3}
        width={30}
        height={15}
        stroke="black"
        strokeWidth={1}
      />
      <Circle x={x + 7} y={y + 11} radius={2} fill="black" />
      <Circle x={x + 13} y={y + 11} radius={2} fill="black" />
      <Circle x={x + 19} y={y + 11} radius={2} fill="black" />
      <Line x={x + 34} y={y} points={[0, 0, 5, -10, 2, 2]} stroke="black" />
      <Text
        x={x - 67}
        y={y - 27}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
