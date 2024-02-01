import { TouchableOpacityProps } from 'react-native';
import { Container, Content } from './styles';

type ButtonProps = {
  children: React.ReactNode;
} & TouchableOpacityProps;

function Button({ children, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      <Content>{children}</Content>
    </Container>
  );
}

export default Button;
