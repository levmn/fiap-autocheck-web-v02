import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export default function Home() {

    const [tipoNavbar, setTipoNavbar] = useState('deslogado')

    const alterarTipo = () => {}

    return (
        <div>
            <Navbar type={tipoNavbar}/>
            <h1>Home</h1>
            <Footer />
        </div>
    );
}