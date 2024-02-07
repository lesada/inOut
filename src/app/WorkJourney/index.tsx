import { format } from 'date-fns';

import { Icons } from '@/assets/icons';
import Progress from '@/components/Progress';

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
  const today = new Date();
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
