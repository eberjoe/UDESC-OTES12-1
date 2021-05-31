import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props: { flexDirection: string }) => props.flexDirection};
  align-items: center;
  padding: 100px;
  height: 90vh;
  width: 100%;
`;
