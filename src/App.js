import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {

    const darBienvenida = () => alert("Bienvenido a nuestra store");
    return ( 
    <>
        <div className = "App">

        <Navbar 
        nombreDeLaTienda="Zuko" 
        subtitulo="store" 
        darBienvenida={darBienvenida} />

        <h1> Hola mundo </h1> 

        </div>

    </>
    );
}

export default App;