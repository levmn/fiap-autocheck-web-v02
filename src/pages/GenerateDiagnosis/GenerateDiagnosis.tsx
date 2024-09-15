import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../components/Button/Button";
import {
    StyledForm,
    StyledSubTitle,
    StyledTitle,
    StyledDiv,
    StyledSectionButton,
    StyledButton,
    StyledDivButton,
    StyledDescription
} from "./GenerateDiagnosis.style";

export default function GenerateDiagnosis() {

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

                <StyledTitle>Gerar Diagnóstico</StyledTitle>
                <StyledSubTitle>Hyundai HB20 Sedan - 2013</StyledSubTitle>
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
                            <Link to={"/"}>
                                <IoIosSearch
                                    size={40}
                                    color="black"
                                    />
                            </Link>
                        </StyledForm>
                    </StyledDiv>

                <StyledDescription>
                    Não tem o código de falha? Busque por alternativas abaixo.
                </StyledDescription>

                <StyledSectionButton>

                    <StyledButton
                        onClick={() => handleButtonClick('Elétrica')}
                    >
                        <StyledDivButton>
                            <TiFlashOutline
                                size={40}
                                color="black"
                                />
                            <p>Elétrica</p>
                        </StyledDivButton>
                        <IoIosArrowDown size={40} color="black" />
                    </StyledButton>

                    <StyledButton
                        onClick={() => handleButtonClick('Mecânica')}
                    >
                        <StyledDivButton>
                            <IoSettingsOutline
                                size={40}
                                color="black"
                            />
                            <p>Mecânica</p>
                        </StyledDivButton>
                        <IoIosArrowDown size={40} color="black" />
                    </StyledButton>

                    <StyledButton
                        onClick={() => handleButtonClick('Possíveis Soluções')}
                    >
                        <StyledDivButton> 
                            <RiLightbulbFlashFill
                                size={40}
                                color="black"
                                />
                            <p>Possíveis Soluções</p>
                        </StyledDivButton>    
                        <IoIosArrowDown size={40} color="black" />
                    </StyledButton>

                </StyledSectionButton>
            </Layout>

            <Footer />
        </>
    );
};

