import { Icons } from '@/assets/icons';
import { useState } from 'react';
import { Container, Icon, Item, ItemText, Logo, SubMenu } from './styles';

function Menu() {
  const [isOpen, setIsOpen] = useState(true);
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
            <ItemText>Início</ItemText>
          </Item>
          <Item>
            <ItemText>Jornada de Trabalho</ItemText>
          </Item>
          <Item>
            <ItemText>Editar Jornada</ItemText>
          </Item>
          <Item>
            <ItemText>Visualizar Jornada</ItemText>
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
