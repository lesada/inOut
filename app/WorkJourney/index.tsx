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
  Label,
  Title,
} from './styles';

function WorkJourney() {
  const today = new Date();
  return (
    <Container>
      <Title>Jornada de Trabalho</Title>
      <Block>
        <Day>{format(today, 'dd/MM/yyyy')}</Day>
        <Clock></Clock>
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
