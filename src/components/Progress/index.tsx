import React, { useEffect, useState } from 'react';

import { getHours, getMinutes, getSeconds } from 'date-fns';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from 'styled-components';

import { Clock } from './styles';

const Progress = () => {
  const theme = useTheme();

  const date = new Date();

  const [seconds, setSeconds] = useState(getSeconds(date));

  const hours = getHours(date);
  const minutes = getMinutes(date);

  const clock = `${hours}:${minutes}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
    }
  }, [seconds]);

  const fill = (seconds / 60) * 100;

  return (
    <AnimatedCircularProgress
      size={220}
      width={18}
      fill={fill}
      tintColor={theme.colors.primary[600]}
      backgroundColor={theme.colors.primary[200]}
      rotation={0}
    >
      {() => <Clock>{clock}</Clock>}
    </AnimatedCircularProgress>
  );
};

export default Progress;
