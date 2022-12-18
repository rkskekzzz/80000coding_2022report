import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import anime from 'animejs/lib/anime.es.js';
import { Flex } from '../Layout';

import { Weekday } from '../../data';

interface BarProps {
  height?: string;
  width?: string;
  direction?: 'column' | 'row-reverse';
}

const Bar = ({ height, width, direction }: BarProps) => {
  const ref = useRef(null);
  useEffect(() => {
    anime({
      targets: ref.current,
      width: `${width}`,
      height: `${height}`,
      duration: 2000,
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);

  return <BarStyles ref={ref} direction={direction} />;
};

interface BarGraphProps {
  items: { key: string; value: number }[];
  direction?: 'bottom-to-top' | 'left-to-right';
  maxBarHeight: number;
}

const BarGraphWidget = ({ items, direction, maxBarHeight }: BarGraphProps) => {
  const baseDirection = direction === 'bottom-to-top' ? 'column' : 'row-reverse';
  const baseDivided = direction === 'bottom-to-top' ? 'row' : 'column';
  const baseAlign = direction === 'bottom-to-top' ? 'end' : 'start';

  return (
    <Container>
      <Flex direction={baseDirection} gap='10px' justify='space-between'>
        <Flex direction={baseDivided} gap='10px' justify='space-between' align={baseAlign} height='200px' flexGrow={1}>
          {items.map((item, index) =>
            baseDirection === 'column' ? (
              <Bar key={index} direction={baseDirection} height={(200 * item.value) / maxBarHeight + 'px'} />
            ) : (
              <Bar key={index} direction={baseDirection} width={(200 * item.value) / maxBarHeight + 'px'} />
            )
          )}
        </Flex>
        <Flex
          direction={baseDivided}
          gap='10px'
          justify='space-between'
          flexGrow={0}
          width={baseDirection === 'column' ? '100%' : 'auto'}
          height={baseDirection === 'column' ? 'auto' : '200px'}
        >
          {items.map((item, index) => (
            <BarLabelStyles key={index} direction={baseDirection}>
              {item.key}
            </BarLabelStyles>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BarGraphWidget;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
`;

const BarLabelStyles = styled.div<Pick<BarProps, 'direction'>>`
  height: ${(props) => (props.direction === 'column' ? '100%' : 'auto')};
  width: ${(props) => (props.direction === 'column' ? '100%' : '100%')};
  text-align: center;
`;

const BarStyles = styled.div<Pick<BarProps, 'direction'>>`
  flex: 1 1 0;
  width: 30%;
  height: 30%;
  background: white;
  border-radius: ${(props) => (props.direction === 'column' ? '15px 15px 0 0' : '0  15px 15px 0')};
`;
