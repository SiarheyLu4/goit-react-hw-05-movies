import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Menu = () => {
  return (
    <Container>
      <Ul>
        <li>
          <HeaderLink to='/'>Home</HeaderLink>
        </li>
        <li>
          <HeaderLink to='/movies'>Movies</HeaderLink>
        </li>
        <li>
          <HeaderLink to='/about'>About</HeaderLink>
        </li>
      </Ul>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
`

const HeaderLink = styled(NavLink)`
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
  background-color: lavender;
  color: slateblue;
  &.active {
    background-color: #cfc7ff;
    color: black;
  }
`