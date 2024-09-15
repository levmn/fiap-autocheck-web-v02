import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLightbulb } from "react-icons/md";
import { StyledForm, StyledSubTitle, StyledTitle, StyledDiv, StyledSectionButton} from "./GenerateDiagnosis.style";

export default function GenerateDiagnosis () {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleButtonClick = (type: string) => {
        console.log(`Botão ${type} clicado`);
    };


    return (
        <>
            <Navbar type="logged" />
            
            <Layout>
                    <Link to={"/"}>
                        <IoIosArrowBack size={40} color="black" />
                    </Link>

                        <StyledTitle className="titulo-pagina">Gerar Diagnóstico</StyledTitle>
                        <StyledSubTitle className="descricao-pagina">Hyundai HB20 Sedan - 2013</StyledSubTitle>
                        
                        <StyledDiv>
                            <StyledForm action="" method="post" className="formulario">
                                <input
                                    type="text"
                                    name="busca-codigo-falha"
                                    id="busca-codigo-falha"
                                    placeholder="Busque pelo código de falha"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    />
                            </StyledForm>
                                    <IoIosSearch 
                                    size={40} 
                                    color="black" 
                                    />
                        </StyledDiv>
                        

                        <StyledSubTitle id="sem-codigo-falha" className="descricao-pagina">
                            Não tem o código de falha? Busque por alternativas abaixo.
                        </StyledSubTitle>
                        
                        <StyledSectionButton>
                            <button
                                type="button"
                                className="button-enviar"
                                onClick={() => handleButtonClick('Elétrica')}
                                >
                                <TiFlashOutline 
                                size={40} 
                                color="black" 
                                />
                                
                                <StyledSubTitle>Elétrica</StyledSubTitle>
                            </button>
                            <button
                                type="button"
                                className="button-enviar"
                                onClick={() => handleButtonClick('Mecânica')}
                                >
                                <IoSettingsOutline
                                    size={40} 
                                    color="black" 
                                    />
                                    
                                <StyledSubTitle>Mecânica</StyledSubTitle>
                            </button>
                            <button
                                type="button"
                                className="button-enviar"
                                onClick={() => handleButtonClick('Possíveis Soluções')}
                                >
                                <MdLightbulb
                                    size={40} 
                                    color="black" 
                                    />
                                <StyledSubTitle>Possíveis Soluções</StyledSubTitle>
                            </button>
                        </StyledSectionButton>
            </Layout>
            
            <Footer />
        </>
    );
};

