import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <H2>404 Page not found</H2>
      <LinkPage to='/'>To main page</LinkPage>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`
const LinkPage = styled(Link)`
font-size: 24px;
display: block;
text-align: center;
text-decoration: none;
color: inherit;
`