export type TInterval = {
  start: Date;
  end?: Date;
};

export type TRecord = {
  id: number;
  startDate: Date;
  endDate?: Date;
  intervals?: TInterval[];
  workedHours: number;
};
