import { useState } from "react";
import './App.css';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [modalidad, setModalidad] = useState('');

    function enviarformulario(event) {
        event.preventDefault();
        if (nombre === '') {alert('Por favor ingrese su nombre'); return;}
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {alert('No ingrese números ni caracteres especiales en el nombre'); return;}
        if (apellido === '') {alert('Por favor ingrese su apellido'); return;}
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {alert('No ingrese números ni caracteres especiales en el apellido'); return;}
        if (dni === '') {alert('Por favor ingrese su DNI'); return;}
        if (!/^\d{7,8}$/.test(dni)) {alert('Ingrese un DNI válido de 8 digitos'); return;}
        if (email === '') {alert('Por favor ingrese su email'); return;}
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {alert('Ingrese un email válido'); return;}
        if (curso === '') {alert('Por favor sellecione un curso'); return;}
        if (modalidad === '') {alert('Por favor seleccione una modalidad'); return;}
        alert('Formulario enviado correctamente');
   }

   return(
    <form className="formulario" onSubmit={enviarformulario}>
        <h2>Formulario de inscripcion</h2>
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