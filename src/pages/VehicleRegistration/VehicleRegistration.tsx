import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { StyledForm, StyledSubTitle, StyledTitle } from "./VehicleRegistration.style";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

export default function VehicleRegistration() {

    const navigate = useNavigate();

    const [year, setYear] = useState('')
    const [vehicleManufacturer, setVehicleManufacturer] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [engine, setEngine] = useState('')
    const [registered, setRegistered] = useState<boolean>(() => {
        return localStorage.getItem('logged') === 'true'})

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const yearNumber = parseInt(year, 10);
        if (isNaN(yearNumber) || yearNumber < 1886 || yearNumber > new Date().getFullYear()) {
            alert('Por favor, insira um ano válido!');
            return;
        };

        if (!vehicleManufacturer.trim()) {
            alert('Por favor, insira uma montadora válida!');
            return;
        };

        if (!vehicle.trim()) {
            alert('Por favor, insira um veículo válido!');
            return;
        };

        if (!engine.trim()) {
            alert('Por favor, insira um motor válido!');
            return;
        };

        alert('Cadastro de veículo realizado com sucesso!');;
        localStorage.setItem('vehicleRegistered', 'true');
        setRegistered(true);
        navigate('/', { state: { registered: true } });
    };

    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={40} color="black" />
                </Link>

                <StyledTitle>Cadastrar Veículo</StyledTitle>
                <StyledSubTitle>Preencha as informações do seu veículo</StyledSubTitle>

                <StyledForm action="" method="post" >
                    <input
                        type="text"
                        placeholder="Ano"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Montadora"
                        value={vehicleManufacturer}
                        onChange={(e) => setVehicleManufacturer(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Veículo"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Motor"
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                    />

                    <div>
                        <Button type="submit" onClick={handleClick}>
                            Cadastrar
                        </Button>
                    </div>

                </StyledForm>
            </Layout>

            <Footer />
        </>
    )
}