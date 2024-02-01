import { Icons } from '@/assets/icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Container, Icon, Item, ItemText, Logo, SubMenu } from './styles';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <Icon onPress={() => setIsOpen(!isOpen)}>
          <Icons.HamburgerMenu />
        </Icon>
        <Logo>
          <Icons.Logo />
        </Logo>
      </Container>
      {isOpen && (
        <SubMenu>
          <Item>
            <Link href={'/'} replace onPress={() => setIsOpen(false)}>
              <ItemText>Início</ItemText>
            </Link>
          </Item>
          <Item>
            <Link
              href={'/WorkJourney/'}
              replace
              onPress={() => setIsOpen(false)}
            >
              <ItemText>Jornada de Trabalho</ItemText>
            </Link>
          </Item>
          <Item>
            <ItemText onPress={() => setIsOpen(false)}>Editar Jornada</ItemText>
          </Item>
          <Item>
            <ItemText onPress={() => setIsOpen(false)}>
              Visualizar Jornada
            </ItemText>
            <Icons.Calendar />
          </Item>
          <Item isLast>
            <ItemText>Sair</ItemText>
            <Icons.Exit />
          </Item>
        </SubMenu>
      )}
    </>
  );
}

export default Menu;
