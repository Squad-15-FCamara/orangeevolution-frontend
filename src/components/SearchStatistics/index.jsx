import { Container, TextContainer, LeftBar, Theme } from './style';

export function SearchStatistics({ idRoad, name, doing, done, didnt }) {
  return (
    <Container idRoad={idRoad}>
      <LeftBar idRoad={idRoad} />
      <TextContainer>
        <Theme>{name}</Theme>
        <Theme>{doing}</Theme>
        <Theme>{done}</Theme>
        <Theme>{didnt}</Theme>
      </TextContainer>
    </Container>
  );
}
