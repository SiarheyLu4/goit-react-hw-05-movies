import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieList = ({items}) => {
  const elements = items.map(({ id, title }) => <Li key={id}>
    <LinkEl to={`/movies/${id}`}>{title}</LinkEl>
    </Li>);
  return (
    <ul>{elements}</ul>
  );
}

MovieList.defaultProps = {
    items:[]
}

const LinkEl = styled(Link)`
  text-decoration: none;
  color: inherit;
  &: hover{
    color: #5941e8;
  }
`
const Li = styled.li`
padding-bottom: 4px;
font-size: 24px;
`