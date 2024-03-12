import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: 24px ${({ theme }) => theme.containerPadding};
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.purple};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text.blue};
  margin-bottom: 32px;
  line-height: 40px;
`;

export const Center = styled.View`
  align-items: center;
`;

export const Block = styled.View`
  align-items: flex-start;
  padding: 20px 24px;
  gap: 32px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.timer.bg};
  max-width: 256px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Day = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text.dark};
  padding: 5px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.timer.circle.light};
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 48px;
  margin: 0 auto;
  line-height: 58px;
`;
