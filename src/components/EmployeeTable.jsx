import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const Thead = styled.thead`
  background-color: #f5f5f5;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;


export default function EmployeeTable({ data }) {
    return (
      <Table>
      <Thead>
        <tr>
          <Th>Empleado</Th>
          <Th>Gastos Totales</Th>
        </tr>
      </Thead>
      <Tbody>
        {data.map((emp) => (
          <tr key={emp.id}>
            <Td>{emp.name}</Td>
            <Td>{emp.total}</Td>
          </tr>
        ))}
      </Tbody>
    </Table>
    );
  }
  