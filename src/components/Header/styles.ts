import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1.8rem 5rem 3.75rem 5rem;
  height: 59vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: url("/header.svg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & div h1 {
      //styleName: Titles/H1 Maison;
      font-family: var(--primary-font);
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.8rem;
      color: var(--total-contrast);
    }

    & div p {
      font-family: var(--primary-font);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      color: var(--higth-contrast);
      max-width: 21.875rem;
      text-align: right;
      margin-left: auto;
    }
  }



  .container-input{
    width: 50%;
  }

  .content-input {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & input {
      align-items: center;
      justify-content: center;
      padding-left: 3.3125rem;
      display: flex;
      width: 100%;
      height: 3.125rem;
      border-radius: 8px;
      border: 1px solid var(--light-medium);

      &::placeholder {
        color: var(--dark);
        font-size: 1rem;
      }
    }

    svg {
      position: absolute;
      left: 1rem;
    }
  }
`;
