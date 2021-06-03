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

import { CrewContext } from '../../providers/crew';
import { CrewMember } from '../../constants';

export function Home() {
  const { crew, setCrew } = useContext(CrewContext);
  const [name, setName] = useState('');

  const addCrewMember = () => {
    if (name && !crew.filter((member) => member.name === name).length) {
      setCrew([...crew, { name }]);
      message.success(`${name} embarcou`);
    } else {
      message.error(`${name} já está a bordo`);
    }
    setName('');
  };

  const unboard = (exitingMember: CrewMember) => {
    setCrew(crew.filter((member) => member !== exitingMember));
    message.success(`${exitingMember.name} desembarcou`);
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: 50,
        height: '90vh',
        width: '100%'
      }}
    >
      <Space size="large" direction="vertical">
        <Image src="/sn8_sunrise.jpg" width={800} height={400} />
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
            <RocketOutlined />
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
  );
}
