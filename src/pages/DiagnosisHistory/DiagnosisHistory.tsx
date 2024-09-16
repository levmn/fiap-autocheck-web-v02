import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
    StyledTitle,
    StyledSubTitle,
    StyledDiagnosisList,
    StyledDiagnosisItem,
    StyledEmptySubTitle
} from "./DiagnosisHistory.style";

interface Diagnosis {
    id: number;
    type: string;
    date: string;
    car: string;
}

export default function DiagnosisHistory() {
    // Simulação de histórico de diagnósticos
    const [diagnosticsHistory, setDiagnosticsHistory] = useState<Diagnosis[]>([
        { id: 1, type: 'Falha Elétrica', date: '2023-08-10', car: 'Hyundai HB20 Sedan - 2013' },
        { id: 2, type: 'Falha Mecânica', date: '2023-08-15', car: 'Honda Civic - 2015' },
        { id: 3, type: 'Possíveis Soluções', date: '2023-08-20', car: 'Toyota Corolla - 2018' },
    ]);

    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <Link to={"/"}>
                    <IoIosArrowBack size={40} color="black" />
                </Link>

                <StyledTitle>Histórico de Diagnósticos</StyledTitle>
                <StyledSubTitle>Aqui você encontra todos os diagnósticos realizados.</StyledSubTitle>

                {diagnosticsHistory.length === 0 ? (
                    <StyledEmptySubTitle>Você ainda não possui diagnósticos.</StyledEmptySubTitle>
                ) : (
                    <StyledDiagnosisList>
                        {diagnosticsHistory.map(diagnosis => (
                            <StyledDiagnosisItem key={diagnosis.id}>
                                <p><strong>{diagnosis.type}</strong></p>
                                <p>{diagnosis.car}</p>
                                <p>{diagnosis.date}</p>
                            </StyledDiagnosisItem>
                        ))}
                    </StyledDiagnosisList>
                )}
            </Layout>

            <Footer />
        </>
    );
}
