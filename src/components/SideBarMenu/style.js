import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Wrapper = styled.div`
   width: 235px;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Menu = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const Logo = styled.img`
  margin-top: 20px;
`

export const LinkStyled = styled.a`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;

  :hover{
    background-color: #36357E;
    color: white;
    cursor: pointer;

    >*{
    color: white;
    background-color: #36357E;
    }
  }
`


export const LinkStyledSearch = styled(LinkStyled)`
  border: 1px solid #36357E;
`


export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Input = styled.input`
  height: 25px;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 2px;
  max-width: 130px;
  font-family: 'Montserrat';
  background-color: transparent;

  ::placeholder{
    color: #36357E;
    font-weight: 400;
  }

  :hover {

    ::placeholder{
      color: white;
    }
  }
`

export const Text = styled.p`
  color: #36357E;
  list-style-type: none;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  :hover{
    background-color: #36357E;
    color: white;
  }
`

export const SearchIcon = styled(FontAwesomeIcon)`
    color: #36357E;
    padding-left: 29px;
    font-size: 25px;

`

export const TrilhasIcon = styled(FontAwesomeIcon)`
  color: #36357E;
  padding-left: 29px;
  font-size: 25px;

`
export const HomeIcon = styled(FontAwesomeIcon)`
  color: #36357E;
  padding-left: 29px;
  font-size: 25px;

`

export const PastasIcon = styled(FontAwesomeIcon)`
  color: #36357E;
  padding-left: 29px;
  font-size: 25px;

`

export const NotificaIcon = styled(FontAwesomeIcon)`
  color: #36357E;
  padding-left: 29px;
  font-size: 25px;


`

export const ProgressoIcon = styled(FontAwesomeIcon)`
  color: #36357E;
  padding-left: 29px;
  font-size: 25px;

`

export const LogOutIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  transform: rotate(180deg);
  font-size: 25px;


`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  background-color: #36357E;
  gap: 10px;
  height: 80px;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  bottom: 0;
  width: 235px;
`

export const Avatar = styled.img`
   max-width: 40px;
   padding-left: 16px;
`


export const Name = styled.p`
  color: #FBFBFB;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`
