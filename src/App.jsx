import MainPage from './components/MainPage';
// import Payment from './components/Payment'
// import { Jabon } from './data/Jabon'
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importando librerias de react-router-dom para el manejo de wards ('/')


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/payment" element={<Payment title={Jabon.title} images={Jabon.images} price={Jabon.price} description={Jabon.description} />} /> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App
