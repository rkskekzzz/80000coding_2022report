import React from 'react';
import styled from '@emotion/styled';
import anime from 'animejs/lib/anime.es.js';
import Grid from './Grid';

import { Weekday } from '../data';
import Flex from './Flex';

interface BarProps {
  height: number;
}

const Bar = ({ height }: BarProps) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    anime({
      targets: ref.current,
      width: '100%',
      height: `${height}px`,
      duration: 2000,
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);

  return <div ref={ref} className='bar'></div>;
};

interface BarGraphProps {
  items: { key: string; value: number }[];
  maxBarHeight: number;
}

const BarGraph = ({ items, maxBarHeight }: BarGraphProps) => {
  return (
    <Container>
      <Flex direction='column' gap='10px'>
        <Flex direction='row' gap='10px' justify='space-between' align='end' height='200px'>
          {items.map((item, index) => (
            <Bar key={index} height={(200 * item.value) / maxBarHeight} />
          ))}
        </Flex>
        <Flex direction='row' gap='10px' justify='space-between'>
          {items.map((item, index) => (
            <div key={index} className='bar-label'>
              {item.key}
            </div>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BarGraph;

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  .bar {
    flex: 1 1 0;
    width: 100%;
    height: 100px;
    background: white;
    border-radius: 100px 100px 0 0;
  }
  .bar-label {
    flex: 1 1 0;
    width: 100%;
    text-align: center;
  }
`;
