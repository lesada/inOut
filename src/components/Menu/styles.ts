import { ViewProps } from 'react-native';

import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 95px;
  padding: ${({ theme }) => theme.containerPadding};

  position: relative;
  background-color: ${({ theme }) => theme.colors.background.header};
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  left: ${({ theme }) => theme.containerPadding};
`;

export const Logo = styled.View``;

export const SubMenu = styled.View`
  position: absolute;
  top: 95px;
  z-index: 9;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.header};
  z-index: 9;
  padding: 24px ${({ theme }) => theme.containerPadding};
  gap: 24px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

type ItemProps = {
  isLast?: boolean;
} & ViewProps;

export const Item = styled.View<ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.timer.circle.dark};
  padding-bottom: 8px;

  ${({ isLast }) =>
    isLast &&
    css`
      border-bottom-width: 0;
    `}
`;

export const ItemText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.dark};
`;
