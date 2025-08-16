import ReactDOM from 'react-dom/client';
import ComponenteUno from './components/ComponenteUno';
import ComponenteDos from './components/ComponenteDos';
import ComponenteTres from './components/ComponenteTres';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <ComponenteUno />
    <div className="tarjetas-container">
      <ComponenteTres titulo="TÍTULO 1" />
      <ComponenteTres titulo="TÍTULO 2" />
      <ComponenteTres titulo="TÍTULO 3" />
      <ComponenteTres titulo="TÍTULO 4" />
    </div>
    <ComponenteDos />
  </div>
);
