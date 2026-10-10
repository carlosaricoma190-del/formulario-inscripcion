import Formulario from './formulario';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/fondo.jpeg)` }}
    >
      <Formulario />
    </div>
  );
}

export default App;
