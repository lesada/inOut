import styled from 'styled-components/native';

export const Clock = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark};
`;
