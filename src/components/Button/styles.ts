import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button.primary.enabled};
  padding: 16px 32px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 240px;
`;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.light};
`;
