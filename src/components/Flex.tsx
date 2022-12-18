import React from 'react';
import styled from '@emotion/styled';

type Direction = 'row' | 'column';
type Divided = 'none' | 'two' | 'three';

interface Props {
  children?: React.ReactNode;
  direction?: Direction;
  divided?: Divided;
  height?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'center' | 'end';
  gap?: string;
}

const Flex = ({ children, ...props }: Props) => {
  return (
    <Container
      direction={props.direction}
      divided={props.divided}
      height={props.height}
      align={props.align}
      justify={props.justify}
      gap={props.gap}
    >
      {children}
    </Container>
  );
};

export default Flex;

const Container = styled.div<Props>`
  width: 100%;
  height: ${(props) => props.height || 'auto'};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};

  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  gap: ${(props) => props.gap || '0px'};

  font-size: 0.9rem;

  ${(props) =>
    props.divided === 'two' &&
    `
    color: #555555;
    `}
`;
