export const FreshPage = () => {
  return (
    <div>
      <h1>Fresh page</h1>
      <Table />
    </div>
  );
};

import { memo, useMemo } from 'react';
import { Table } from './Table';

export interface RowData {
  id: number;
  name: string;
  age: number;
}

type RowProps = {
  selected: boolean;
  handleRowClick: (id: number) => void;
} & RowData;

const longTask = (arg: boolean) => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return 'done';
};

export const Row = memo((props: RowProps) => {
  const a = useMemo(() => longTask(props.selected), [props.selected]);
  console.log(`render ${props.id}`);

  return (
    <tr
      onClick={() => props.handleRowClick(props.id)}
      style={{ backgroundColor: props.selected ? 'lightblue' : 'white' }}
    >
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
});
