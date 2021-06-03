import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CrewContext } from '../../providers/crew';
import { Steps, Button, Space } from 'antd';
import { UserOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';

import { Aftermath } from '../../components/Aftermath';
import { SurvivalItem } from '../../types';
import { SurvivalItems } from '../../constants';

const { Step } = Steps;

export const WeHaveAProblem = () => {
  const { crew, setCrew } = useContext(CrewContext);
  const [step, setStep] = useState(0);
  const [trunk, setTrunk] = useState<SurvivalItem[]>([]);

  const next = () => {
    setStep(step + 1);
  };

  const stageLimits = { x: 800, y: 300 };

  const updateCrewDecisions = () => {
    const crewCopy = crew;
    crewCopy[step].listOfPriorities = trunk;
    setCrew(crewCopy);
    setTrunk([]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 50,
        height: '90vh',
        width: '100%'
      }}
    >
      <h1>
        {`${crew[step].name}, arraste os itens por ordem de prioridade para o baú de sobrevivência`}
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Steps current={step}>
          {crew.map((member) => (
            <Step
              key={member.name}
              title={member.name}
              icon={<UserOutlined />}
            ></Step>
          ))}
        </Steps>
        <Aftermath stageLimits={stageLimits} setTrunk={setTrunk} />
        <div
          style={{
            display: 'flex',
            padding: 20,
            justifyContent: 'flex-end',
            height: 100,
            width: '100%'
          }}
        >
          {step < crew.length - 1 ? (
            <Button
              disabled={trunk.length < SurvivalItems.length}
              onClick={() => {
                next();
                updateCrewDecisions();
              }}
              type="primary"
            >
              Próximo Tripulante <RightOutlined />
            </Button>
          ) : (
            <Link to="/results">
              <Button
                disabled={trunk.length < SurvivalItems.length}
                onClick={updateCrewDecisions}
                type="primary"
              >
                Finalizar <CheckOutlined />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
