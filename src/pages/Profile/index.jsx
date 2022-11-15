import avatar from '../../components/SideBarMenu/avatar.svg';
import { Wrapper } from '../Home/style';
import { MyProfile, ProfileContainer, Bio } from './style';

export function Profile() {
  return (
    <Wrapper>
      <MyProfile>Meu Perfil</MyProfile>
      <ProfileContainer>
        <img src={avatar} alt="Avatar do usuário" width="120" height="120" />
        <h2>Thiago Bandeira</h2>
      </ProfileContainer>
      <Bio>
        Olá! Eu sou o Thiago, sou jornalista, mas no momento iniciei o processo
        de transição de carreira para desenvolvimento front-end há cerca de seis
        meses. Fazendo cursos gratuitos e pagos, estou aprendendo um pouco de
        cada vez. Eu amo aprender sobre outras áreas e, em paralelo com os
        estudos em front-end, estou vendo um pouco sobre fundamentos de UX
        Design e sobre soft skills no ambiente de trabaho! Em meu tempo livre,
        costumo ouvir músicas, andar de bicicleta e brincar com meu gato. Aliás,
        eu amo gatos!!
      </Bio>
    </Wrapper>
  );
}
