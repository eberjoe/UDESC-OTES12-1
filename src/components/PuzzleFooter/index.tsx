import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RightOutlined, CheckOutlined } from '@ant-design/icons';

import { SurvivalItem } from '../../types';
import { SurvivalItems } from '../../constants';
import { CrewContext } from '../../providers/crew-context';
import { MessageService } from '../../providers/message-service';

type PuzzleFooterProps = {
  next: () => void;
  memberName: string;
  step: number;
  crewCount: number;
};

export const PuzzleFooter = ({
  next,
  memberName,
  step,
  crewCount
}: PuzzleFooterProps) => {
  const { crew, setCrew } = useContext(CrewContext);

  const [trunk, setTrunk] = useState<SurvivalItem[]>([]);

  useEffect(() => {
    const subscription = MessageService.getMessage().subscribe(
      (op: { item: SurvivalItem; push: boolean }) => {
        if (op) {
          if (op.push && !trunk.filter((item) => item === op.item).length) {
            setTrunk([...trunk, op.item]);
          } else if (!op.push) {
            setTrunk(trunk.filter((item) => item !== op.item));
          }
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [trunk]);

  const updateCrew = () => {
    const crewCopy = crew;
    crewCopy[step].listOfPriorities = trunk;
    setCrew(crewCopy);
    setTrunk([]);
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: 20,
        justifyContent: 'space-between',
        height: 100,
        width: '100%'
      }}
    >
      <h2>{`${memberName} recuperou ${trunk.length} dos ${SurvivalItems.length} itens`}</h2>
      {step < crewCount - 1 ? (
        <Button
          disabled={trunk.length < SurvivalItems.length}
          onClick={() => {
            next();
            updateCrew();
          }}
          type="primary"
        >
          Próximo Tripulante <RightOutlined />
        </Button>
      ) : (
        <Link to="/results">
          <Button
            disabled={trunk.length < SurvivalItems.length}
            onClick={updateCrew}
            type="primary"
          >
            Finalizar <CheckOutlined />
          </Button>
        </Link>
      )}
    </div>
  );
};
