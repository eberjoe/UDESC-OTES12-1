import { useContext, useState } from 'react';
import { Space, Input, Button, message } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { WorkAreaContainer } from '../components/WorkAreaContainer';

import { CrewContext } from '../providers/crew';
import { CrewMember } from '../models';

export default function Home() {
  const { crew, setCrew } = useContext(CrewContext);
  const [name, setName] = useState('');

  const addCrewMember = () => {
    if (!crew.filter((member) => member.name === name).length) {
      setCrew([...crew, { name }]);
      message.success(`${name} embarcou`);
    } else {
      message.error(`${name} já está a bordo`);
    }
    setName('');
  };

  return (
    <WorkAreaContainer>
      <Space size="large" direction="vertical">
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
        <Button size="large" type="primary" htmlType="submit">
          Iniciar Missão
        </Button>
      </Space>
      <Space size="small" direction="vertical">
        {crew &&
          crew.map((member: CrewMember) => (
            <p style={{ marginLeft: 20, fontWeight: 600 }} key={member.name}>
              {member.name}
            </p>
          ))}
      </Space>
    </WorkAreaContainer>
  );
}
