import { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Oxygen = ({
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
        if (pos.x > 600 && pos.x < 748 && pos.y > 151 && pos.y < 220) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.OXYGEN] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Rect x={x} y={y} width={10} height={49} cornerRadius={3} fill="green" />
      <Rect
        x={x + 12}
        y={y}
        width={10}
        height={49}
        cornerRadius={3}
        fill="green"
      />
      <Text
        x={x - 68}
        y={y - 15}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
