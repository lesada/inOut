import { useState } from 'react';

import { Link } from 'expo-router';
import { useTheme } from 'styled-components/native';

import { Icons } from '@/assets/icons';

import {
  Container,
  Icon,
  Item,
  ItemText,
  Logo,
  SubMenu,
  SwitchContainer,
} from './styles';

type MenuProps = {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function Menu({ isDarkMode, setDarkMode }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { colors } = useTheme();

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
            <Icons.Calendar fill={colors.menu.text} />
          </Item>
          <Item isLast>
            <ItemText>Sair</ItemText>
            <Icons.Exit />
          </Item>
          <SwitchContainer
            onValueChange={() => setDarkMode(!isDarkMode)}
            value={isDarkMode}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
        </SubMenu>
      )}
    </>
  );
}

export default Menu;
