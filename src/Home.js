import React from 'react'

import styled from 'styled-components';
import {Form} from './components/Form';

const Styles = styled.div`
  div {
    margin-top: 30px;
  }

  h1, p {
    text-align: center;
  }


  input {
    width: 50%;
    height: 40px;
    line-height: 40px;
    margin-left: 25%;
    margin-right: 25px;
    border-radius: 10px;
    border: solid 1px #bbb;
  }

  button {
    width: 50%;
    margin-left: 25%;
    margin-right: 25px;
    margin-top: 30px;
  }
    
`;
export const Home = () => (
  <Styles>
      <div>
        <h1>Home</h1>
        <p>Aplikacja wyszukująca 10 najbardziej zanieczyszconych miast w wybranym kraju!</p>
        <Form />
      </div>
    </Styles>
    );
