
import React from 'react'

const Paciente = ({paciente , setPaciente, eliminarPaciente}) =>{

  const {nombre, propietario, email, fecha, sintoma, id} = paciente

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas Eliminar este paciente');

    if(respuesta){
      eliminarPaciente(id)
    }

  }


  return (
    <div className='mx-5 my-10 bg-white shadow-lg px-5 py-5 rounded-xl '>


    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''} 
      <span className='font-normal normal-case'>{nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''} 
      <span className='font-normal normal-case'>{propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>E-Mail: {''} 
      <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {''} 
      <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''} 
      <span className='font-normal normal-case'>{sintoma}</span>
    </p>

    <div className='flex justify-center mt-5'>
        <button type= "button" className='py-2 px-10 bg-indigo-600 hover:bg-green-700
                               text-white rounded-md font-bold uppercase cursor-pointer mx-3' 
                               onClick = {() => setPaciente(paciente)}>
                                Editar</button>

        <button type= "button" className='py-2 px-10 bg-indigo-600 hover:bg-red-700
                               text-white rounded-md font-bold uppercase cursor-pointer'
                               onClick={handleEliminar}>
                                Eliminar</button>

    </div>
    


  </div>
  )
}

export default Paciente