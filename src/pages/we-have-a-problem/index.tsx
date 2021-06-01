import { useContext, useState } from 'react';
import { CrewContext } from '../../providers/crew';
import { Steps, Button } from 'antd';
import { UserOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';
import { Layer, Stage } from 'react-konva';

import { Oxygen } from '../../components/Oxygen';
import { Water } from '../../components/Water';
import { Map } from '../../components/Map';
import { Food } from '../../components/Food';
import { Txrx } from '../../components/Txrx';
import { Rope } from '../../components/Rope';
import { EmergencyKit } from '../../components/EmergencyKit';
import { Parachute } from '../../components/Parachute';

const { Step } = Steps;

const WeHaveAProblem = () => {
  const { crew } = useContext(CrewContext);
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const stageLimits = { x: 800, y: 300 };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 100,
        height: '90vh',
        width: '100%'
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
      <Stage width={stageLimits.x} height={stageLimits.y}>
        <Layer>
          <Oxygen
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Water
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Map
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Food
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Txrx
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Rope
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <EmergencyKit
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
          <Parachute
            x={Math.random() * (stageLimits.x - 150) + 25}
            y={Math.random() * (stageLimits.y - 100) + 10}
          />
        </Layer>
      </Stage>
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
          <Button onClick={next} type="primary">
            Próximo Tripulante <RightOutlined />
          </Button>
        ) : (
          <Button type="primary">
            Finalizar <CheckOutlined />
          </Button>
        )}
      </div>
    </div>
  );
};

export default WeHaveAProblem;
