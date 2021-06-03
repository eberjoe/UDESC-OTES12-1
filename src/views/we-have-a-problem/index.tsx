import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CrewContext } from '../../providers/crew-context';
import { TrunkContext } from '../../providers/trunk-context';
import { Steps, Button } from 'antd';
import { UserOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';

import { Aftermath } from '../../components/Aftermath';
import { SurvivalItems } from '../../constants';

const { Step } = Steps;

export const WeHaveAProblem = () => {
  const { crew, setCrew } = useContext(CrewContext);
  const { trunk, setTrunk } = useContext(TrunkContext);
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

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
        {`${crew[step].name}, arraste os itens por ordem de prioridade para a área de sobrevivência`}
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
        <Aftermath />
        <div
          style={{
            display: 'flex',
            padding: 20,
            justifyContent: 'space-between',
            height: 100,
            width: '100%'
          }}
        >
          <h2>{`${crew[step].name} recuperou ${trunk.length} de ${SurvivalItems.length} itens`}</h2>
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
