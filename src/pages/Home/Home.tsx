import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import imgServico1 from "../../assets/images/imagem-servico1.jpg";
import imgServico2 from "../../assets/images/imagem-servico2.jpg";
import imgServico3 from "../../assets/images/imagem-servico3.jpg";
import fotoAllan from "../../assets/images/allan.png";
import fotoCaio from "../../assets/images/caio.png";
import fotoLevi from "../../assets/images/levi.png";
import { StyledButton, StyledButtonAdquirirServico, StyledButtonSaibaMais, StyledContainer, StyledHome, StyledIntegrantes, StyledIntegrantesCards, StyledServicos, StyledServicosCards } from "./Home.style";
import { FaGithub } from "react-icons/fa";

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

      <StyledIntegrantes className="section-time">
        <h2>Time AutoCheck</h2>
        <p>Somos o time que idealizou e construiu a solução <b>AutoCheck</b> para ser integrada com a <b>Porto
          Seguro</b>. Alunos da FIAP, da turma 1TDSPX.</p>

        <StyledIntegrantesCards>
          <article>
            <img src={fotoAllan} alt="Foto do Allan" />
            <h3>Allan Brito</h3>
            <span>RM558948</span>
            <a href="https://github.com/Allanbm100" target="_blank">
              <FaGithub color="#0f5a6c" size="25px" />
            </a>
          </article>
          <article>
            <img src={fotoCaio} alt="Foto do Caio" />
            <h3>Caio Liang</h3>
            <span>RM558868</span>
            <a href="https://github.com/CaioLiang" target="_blank">
              <FaGithub color="#0f5a6c" size="25px" />
            </a>
          </article>
          <article>
            <img src={fotoLevi} alt="Foto do Levi" />
            <h3>Levi Magni</h3>
            <span>RM98276</span>
            <a href="https://github.com/levmn" target="_blank">
              <FaGithub color="#0f5a6c" size="25px" />
            </a>
          </article>
        </StyledIntegrantesCards>
      </StyledIntegrantes>

      <Footer />
    </>
  );
}
