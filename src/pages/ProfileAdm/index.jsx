import avatar from '../../components/SideBarAdm/avatarAdm.svg';
import { Wrapper } from '../Home/style';
import { MyProfile, ProfileContainer, Bio } from './style';

export function ProfileAdm() {
  return (
    <Wrapper>
      <MyProfile>Meu Perfil</MyProfile>
      <ProfileContainer>
        <img src={avatar} alt="Avatar do usuário" width="120" height="120" />
        <h2>Bianca Maestrini</h2>
      </ProfileContainer>
      <Bio>
        Bianca é uma mulher multitarefas. Formada em marketing e comunicação,
        ela trabalha como Community Manager na comunidade Orange Juice, do Grupo
        FCamara, e é responsável por montar novas estratégias, planejar,
        organizar e analisar métricas de conteúdos para a comunidade. É uma
        pessoa muito engajada, querendo que a Orange Juice cresça ainda mais,
        para ajudar pessoas a iniciar no ramo de tecnologia em todo o país e
        promovendo a FCamara como uma empresa referência em inovação. Desde que
        o Programa de Formação cresceu por conta da pandemia da covid-19, Bianca
        percebeu a necessidade de se criar um novo meio de preparar pessoas para
        ele, assim nasceu o Orange Evolution. Em seu tempo livre, gosta de
        interagir na comunidade, assistir filmes e séries com seu namorado.
      </Bio>
    </Wrapper>
  );
}
