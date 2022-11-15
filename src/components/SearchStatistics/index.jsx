import { Container, TextContainer, LeftBar, ThemeName, Theme } from './style';

export function SearchStatistics({ idRoad, name, doing, done, didnt }) {
  return (
    <Container idRoad={idRoad}>
      <LeftBar idRoad={idRoad} />
      <TextContainer>
        <ThemeName>{name}</ThemeName>
        <Theme>{doing}</Theme>
        <Theme>{done}</Theme>
        <Theme>{didnt}</Theme>
      </TextContainer>
    </Container>
  );
}
