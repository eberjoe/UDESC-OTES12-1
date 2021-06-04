import { useState } from 'react';
import { Group, Rect, Star, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Map = ({ x, y, crashItem }: DrawingProps) => {
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
          x + e.currentTarget.getPosition().x > stageLimits.x - 14 ||
          y + e.currentTarget.getPosition().y > stageLimits.y - 26 ||
          x + e.currentTarget.getPosition().x < 0 ||
          y + e.currentTarget.getPosition().y < 0
        ) {
          e.currentTarget.setPosition({
            x: pos.x - x,
            y: pos.y - y
          });
        }
        setPos({
          x: x + e.currentTarget.getPosition().x,
          y: y + e.currentTarget.getPosition().y
        });
      }}
      onDragEnd={() => {
        if (pos.x > 600 && pos.x < 745 && pos.y > 151 && pos.y < 229) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
      }}
    >
      <Rect
        x={x}
        y={y}
        width={25}
        height={40}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Rect
        x={x}
        y={y + 4}
        width={25}
        height={32}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
      <Star
        x={x + 6}
        y={y + 11}
        innerRadius={2}
        outerRadius={5}
        numPoints={5}
        rotation={90}
        fill="black"
      />
      <Star
        x={x + 15}
        y={y + 28}
        innerRadius={1}
        outerRadius={4}
        numPoints={5}
        rotation={10}
        fill="black"
      />
      <Star
        x={x + 16}
        y={y + 15}
        innerRadius={1}
        outerRadius={3}
        numPoints={5}
        rotation={45}
        fill="black"
      />
      <Text
        x={x - 75}
        y={y - 15}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
