import { useState, useEffect } from 'react'
import Header from "./components/header"
import Formulario from "./components/formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  useEffect(() => {
    localStorage.setItem('Pacientes',JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className="container mx-auto mt-5">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
