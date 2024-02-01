import { ViewProps } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.containerPadding};
  margin-top: 24px;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary[600]};
`;

export const Block = styled.View`
  padding: 60px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 32px;
  width: 100%;
  gap: 60px;
`;

export const Day = styled.Text`
  padding: 5px 8px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  color: ${({ theme }) => theme.colors.neutral[900]};

  position: absolute;
  top: 20px;
  left: 24px;
`;

export const Clock = styled.View``;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.View`
  gap: 16px;
  align-items: center;
`;

type ButtonProps = {
  danger?: boolean;
} & ViewProps;

export const Icon = styled.View<ButtonProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary[800]};
  align-items: center;
  justify-content: center;

  ${({ danger, theme }) =>
    danger &&
    css`
      background-color: ${theme.colors.error[800]};
    `}
`;

export const Label = styled.Text``;
