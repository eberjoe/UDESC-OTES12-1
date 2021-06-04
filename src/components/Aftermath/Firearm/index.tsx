import { useState } from 'react';
import { Group, Line, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits } from '../../../constants';

export const Firearm = ({ x, y, crashItem }: DrawingProps) => {
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
          x + e.currentTarget.getPosition().x > stageLimits.x - 20 ||
          y + e.currentTarget.getPosition().y > stageLimits.y - 16 ||
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
        if (pos.x > 600 && pos.x < 740 && pos.y > 151 && pos.y < 263) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
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
