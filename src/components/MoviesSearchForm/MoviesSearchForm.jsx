import { useState } from "react";
import styled from "styled-components";

export const MoviesSearchForm = ({onSubmit}) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: ''
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='search'
        value={state.search}
        onChange={handleChange}
        placeholder='enter movie name'
        required
      />
      <Btm type="submit">Search</Btm>
    </form>
  )
};

const Input = styled.input`
  width: 400px;
  height: 28px;
  font-size: 24px;
  margin-bottom: 16px;
`
const Btm = styled.button`
  height: 34px;
  font-size: 24px;
  background-color: #d3cff6;
  &:hover{
    background-color: #8b79f6;
  }
`