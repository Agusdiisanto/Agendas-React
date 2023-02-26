import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

function Formulario({pacientes,setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
      if(Object.keys(pacientes).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      } 
  },[paciente])

  const generarID = () =>{

    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }


  const handleSubmit = (e) => {

    e.preventDefault();

    // Validacion De Formulario

    if ([nombre,propietario,email,fecha,sintoma].includes('')){
      setError(true)
      return;
    }
    setError(false)

    //Obejto Paciente 

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintoma,
    }

    if(paciente.id){
      
      // Editando el Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id 
                                                ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados)
      setPaciente({})
        
    }
    else{

      // Nuevo Registro
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);


    }

    // Reinicio de Formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
 

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-semibold'>Administralos</span>
        </p>

        <form onSubmit = {handleSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10'>

        {error  &&  <Error mensaje= 'Todos Los Campos Son Obligatorios' /> }

          <div className='mb-5'>
            <label htmlFor = 'mascota' className='block text-gray-700 uppercase font-bold'>Nombre:</label>

            <input id='mascota' type="texto" placeholder='Nombre De La Mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor = 'propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario:</label>

            <input id='propietario' type="texto" placeholder='Nombre Del Propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor = 'email' className='block text-gray-700 uppercase font-bold'>e-Mail:</label>

            <input id='email' type="email" placeholder='Email' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email} onChange={ (e) => setEmail(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor = 'fecha' className='block text-gray-700 uppercase font-bold'>Fecha</label>

            <input id='fecha' type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor = 'sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>

          <textarea 
                  id="sintomas"
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  placeholder='Describe los Sintomas de tu Mascota'
                  value={sintoma} onChange={ (e) => setSintomas(e.target.value)}
          ></textarea>
          </div>

          <input 
            type="submit"
            className='bg-indigo-600 w-full rounded-md p-3 text-white uppercase font-bold
                       hover:bg-indigo-700 cursor-pointer 

                        transition ease-in-out delay-150
                        hover:-translate-y-1 
                        hover:scale-110 duration-300


                       '
            value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
           />

        </form>

    </div>
  )
}

export default Formulario