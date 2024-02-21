import { getHours, getMinutes } from 'date-fns';

export const formatHour = (date: Date): string => {
  const hours = getHours(date);
  const minutes = getMinutes(date);

  const clock = `${hours.toFixed(0).padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}`;
  return clock;
};
