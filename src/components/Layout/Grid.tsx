import React from 'react';
import styled from '@emotion/styled';

interface GridProps {
  row?: number;
  column?: number;
  children?: React.ReactNode;
}

const Grid = ({ row, column, children }: GridProps) => {
  return (
    <Container row={row} column={column}>
      {children}
    </Container>
  );
};

export default Grid;

const Container = styled.div<{
  row?: number;
  column?: number;
}>`
  display: grid;
  grid-template-columns: ${(props) => (props.column ? `repeat(${props.column}, 1fr)` : 'repeat(3, 1fr)')};
  grid-template-rows: auto;
  gap: 10px;
  width: 100%;
  height: 100%;
`;
