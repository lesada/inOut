import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, getTime } from 'date-fns';

import { Icons } from '@/assets/icons';
import Progress from '@/components/Progress';
import { TRecord } from '@/types/records';

import {
  Block,
  Button,
  Buttons,
  Container,
  Icon,
  Info,
  Label,
  Row,
  Title,
} from './styles';

function WorkJourney() {
  const [isRunning, setIsRunning] = useState(false);

  const today = new Date();

  const getCachedProductData = async () => {
    try {
      const cachedData = await AsyncStorage.getItem('recordsData');
      console.log(cachedData);
      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      console.log('Error retrieving cached product data:', error);
    }
  };

  const handlePlay = async () => {
    setIsRunning(true);

    const cachedData = await getCachedProductData();

    const newRecord: TRecord = {
      id: getTime(today),
      startDate: today,
      workedHours: 0,
    };

    cachedData ? cachedData.push(newRecord) : [newRecord];

    AsyncStorage.setItem('recordsData', JSON.stringify(cachedData));
  };

  const handlePause = async () => {
    setIsRunning(false);

    const cachedData: TRecord[] = await getCachedProductData();

    // const lastRecord = cachedData[cachedData.length - 1];

    // const newInterval: TInterval = {
    //   start: new Date(),
    // };

    // lastRecord.intervals
    //   ? lastRecord.intervals.push(newInterval)
    //   : [newInterval];

    // AsyncStorage.setItem('recordsData', JSON.stringify(cachedData));
  };

  return (
    <Container>
      <Title>Jornada de Trabalho</Title>
      <Block>
        <Row>
          <Info>{format(today, 'dd/MM/yyyy')}</Info>
          <Info>4h trabalhadas</Info>
        </Row>
        <Progress />
        <Buttons>
          <Button>
            {isRunning ? (
              <Icon onPress={handlePause}>
                <Icons.Pause />
              </Icon>
            ) : (
              <Icon onPress={handlePlay}>
                <Icons.Play />
              </Icon>
            )}
            <Label>{isRunning ? 'Pausar' : 'Iniciar'}</Label>
          </Button>
          <Button>
            <Icon danger>
              <Icons.Stop />
            </Icon>
            <Label>Parar</Label>
          </Button>
        </Buttons>
      </Block>
    </Container>
  );
}

export default WorkJourney;
