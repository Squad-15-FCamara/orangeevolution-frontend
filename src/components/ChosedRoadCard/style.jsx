import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const Container = styled.div`
  width: 887px;
  height: 100px;
  border: 1px solid #4140bf;
  border-radius: 20px;
  background-color: #e2e2ff;
  display: flex;
`;

export const LeftBar = styled.div`
  background-color: #4140bf;
  width: 20px;
  height: 100px;
  border-radius: 20px 0px 0px 20px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1rem;
  display: block;
`;

export const FaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e2ff;
  width: 10%;
  border-radius: 0px 20px 20px 0px;
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    &:nth-child(1) {
      stroke: #36357e;
      stroke-width: 50;
      color: transparent;
    }
  }
  a {
    cursor: pointer;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

// Modal card components

export const WrapperModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  z-index: 995;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: 2s all;
`;

export const WrapperContent = styled.div`
  max-width: 385px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: white;
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  border-radius: 30px 0px 0px 30px;
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-top: 40px;
`;

export const Back = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
export const TitleCourse = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: #4140bf;
  color: white;
  padding: 4px 6px;
  font-weight: 600;
  border-radius: 4px;
`;

export const TagAuthor = styled(Tag)`
  background-color: orange;
  color: white;
`;
export const Time = styled.span`
  padding-top: 8px;
`;
export const Description = styled.p``;

export const Button = styled.a`
  width: 100%;
  height: 48px;
  background-color: #36357e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 16px;
`;

export const StatusTitle = styled.h4`
  font-size: 20px;
`;
export const DoingProgress = styled.div`
  height: 36px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  padding-left: 15px;
`;

export const CheckBoxDoing = styled.input`
  cursor: pointer;
  width: 40px;
  height: 20px;
`;

export const DoneProgress = styled(DoingProgress)``;
export const CheckBoxDone = styled.input`
  cursor: pointer;
  width: 40px;
  height: 20px;
`;
export const Text = styled.span``;

export const ModalContentCard = ({
  title,
  author,
  idRoad,
  idType,
  time,
  description,
  link,
  setIsOpen,
  setIsFavorite,
  setIsDone,
}) => {
  return (
    <WrapperModal>
      <WrapperContent>
        <Header>
          <Back icon={faArrowLeft} onClick={() => setIsOpen(false)} />{' '}
          Informações
        </Header>
        <TitleCourse>{title}</TitleCourse>
        <Tags>
          <TagAuthor>{author}</TagAuthor>
          <Tag>{idRoad}</Tag>
          <Tag>{idType}</Tag>
        </Tags>
        <Time>{time} min</Time>
        <Description>{description}</Description>
        <Button target="_blank" href={link}>
          Acessar{' '}
        </Button>
        <Status>
          <StatusTitle>Status</StatusTitle>
          <DoingProgress>
            <Text>Em andamento</Text>
            <CheckBoxDoing type="checkbox" />
          </DoingProgress>
          <DoneProgress>
            <Text>Concluído</Text>
            <CheckBoxDone type="checkbox" />
          </DoneProgress>
          <Button> Salvar </Button>
        </Status>
      </WrapperContent>
    </WrapperModal>
  );
};
