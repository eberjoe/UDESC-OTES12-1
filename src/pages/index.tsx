import { Table } from 'antd';

export default function Home() {
  const columns = [{ key: 1, title: 'Nome do tripulante', dataIndex: 'name' }];
  const content = [
    { key: 'adao', name: 'Adão' },
    { key: 'eva', name: 'Eva' },
    { key: 'caim', name: 'Caim' },
    { key: 'abel', name: 'Abel' }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={content} />
    </div>
  );
}
