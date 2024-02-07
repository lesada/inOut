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
  padding: 20px 24px 60px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
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
  background-color: ${({ theme }) => theme.colors.primary[200]};
  color: ${({ theme }) => theme.colors.neutral[900]};
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

export const Label = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[900]};
  opacity: 0.7;
`;
