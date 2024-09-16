import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { StyledForm, StyledSubTitle, StyledTitle } from "./VehicleRegistration.style";

export default function VehicleRegistration() {
    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <Link to={"/cadastrar"}>
                    <IoIosArrowBack size={40} color="black" />
                </Link>

                <StyledTitle>Cadastrar Veículo</StyledTitle>
                <StyledSubTitle>Preencha as informações do seu veículo</StyledSubTitle>

                <StyledForm action="" method="post">
                    <input type="text" name="ano" id="ano" placeholder="Ano" />
                    <input type="text" name="montadora" id="montadora" placeholder="Montadora" />
                    <input type="text" name="veiculo" id="veiculo" placeholder="Veículo" />
                    <input type="text" name="motor" id="motor" placeholder="Motor" />
                    <div>
                        <button type="submit" className="button-enviar">
                            <Link to="/diagnosticar">Cadastrar</Link>
                        </button>
                    </div>
                </StyledForm>
            </Layout>

            <Footer />
        </>
    )
}