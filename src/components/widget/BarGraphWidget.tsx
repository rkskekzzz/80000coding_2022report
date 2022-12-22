import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import anime from 'animejs/lib/anime.es.js';
import { Flex } from '../Layout';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material';

interface BarProps {
  height?: string;
  width?: string;
  label?: string;
  selected?: boolean;
  direction?: 'column' | 'row-reverse';
  inView?: boolean;
}

const Bar = ({ height, width, label, selected, direction, inView }: BarProps) => {
  const barRef = useRef(null);
  const animation = anime({
    targets: barRef.current,
    width: `${width}`,
    height: `${height}`,
    duration: 2000,
    loop: false,
    autoplay: false,
  });

  useEffect(() => {
    if (inView) {
      animation.play();
    }
  }, [inView]);

  return <BarStyles ref={barRef} label={label} direction={direction} selected={selected} />;
};

interface BarGraphProps {
  items: { key: string; value: number }[];
  sort?: 'asc' | 'desc' | 'none';
  direction?: 'bottom-to-top' | 'left-to-right';
  selectedKey?: string;
  maxBarHeight: number;
}

const BarGraphWidget = ({ items, sort, direction, maxBarHeight, selectedKey }: BarGraphProps) => {
  const theme = useTheme();
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const copyItems = [...items];
  const baseDirection = direction === 'bottom-to-top' ? 'column' : 'row-reverse';
  const baseDivided = direction === 'bottom-to-top' ? 'row' : 'column';
  const baseAlign = direction === 'bottom-to-top' ? 'end' : 'start';

  if (sort === 'asc') {
    copyItems.sort((a, b) => a.value - b.value);
  }
  if (sort === 'desc') {
    copyItems.sort((a, b) => b.value - a.value);
  }

  return (
    <Container ref={ref}>
      <Flex direction={baseDivided} gap='10px' justify='space-between' align={baseAlign} height='200px' flexGrow={1}>
        {copyItems.map((item, index) =>
          // print item.key and selected key
          baseDirection === 'column' ? (
            <Bar
              key={index}
              label={item.key}
              direction={baseDirection}
              height={(200 * item.value) / maxBarHeight + 'px'}
              selected={item.key === selectedKey}
              inView={inView}
            />
          ) : (
            <Bar
              key={index}
              label={item.key}
              direction={baseDirection}
              // 227: x = 500: item.value
              width={(227 * item.value) / maxBarHeight + 'px'}
              selected={item.key === selectedKey}
              inView={inView}
            />
          )
        )}
      </Flex>
    </Container>
  );
};

export default BarGraphWidget;

const Container = styled.div`
  width: 100%;

  .bar-labels {
    position: absolute;
    bottom: 0;
  }
`;

const BarStyles = styled.div<Pick<BarProps, 'direction' | 'selected' | 'label'>>`
  flex: 1 1 0;
  position: relative;
  background: ${(props) =>
    !!props.selected ? `linear-gradient(${props.direction === 'column' ? 'to bottom' : 'to left'},#00fe73,#008df4)` : '#c4c4c4'};

  border-radius: 100px;

  &::after {
    width: 14px;
    height: ${(props) => (props.direction === 'column' ? '14px' : '')};
    font-size: 14px;
    content: ${(props) => (props.label ? `'${props.label}'` : 'none')};
    line-height: -14px;
    color: #ffffff;
    position: absolute;
    bottom: ${(props) => (props.direction === 'column' ? '14px' : '0px')};
    left: ${(props) => (props.direction === 'column' ? '0px' : '8px')};
    right: 0;
    margin: ${(props) => (props.direction === 'column' ? '0 auto' : 'auto 0')};
  }
`;
