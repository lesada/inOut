import React, { useEffect, useState } from 'react';

import { getSeconds } from 'date-fns';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from 'styled-components';

import { formatHour } from '@/utils/formatHour';

import { Clock } from './styles';

const Progress = () => {
  const theme = useTheme();

  const date = new Date();

  const [seconds, setSeconds] = useState(getSeconds(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(getSeconds(new Date()) - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fill = (seconds / 60) * 100;
  const clock = formatHour(date);

  return (
    <AnimatedCircularProgress
      size={220}
      width={18}
      fill={fill}
      tintColor={theme.colors.primary[600]}
      backgroundColor={theme.colors.primary[200]}
      rotation={0}
      duration={1000}
    >
      {() => <Clock>{clock}</Clock>}
    </AnimatedCircularProgress>
  );
};

export default Progress;
