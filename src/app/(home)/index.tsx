import { format } from 'date-fns';
import { Link } from 'expo-router';

import Button from '@/components/Button';

import {
  Block,
  Center,
  Container,
  Day,
  Greetings,
  Time,
  Title,
} from './styles';

function Home() {
  const today = new Date();
  return (
    <Container>
      <Greetings>Bem-vinda, Iara!</Greetings>
      <Title>Inicie sua jornada de trabalho</Title>
      <Center>
        <Block>
          <Day>{format(today, 'dd/MM/yyyy')}</Day>
          <Time>{format(today, 'HH:mm')}</Time>
        </Block>

        <Button>
          <Link href={'/WorkJourney/'}>Iniciar </Link>
        </Button>
      </Center>
    </Container>
  );
}

export default Home;
