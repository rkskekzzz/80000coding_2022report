import React from 'react';
import styled from '@emotion/styled';

interface SectionProps {
  index: number;
  children?: React.ReactNode;
}
const Section = ({ index, children }: SectionProps) => {
  return <Container>{children}</Container>;
};

export default Section;

const Container = styled.div<{ bgColor?: string; fgColor?: string }>`
  width: 100%;
  height: auto;

  padding: 10px;
`;
