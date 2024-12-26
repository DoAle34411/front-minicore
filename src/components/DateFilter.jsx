import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

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

export default function DateFilter({ setStartDate, setEndDate }) {
    return (
      <FilterContainer>
      <Label>
        Fecha de Inicio:
        <Input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </Label>
      <Label>
        Fecha de Fin:
        <Input type="date" onChange={(e) => setEndDate(e.target.value)} />
      </Label>
    </FilterContainer>
    );
  }
  