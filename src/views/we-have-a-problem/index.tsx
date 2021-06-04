import { useContext, useState } from 'react';
import { CrewContext } from '../../providers/crew-context';
import { Steps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Aftermath } from '../../components/Aftermath';
import { PuzzleFooter } from '../../components/PuzzleFooter';

const { Step } = Steps;

export const WeHaveAProblem = () => {
  const { crew } = useContext(CrewContext);
  const [step, setStep] = useState(0);
  global['trunk'] = [];

  const next = () => {
    setStep(step + 1);
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
        <PuzzleFooter
          next={next}
          memberName={crew[step].name}
          step={step}
          crewCount={crew.length}
        />
      </div>
    </div>
  );
};
