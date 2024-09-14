import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import imgServico1 from "../../assets/images/imagem-servico1.jpg";
import imgServico2 from "../../assets/images/imagem-servico2.jpg";
import imgServico3 from "../../assets/images/imagem-servico3.jpg";
import { StyledButton, StyledButtonAdquirirServico, StyledButtonSaibaMais, StyledContainer, StyledHome, StyledServicos, StyledServicosCards } from "./Home.style";

export default function Home() {

  const location = useLocation();
  const { logged } = location.state || { logged: false };

  const [typeNavbar, setTypeNavbar] = useState('deslogado');

  useEffect(() => {
    if (logged) {
      setTypeNavbar('logged');
    }
  }, [logged]);

  return (
    <>
      <Navbar type={typeNavbar} />

      <StyledHome>
        <StyledContainer>
          <h1>Seja</h1>
          <h1>Bem-Vindo</h1>
          <p>Conheça <b>AutoCheck</b>, o seu novo mecânico de bolso!</p>
          <StyledButton>
            <Link to="#saiba-mais">
              <StyledButtonSaibaMais>Saiba Mais</StyledButtonSaibaMais>
            </Link>
            <Link to="/cadastro">
              <StyledButtonAdquirirServico>Adquirir Serviço</StyledButtonAdquirirServico>
            </Link>
          </StyledButton>
        </StyledContainer>
      </StyledHome>

      <StyledServicos id="saiba-mais">
        <h2>Nosso Serviços</h2>
        <p>Oferecemos diagnósticos precisos de veículos e assistência completa, facilitando orçamentos e
          agendamentos, visando eficiência e a melhor experiência para atender as necessidades do cliente de
          ponta-a-ponta.</p>

        <StyledServicosCards>
          <article>
            <img src={imgServico1} alt="Imagem ilustrativa do serviço" />
            <div className="card-texto">
              <h3>Assistência Inteligente</h3>
              <span>Assistência fácil e ágil via chat bot</span>
            </div>
          </article>
          <article>
            <img src={imgServico2} alt="Imagem ilustrativa do serviço" />
            <div className="card-texto">
              <h3>Diagnóstico</h3>
              <span>Diagnóstico completo do seu veículo</span>
            </div>
          </article>
          <article>
            <img src={imgServico3} alt="Imagem ilustrativa do serviço" />
            <div className="card-texto">
              <h3>Manutenção</h3>
              <span>Direcionamento para o CAPS mais próximo</span>
            </div>
          </article>
        </StyledServicosCards>
      </StyledServicos>

      <Footer />
    </>
  );
}
