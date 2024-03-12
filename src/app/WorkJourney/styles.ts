import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px ${({ theme }) => theme.containerPadding};
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.background.default};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.timer.circle.dark};
`;

export const Block = styled.View`
  padding: 20px 24px 60px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.timer.bg};
  border-radius: 32px;
  width: 100%;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const Info = styled.Text`
  padding: 5px 8px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.colors.timer.circle.light};
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
  margin-top: 60px;
`;

export const Button = styled.View`
  gap: 16px;
  align-items: center;
`;

type ButtonProps = {
  danger?: boolean;
} & TouchableOpacityProps;

export const Icon = styled.TouchableOpacity<ButtonProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, danger }) =>
    danger
      ? theme.colors.button.danger.enabled
      : theme.colors.button.primary.enabled};
`;

export const Label = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark};
  opacity: 0.7;
`;
