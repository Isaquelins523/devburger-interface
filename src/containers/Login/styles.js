import styled from 'styled-components';

import BackgroundLeft from '../../assets/background-left.svg';
import BackgroundRight from '../../assets/background-right.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  /* height: 100vh;
  width: 100vw; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLeft}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100%;
  width: 100%;
  /* max-width: 50%; */

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    max-width: 400px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  background: url('${BackgroundRight}');
  background-color: #1e1e1e;

  p {
    color: #fff;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', serif;
  /* font-size: 40px; */
  font-size: 2.5rem;
  color: #ffff;

  span {
    color: #9758a6;
    font-family: 'Road Rage', serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
`;

export const Button = styled.button``;
