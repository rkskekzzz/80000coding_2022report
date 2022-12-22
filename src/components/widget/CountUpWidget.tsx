import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  from: number;
  to: number;
  children?: React.ReactNode;
}

const CountUpWidget = ({ from, to, children }: CountUpProps) => {
  const countUpRef = useRef(null);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const { pauseResume, reset } = useCountUp({
    ref: countUpRef,
    start: from,
    end: to,
    delay: 0,
    duration: 1,
  });
  useEffect(() => {
    if (inView) {
      reset();
      pauseResume();
    }
  }, [inView]);

  return (
    <div ref={ref} className='center'>
      <Typography ref={countUpRef} align='center' fontSize='3rem' fontWeight='800' color='#00dc64' fontFamily='Nanum Gothic' />
      {children}
    </div>
  );
};

export default CountUpWidget;
