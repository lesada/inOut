import React from 'react';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from 'styled-components';

import { Clock } from './styles';

const Progress = () => {
  const fill = 60;
  const clock = '12:00';
  const theme = useTheme();
  return (
    <AnimatedCircularProgress
      size={220}
      width={18}
      fill={fill}
      tintColor={theme.colors.primary[600]}
      backgroundColor={theme.colors.primary[200]}
    >
      {() => <Clock>{clock}</Clock>}
    </AnimatedCircularProgress>
  );
};

export default Progress;
