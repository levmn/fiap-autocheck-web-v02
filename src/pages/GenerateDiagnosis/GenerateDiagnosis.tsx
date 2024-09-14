import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { StyledForm, StyledSubTitle, StyledTitle } from "./GenerateDiagnosis.style";

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

                        <StyledForm action="" method="post" className="formulario">
                            <input
                                type="text"
                                name="busca-codigo-falha"
                                id="busca-codigo-falha"
                                placeholder="Busque pelo código de falha"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                />
                                <IoIosSearch size={40} color="black"/>
                        </StyledForm>
            </Layout>
            
            <Footer />
        </>
    );
};

