import { Search } from "../../assets/icons/Icon";
import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.Container>
      <Styles.ContentContainer>
        <div className="content">
          <img src="/logo.svg" alt="logo" />
          <div>
            <h1>Descubra novos sabores</h1>
            <p>Aqui eu converso com você sobre nossa proposta</p>
          </div>
        </div>

        <div className="container-input">
          <div className="content-input">
            <input placeholder="Encontre um restaurante" />
            <Search />
          </div>
        </div>
      </Styles.ContentContainer>
    </Styles.Container>
  );
};
