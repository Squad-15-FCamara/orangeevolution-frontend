import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  LeftBar,
  TextContainer,
} from '../../components/RoadTheme/style';
import { Theme, ThemeTitle } from './style';

export function ContentStatisticsAdm({ name, doing, done, didnt, link }) {
  return (
    <Container>
      <LeftBar />
      <TextContainer>
        <ThemeTitle>{name}</ThemeTitle>
        <Theme>{doing}</Theme>
        <Theme>{done}</Theme>
        <Theme>{didnt}</Theme>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </TextContainer>
    </Container>
  );
}
