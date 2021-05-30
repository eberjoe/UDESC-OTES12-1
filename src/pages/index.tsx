import { Form, Input, Button } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { WorkAreaContainer } from '../components/WorkAreaContainer';

const { Item } = Form;

export default function Home() {
  const [form] = Form.useForm();
  return (
    <WorkAreaContainer>
      <Form layout="vertical" form={form}>
        <Item name="crew" label="Tripulante">
          <Input
            prefix={<UserOutlined />}
            suffix={
              <Button style={{ margin: -12 }}>
                <PlusOutlined />
              </Button>
            }
          />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Lançar Foguete
          </Button>
        </Item>
      </Form>
    </WorkAreaContainer>
  );
}
