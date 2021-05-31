import * as S from './style';

export const WorkAreaContainer = (props: {
  flexDirection: string;
  children: unknown;
}) => (
  <S.Container flexDirection={props.flexDirection}>
    {props.children}
  </S.Container>
);
