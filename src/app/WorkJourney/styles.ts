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

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 100%;
`;

export const Progress = styled.View`
  width: 220px;
  height: 220px;

  border-radius: 110px;
  border-width: 20px;
  border-color: ${({ theme }) => theme.colors.primary[200]};

  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Indicator = styled.View.attrs({})`
  width: 220px;
  height: 220px;

  border-radius: 110px;
  border-width: 20px;
  border-left-color: rgba(0, 0, 0, 0.01);
  border-bottom-color: rgba(0, 0, 0, 0.01);

  border-right-color: ${({ theme }) => theme.colors.primary[600]};
  border-top-color: ${({ theme }) => theme.colors.primary[600]};

  transform: rotate(-45deg);

  position: absolute;
`;

export const Offset = styled.View`
  width: 220px;
  height: 220px;

  border-radius: 110px;
  border-width: 20px;

  border-left-color: rgba(0, 0, 0, 0.01);
  border-bottom-color: rgba(0, 0, 0, 0.01);

  border-right-color: ${({ theme }) => theme.colors.primary[200]};
  border-top-color: ${({ theme }) => theme.colors.primary[200]};

  transform: rotate(-135deg);

  position: absolute;
  z-index: 9;
`;

export const Clock = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

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

export const Label = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[900]};
  opacity: 0.7;
`;
