import { Icons } from '@/assets/icons';
import { format } from 'date-fns';
import {
  Block,
  Button,
  Buttons,
  Clock,
  Container,
  Day,
  Icon,
  Indicator,
  Label,
  Offset,
  Progress,
  Title,
  Wrapper,
} from './styles';

function WorkJourney() {
  const today = new Date();
  return (
    <Container>
      <Title>Jornada de Trabalho</Title>
      <Block>
        <Day>{format(today, 'dd/MM/yyyy')}</Day>
        <Wrapper>
          <Progress>
            <Indicator />
            <Offset />
          </Progress>
          <Clock>{format(today, 'HH:mm')}</Clock>
        </Wrapper>
        <Buttons>
          <Button>
            <Icon>
              <Icons.Pause />
            </Icon>
            <Label>Pausar</Label>
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
