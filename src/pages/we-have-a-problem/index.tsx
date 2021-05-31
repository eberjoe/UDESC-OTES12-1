import { useContext, useState } from 'react';
import { CrewContext } from '../../providers/crew';
import { Steps, Tag, Button } from 'antd';
import { UserOutlined, RightOutlined } from '@ant-design/icons';

import { WorkAreaContainer } from '../../components/WorkAreaContainer';

const { Step } = Steps;

const WeHaveAProblem = () => {
  const { crew, setCrew } = useContext(CrewContext);
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  return (
    <WorkAreaContainer flexDirection="column">
      <Steps current={step}>
        {crew.map((member) => (
          <Step
            key={member.name}
            title={member.name}
            icon={<UserOutlined />}
          ></Step>
        ))}
      </Steps>
      <div style={{ position: 'relative', height: 300, width: 800 }}>
        <Tag
          draggable
          color="blue"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          2 tanques de oxigênio de 50kg
        </Tag>
        <Tag
          draggable
          color="cyan"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          20 litros de água
        </Tag>
        <Tag
          draggable
          color="pink"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Mapa estelar da constelação lunar
        </Tag>
        <Tag
          draggable
          color="brown"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Alimento concentrado
        </Tag>
        <Tag
          draggable
          color="grey"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Transmissor-receptor
        </Tag>
        <Tag
          draggable
          color="purple"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          20m de corda de nylon
        </Tag>
        <Tag
          draggable
          color="red"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Kit de primeiros socorros
        </Tag>
        <Tag
          draggable
          color="green"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Paraquedas de seda
        </Tag>
        <Tag
          draggable
          color="orange"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Bote salva-vidas
        </Tag>
        <Tag
          draggable
          color="red"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Sinalizador
        </Tag>
        <Tag
          draggable
          color="grey"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          2 pistolas calibre 45
        </Tag>
        <Tag
          draggable
          color="gold"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Caixa de leite em pó
        </Tag>
        <Tag
          draggable
          color="gold"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Aquecedor portátil
        </Tag>
        <Tag
          draggable
          color="purple"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Bússola
        </Tag>
        <Tag
          draggable
          color="gold"
          style={{
            position: 'absolute',
            right: Math.ceil(Math.random() * 700),
            bottom: Math.ceil(Math.random() * 200)
          }}
        >
          Caixa de fósforos
        </Tag>
      </div>
      <Button onClick={next} type="primary">
        Próximo Tripulante <RightOutlined />
      </Button>
    </WorkAreaContainer>
  );
};

export default WeHaveAProblem;
