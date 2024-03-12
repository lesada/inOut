import { useState } from 'react';

import { Link } from 'expo-router';

import { Icons } from '@/assets/icons';

import { Container, Icon, Item, ItemText, Logo, SubMenu } from './styles';

type MenuProps = {
  setDarkMode: (value: boolean) => void;
};

function Menu({ setDarkMode }: MenuProps) {
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
