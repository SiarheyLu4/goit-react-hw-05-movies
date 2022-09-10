import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


export const Button = () => {
  const location = useLocation();
  const from = location.state?.from || "/";

  // console.log(location.state.from);

  const navigate = useNavigate();
  const goBack = () => navigate(from);

  return (
    <Btm type="button" onClick={goBack}>Go back</Btm>
  )
}

const Btm = styled.button`
  margin: 12px;
  width: 100px;
  height: 32px;
  font-size: 16px;
  background-color: #d3cff6;
  &:hover{
    background-color: #8b79f6;
  }
`