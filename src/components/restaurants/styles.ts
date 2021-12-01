import styled from "styled-components";

interface RestaurantItemProps {
  backgroundUrl: string;
}

export const Container = styled.div`
  display: flex;
  max-width: 45.625rem;
  margin: 30px auto 0;
  flex-direction: column;

  .restaurant-list {
    margin-top: 1.875rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    margin-bottom: 12.5rem;
  }
`;

export const StyledRestaurantItem = styled.a<RestaurantItemProps>`
  width: 21.875rem;
  height: 10.625rem;
  border-radius: 0.5rem;
  position: relative;
  background: url(${({ backgroundUrl }) => backgroundUrl}) no-repeat;
  background-size: cover;

  .restaurant-name {
    position: absolute;
    bottom: 0.625rem;
    left: 0.625rem;
    color: var(--white);
  }

  .restaurant-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0.5rem;
  }
`;
