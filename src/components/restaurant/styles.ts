import styled from "styled-components";

interface HeaderProps {
  restaurantImage: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    max-width: 600px;
    width: 100%;
    margin: 30px auto 100px;
    color: var(--dark-up);
    padding: 0 15px;

    .label {
      color: var(--dark-down);
      margin-bottom: 2px;
      font-weight: 700;
      font-size: 0.8rem;
    }

    > .prices {
      border-bottom: 1px solid #cccccc;
      padding-bottom: 30px;
      margin-top: 20px;
    }

    > .opening-hours {
      padding: 30px 0 20px;
    }
  }
`;

export const Header = styled.div<HeaderProps>`
  background-image: url(${(props) => props.restaurantImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 190px;
  width: 100%;
  position: relative;
  display: flex;

  > .back-link {
    color: var(--white);
    position: absolute;
    top: 48px;
    z-index: 1;
    left: 20%;
    font-size: 0.75rem;
    display: inline-flex;
    align-items: center;
    > svg {
      margin-right: 14px;
    }

    @media(max-width: 1200px) {
        top: 20px;
        left: 20px;
      }
  }

  .header-cover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
  }

  > .content {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    gap: 23px;
    align-items: center;
    z-index: 1;
    color: var(--white);

    > .restaurant-logo-wrapper {
      padding: 5px;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid white;
      flex-shrink: 0;

      .restaurant-logo {
        border-radius: 50%;
        border: 2px solid white !important;
      }
    }

    > .restaurant-name {
      margin-bottom: 10px;
    }

    @media(max-width: 600px) {
      flex-direction: column;
      padding: 20px;
    }
  }

  @media(max-width: 600px) {
    height: auto;
  }

`;
