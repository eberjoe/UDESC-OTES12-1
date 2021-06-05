import { useContext, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import { Space, Input, Button, message, Tag } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  RocketOutlined,
  RightOutlined
} from '@ant-design/icons';

import { CrewContext } from '../../providers/crew-context';
import { CrewMember } from '../../types';

export const Home = () => {
  const { crew, setCrew } = useContext(CrewContext);

  const [name, setName] = useState('');

  const addCrewMember = () => {
    if (name && !crew.filter((member) => member.name === name).length) {
      setCrew([...crew, { name }]);
      message.success({
        content: `${name} embarcou`,
        style: {
          marginRight: '100vh'
        }
      });
    } else {
      message.error({
        content: `${name} já está a bordo`,
        style: {
          marginRight: '100vh'
        }
      });
    }
    setName('');
  };

  const unboard = (exitingMember: CrewMember) => {
    setCrew(crew.filter((member) => member !== exitingMember));
    message.warn({
      content: `${exitingMember.name} desembarcou`,
      style: {
        marginRight: '100vh'
      }
    });
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
      <h1>Embarque sua tripulação </h1>
      <div
        style={{
          display: 'flex',
          height: '90vh',
          width: '100%'
        }}
      >
        <Space size="large" direction="vertical">
          <Image src="/sn8_sunrise.jpg" width={700} height={350} />
          <Input
            size="large"
            placeholder="Nome do tripulante"
            onPressEnter={addCrewMember}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            prefix={<UserOutlined />}
            suffix={
              <Button onClick={addCrewMember}>
                <PlusOutlined />
              </Button>
            }
          />
          <Link to="/we-have-a-problem">
            <Button size="large" type="primary" disabled={!crew.length}>
              <RocketOutlined /> Iniciar Missão
            </Button>
          </Link>
        </Space>
        <Space size="small" direction="vertical">
          {crew &&
            crew.map((member: CrewMember) => (
              <Tag
                color="blue"
                style={{ marginLeft: 20, fontWeight: 600 }}
                key={member.name}
              >
                <Space>
                  <UserOutlined />
                  {member.name}
                  <Button onClick={() => unboard(member)}>
                    <RightOutlined />
                  </Button>
                </Space>
              </Tag>
            ))}
        </Space>
      </div>
    </div>
  );
};
