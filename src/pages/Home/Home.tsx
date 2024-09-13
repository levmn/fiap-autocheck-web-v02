import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

export default function Home() {
    
  const location = useLocation();
  const { logged } = location.state || { logged: false };

  const [tipoNavbar, setTipoNavbar] = useState('deslogado');

  useEffect(() => {
    if (logged) {
      setTipoNavbar('logged');
    }
  }, [logged]);

  return (
    <div>
      <Navbar type={tipoNavbar} />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}
