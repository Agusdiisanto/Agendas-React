
import Paciente from "./Paciente"



function ListadoPaciente({pacientes, setPaciente , eliminarPaciente}){

  return (

   <div className='md:w-1/2 lg:w-3/5 '>
     

      {pacientes && pacientes.length ? ( 

      <div className=" md:h-screen overflow-y-scroll">
        <h2 className='font-black text-3xl text-center'>Listado Paciente</h2>

        <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Reservas</span>
        </p>
        
        {pacientes.map( paciente => { 
          return(
                <Paciente 
                key={paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
                />
                )
        })}

      </div>

      ) : (

      <>
        <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>

        <p className='text-xl mt-5 mb-10 text-center'>
          Comienza agregando pacientes {''}
          <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
        </p>
      </> 
        )
      }

    </div>
  )
}

export default ListadoPaciente