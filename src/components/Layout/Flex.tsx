import React from 'react';
import styled from '@emotion/styled';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type Divided = 'none' | 'two' | 'three';

interface Props {
  className?: string;
  children?: React.ReactNode;
  direction?: Direction;
  divided?: Divided;
  width?: string;
  height?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'center' | 'end';
  gap?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
}

const Flex = ({ children, ...props }: Props) => {
  return (
    <Container
      className={props.className}
      direction={props.direction}
      divided={props.divided}
      width={props.width}
      height={props.height}
      align={props.align}
      justify={props.justify}
      gap={props.gap}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      flexBasis={props.flexBasis}
    >
      {children}
    </Container>
  );
};

export default Flex;

const Container = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? 'auto'};
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};

  justify-content: ${(props) => props.justify ?? 'center'};
  align-items: ${(props) => props.align ?? 'center'};
  gap: ${(props) => props.gap ?? '0px'};

  flex-grow: ${(props) => props.flexGrow ?? 1};
  flex-shrink: ${(props) => props.flexShrink ?? 1};
  flex-basis: ${(props) => props.flexBasis ?? 'auto'};

  font-size: 0.9rem;

  ${(props) =>
    props.divided === 'two' &&
    `
    color: #555555;
    `}
`;
