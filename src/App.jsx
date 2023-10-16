import { useState } from 'react'
import Header from "./components/header"
import Formulario from "./components/formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);


  return (
    <div className="container mx-auto mt-5">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
        />
        <ListadoPacientes
          pacientes = {pacientes}
        />
      </div>
    </div>
  )
}

export default App
