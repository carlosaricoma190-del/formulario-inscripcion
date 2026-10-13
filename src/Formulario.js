import { useState } from "react";
import './App.css';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [mensaje, setMensaje] = useState('');


    function enviarformulario(event) {
        event.preventDefault();
        if (nombre === '') {setMensaje('Por favor ingrese su nombre'); return;}
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {setMensaje('No ingrese números ni caracteres especiales en el nombre'); return;}
        if (apellido === '') {setMensaje('Por favor ingrese su apellido'); return;}
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {setMensaje('No ingrese números ni caracteres especiales en el apellido'); return;}
        if (dni === '') {setMensaje('Por favor ingrese su DNI'); return;}
        if (!/^\d{8}$/.test(dni)) {setMensaje('Ingrese un DNI válido de 8 digitos'); return;}
        if (email === '') {setMensaje('Por favor ingrese su email'); return;}
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {setMensaje('Ingrese un email válido'); return;}
        if (curso === '') {setMensaje('Por favor sellecione un curso'); return;}
        if (modalidad === '') {setMensaje('Por favor seleccione una modalidad'); return;}
        setMensaje('Formulario enviado correctamente');
   }

   return(
    <form className="formulario" onSubmit={enviarformulario}>
        <h2>Formulario de inscripcion</h2>
        {mensaje && (
        <div className={"mensaje"}>{mensaje}<button type="button" onClick={() => setMensaje('')}>Cerrar</button>
        </div>)}
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
        <label>Apellido</label>
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <label>DNI</label>
        <input type="text" value={dni} onChange={(event) => setDni(event.target.value)}/>
        <label>Curso</label>
        <select value={curso} onChange={(event) => setCurso(event.target.value)}>
            <option value="">Seleccione un curso</option>
            <option value="javascript">Diseño Web</option>
            <option value="python">Programación Orientada a Objetos</option>
            <option value="react">Sistemas Operativos</option>
        </select>
        <label>Modalidad</label>
        <select value={modalidad} onChange={(event) => setModalidad(event.target.value)}>
            <option value="">Seleccione una modalidad</option>
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
        </select>
        <button type="submit">Enviar</button>
    </form>
   );
}
export default Formulario;