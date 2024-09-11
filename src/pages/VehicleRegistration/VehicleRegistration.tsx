import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { NavbarLogged } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";

export default function VehicleRegistration() {
    return (
        <>
            <NavbarLogged />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={60} color="black" />
                </Link>

                <h1 className="titulo-pagina">Cadastrar Veículo</h1>
                <p className="descricao-pagina">Preencha as informações do seu veículo</p>

                <form action="" method="post" className="formulario">
                    <input type="text" name="ano" id="ano" placeholder="Ano" />
                    <input type="text" name="montadora" id="montadora" placeholder="Montadora" />
                    <input type="text" name="veiculo" id="veiculo" placeholder="Veículo" />
                    <input type="text" name="motor" id="motor" placeholder="Motor" />
                    <div>
                        <button type="submit" className="button-enviar"><a
                            href="./gerar-diagnostico.html">Cadastrar</a></button>
                    </div>
                </form>
            </Layout>

            <Footer />
        </>
    )
}