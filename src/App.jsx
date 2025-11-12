import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitacion from "./pages/Invitacion";
import NotFound from "./pages/NotFound";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Invitacion />} />
          <Route path="/notfound" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
