import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import imgServico1 from "../../assets/images/imagem-servico1.jpg";
import imgServico2 from "../../assets/images/imagem-servico2.jpg";
import imgServico3 from "../../assets/images/imagem-servico3.jpg";
import fotoAllan from "../../assets/images/allan.png";
import fotoCaio from "../../assets/images/caio.png";
import fotoLevi from "../../assets/images/levi.png";
import { StyledButton, StyledButtonAdquirirServico, StyledButtonContato, StyledButtonSaibaMais, StyledContainer, StyledContainerContato, StyledContato, StyledContatos, StyledForm, StyledHome, StyledInfo, StyledIntegrantes, StyledIntegrantesCards, StyledServicos, StyledServicosCards } from "./Home.style";

export default function Home() {

  const [typeNavbar, setTypeNavbar] = useState('unlogged');

  useEffect(() => {
    const logged = localStorage.getItem('logged') === 'true';
    if (logged) {
      setTypeNavbar('logged');
    }else {
      setTypeNavbar('unlogged');
    }
  }, []);

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
            <Link to="/cadastrar">
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

      <StyledContato>
        <h2>Fale Conosco!</h2>
        <p>Entre em contato conosco para tirar dúvidas, dar sugestões ou solicitar um orçamento.</p>

        <StyledContainerContato id="fale-conosco">
          <StyledInfo>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1159349301374!2d-46.657424174484454!3d-23.56427930685303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dc4e1e39%3A0x9cfd59970ac3b457!2sAv.%20Paulista%2C%201106%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-914!5e0!3m2!1sen!2sbr!4v1716230946303!5m2!1sen!2sbr"
              width="400" height="300" style={{ border: "0" }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <StyledContatos>
              <span>
                <FaLocationDot size="20px" color="#0f5a6c" />
                Av. Paulista, 1106 - 7º Andar - Bela Vista, São Paulo - SP, 01311-000
              </span>
              <span>Telefone: (11) 4002-8922</span>
              <span>E-Mail: autocheckcontato@fiap.com.br</span>
            </StyledContatos>
          </StyledInfo>

          <StyledForm action="" method="post" className="formulario">
            <input type="text" name="nome" id="nome" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="assunto" name="assunto" id="assunto" placeholder="Assunto" />
            <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>

            <StyledButtonContato>
              <IoSend size="25px" color="#0f5a6c" />
            </StyledButtonContato>
          </StyledForm>
        </StyledContainerContato>
      </StyledContato>


      <Footer />
    </>
  );
}
