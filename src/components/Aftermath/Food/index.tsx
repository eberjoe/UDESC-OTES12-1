import { useState } from 'react';
import { Group, Line, Ellipse, Text } from 'react-konva';
import { MessageService } from '../../../providers/message-service';
import { DrawingProps } from '../../../types';
import { stageLimits, SurvivalItemIndex } from '../../../constants';

export const Food = ({
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
        if (pos.x > 600 && pos.x < 748 && pos.y > 161 && pos.y < 255) {
          MessageService.sendMessage({ item: crashItem, push: true });
        } else {
          MessageService.sendMessage({ item: crashItem, push: false });
        }
        dragOffset[SurvivalItemIndex.FOOD] = {
          x: e.target.x(),
          y: e.target.y()
        };
        setDragOffset(dragOffset);
      }}
    >
      <Line
        x={x}
        y={y}
        points={[0, 0, 15, 0, 15, 15]}
        tension={0.6}
        closed
        rotation={-45}
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        fillLinearGradientEndPoint={{ x: 50, y: 50 }}
        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
      />
      <Line
        x={x + 21}
        y={y + 5}
        points={[0, 0, 15, 0, 15, 15]}
        tension={0.6}
        closed
        rotation={-225}
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        fillLinearGradientEndPoint={{ x: 50, y: 50 }}
        fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
      />
      <Ellipse x={x + 10} y={y + 2} radiusX={12} radiusY={2} fill="green" />
      <Ellipse x={x + 10} y={y + 3} radiusX={12} radiusY={2} fill="brown" />
      <Text
        x={x - 47}
        y={y - 25}
        text={crashItem.description}
        visible={tooltip}
      />
    </Group>
  );
};
