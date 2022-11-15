import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { statisticsService } from '../../services/statisticsService';
import { useState } from 'react';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  border: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '1px solid #4140bf') ||
    (idRoad == 'UX UI Design' && '1px solid #dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '1px solid #36aa4b') ||
    (idRoad == 'Soft Skills' && '1px solid #c8bf0d') ||
    '1px solid #000'};
  border-radius: 20px;
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
  display: flex;
`;

export const LeftBar = styled.div`
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '1px solid #4140bf') ||
    (idRoad == 'UX UI Design' && '1px solid #dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '1px solid #36aa4b') ||
    (idRoad == 'Soft Skills' && '1px solid #c8bf0d') ||
    '1px solid #000'};
  width: 20px;
  height: 100px;
  border-radius: 20px 0px 0px 20px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media screen and (max-width: 500px) {
    width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const FaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
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

  @media screen and (max-width: 900px) {
    height: 75%;
    max-width: 250px;
    /* min-height: 500px; */
    padding: 0px 15px;
  }
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 900px) {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;

export const Back = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 900px) {
    width: 15px;
  }
`;
export const TitleCourse = styled.h3`
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
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

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
`;

export const TagAuthor = styled(Tag)`
  background-color: orange;
  color: white;
`;
export const Time = styled.span`
  padding-top: 8px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;
export const Description = styled.p`
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

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

  @media screen and (max-width: 900px) {
    height: 30px;
    font-size: 14px;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 16px;

  @media screen and (max-width: 900px) {
    padding-top: 0px;
    gap: 8px;
  }
`;

export const StatusTitle = styled.h4`
  font-size: 20px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
    padding-top: 15px;
    margin: 0;
  }
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

  @media screen and (max-width: 900px) {
    padding: 2px;
    height: 25px;
  }
`;

export const CheckBoxDoing = styled.input`
  cursor: pointer;
  width: 40px;
  height: 20px;

  @media screen and (max-width: 900px) {
    height: 18px;
  }
`;

export const DoneProgress = styled(DoingProgress)``;
export const CheckBoxDone = styled.input`
  cursor: pointer;
  width: 40px;
  height: 20px;

  @media screen and (max-width: 900px) {
    height: 18px;
  }
`;
export const Text = styled.span`
  @media screen and (max-width: 900px) {
    font-size: 12px;
    padding-left: 5px;
  }
`;

export const ModalContentCard = ({
  id,
  title,
  author,
  idRoad,
  idType,
  time,
  description,
  link,
  setIsOpen,
}) => {
  const [doingCheck, setDoingCheck] = useState(false);
  const [doneCheck, setDoneCheck] = useState(false);
  const [IsSaved, SetIsSaved] = useState(false);

  const handleChange = (event) => {
    event.target.name === 'doing'
      ? setDoingCheck(!doingCheck)
      : setDoneCheck(!doneCheck);
  };

  const saveDoingCourse = (id) => statisticsService.addDoingCourse(4, id);
  const saveDoneCourse = (id) => statisticsService.addDoneCourse(4, id);

  const saveCourse = async (courseId) => {
    console.log(courseId);
    if (doingCheck && !doneCheck) {
      let response = await saveDoingCourse(courseId);
      response.status === 200 && SetIsSaved(true);
      return console.log(response.status);
    } else if (!doingCheck && doneCheck) {
      let response = await saveDoneCourse(courseId);
      response.status === 200 && SetIsSaved(true);
      return console.log(response.status);
    } else return SetIsSaved(true);
  };

  return (
    <WrapperModal>
      <WrapperContent>
        {IsSaved && (
          <ModalSaved
            SetIsSaved={SetIsSaved}
            doingCheck={doingCheck}
            doneCheck={doneCheck}
            setIsOpen={setIsOpen}
          />
        )}
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
            <CheckBoxDoing
              type="checkbox"
              onChange={handleChange}
              name="doing"
            />
          </DoingProgress>
          <DoneProgress>
            <Text>Concluído</Text>
            <CheckBoxDone type="checkbox" onChange={handleChange} name="done" />
          </DoneProgress>
          <Button onClick={() => saveCourse(id)}> Salvar </Button>
        </Status>
      </WrapperContent>
    </WrapperModal>
  );
};

export const Error = styled.div``;
export const BodyModal = styled.p``;

export const TitleModal = styled.h3``;

export const ButtonOk = styled.button``;
export const Success = styled.div``;

export const ModalSaved = ({
  SetIsSaved,
  doingCheck,
  doneCheck,
  setIsOpen = { setIsOpen },
}) => {
  const savedAndClose = () => {
    setIsOpen(false);
    SetIsSaved(false);
  };

  return (
    <WrapperModal>
      <WrapperContent>
        {!doingCheck && !doneCheck ? (
          <Error>
            <TitleModal>Ops, ocorreu um erro! </TitleModal>
            <BodyModal>Escolha uma opção antes de salvar</BodyModal>
            <Button onClick={() => SetIsSaved(false)}>OK</Button>
          </Error>
        ) : (
          <Success>
            <TitleModal>Concluido!</TitleModal>
            <BodyModal> Sua ação foi realizada com sucesso! </BodyModal>
            <Button onClick={() => savedAndClose()}>OK</Button>
          </Success>
        )}
      </WrapperContent>
    </WrapperModal>
  );
};
