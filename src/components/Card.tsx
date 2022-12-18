import React from 'react';
import styled from '@emotion/styled';
import Flex from './Flex';

type Color = {
  bg: string;
  fg: string;
};

interface Props {
  children?: React.ReactNode;
  title?: string;
  color?: Color;
  definedAction?: () => void;
}

const Card = ({ children, ...props }: Props) => {
  return (
    <Container bgColor={props.color?.bg} fgColor={props.color?.fg}>
      {props.title && <h4 className='contentbox-title'>{props.title}</h4>}
      {children}
    </Container>
  );
};

export default Card;

const Container = styled.div<{ bgColor?: string; fgColor?: string }>`
  width: 100%;
  height: auto;

  color: ${(props) => props.fgColor || 'black'};
  background: ${(props) => props.bgColor || 'white'};

  border-radius: 7px !important;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;

  padding: 10px;
  /* margin: 1px 0 10px; */

  display: flex;
  flex-direction: column;
  gap: 5px;

  .contentbox-title {
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(0 0 0 / 10%);
  }
`;
