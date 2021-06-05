import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CrewContext } from '../../providers/crew-context';
import { Button, Table } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { SurvivalItems } from '../../constants';

export const Results = () => {
  const { crew } = useContext(CrewContext);

  const history = useHistory();
  const results = SurvivalItems.map((item, i) => ({
    crewRegard: crew
      .map((member) => member.listOfPriorities[i].actualImportance)
      .reduce<number>((x: number, y: number) => x + y, 0),
    crewDeviation:
      crew
        .map((member) => member.listOfPriorities[i].actualImportance)
        .reduce<number>((x: number, y: number) => x + y, 0) -
      item.actualImportance,
    actualImportance: item.actualImportance,
    leaderDeviation:
      item.actualImportance - crew[0].listOfPriorities[i].actualImportance
  }));

  SurvivalItems.forEach((_, i) => {
    crew.forEach((member) => {
      results[i][member.name] = member.listOfPriorities[i].actualImportance;
    });
  });

  const columns = [
    { title: 'Importância pela tripulação', dataIndex: 'crewRegard' },
    { title: 'Diferença tripulação-real', dataIndex: 'crewDeviation' },
    { title: 'Importância real', dataIndex: 'actualImportance' },
    {
      title: `Diferença real-${crew[0].name}`,
      dataIndex: 'leaderDeviation'
    },
    ...crew.map((member) => ({
      title: member.name,
      dataIndex: member.name
    }))
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 50,
        height: '90vh',
        width: '100%',
        justifyContent: 'space-between'
      }}
    >
      <h1>Resultados</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          overflow: 'auto'
        }}
      >
        <Table
          bordered
          sticky
          pagination={false}
          dataSource={results}
          summary={(data) => {
            const cells: JSX.Element[] = [];
            const reducedRow = {};

            for (const prop in data[0]) {
              reducedRow[prop] = 0;
            }

            data.forEach((row) => {
              for (const prop in row) {
                reducedRow[prop] = reducedRow[prop] + row[prop];
              }
            });
            for (const prop in reducedRow) {
              let i = 0;
              cells.push(
                <Table.Summary.Cell index={i}>
                  {reducedRow[prop]}
                </Table.Summary.Cell>
              );
              i++;
            }

            return (
              <Table.Summary.Row style={{ background: 'silver' }}>
                {cells}
              </Table.Summary.Row>
            );
          }}
          columns={columns}
        />
      </div>
      <div
        style={{
          display: 'flex',
          padding: 20,
          justifyContent: 'flex-start',
          height: 100,
          width: '100%'
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            history.push('/home');
            location.reload();
          }}
        >
          {<LeftOutlined />} Nova Missão
        </Button>
      </div>
    </div>
  );
};
