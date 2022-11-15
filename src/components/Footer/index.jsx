import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { FooterS, ContainerBrand } from './style';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <FooterS>
      <ContainerBrand>
        <a href="https://www.instagram.com/grupo.fcamara/">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="https://pt-br.facebook.com/grupo.fcamara/">
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
        </a>
        <a href="https://www.youtube.com/c/GrupoFCamara">
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </a>
      </ContainerBrand>
      <p>
        All rights reserved Grupo FCamara - Orange Juice. &copy; {currentYear}
      </p>
    </FooterS>
  );
}
