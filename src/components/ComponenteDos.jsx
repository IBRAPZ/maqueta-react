import ComponenteTres from './ComponenteTres';
import '../styles/ComponenteDos.css';


function ComponenteDos() {
  return (
    <div className="componente-dos">
      <div className="fila-tres">
        <ComponenteTres titulo="TÍTULO" />
        <ComponenteTres titulo="TÍTULO" />
        <ComponenteTres titulo="TÍTULO" />
        <ComponenteTres titulo="TÍTULO" />
      </div>
      <div className="footer-dos">COMPONENTE DOS</div>
    </div>
  );
}

export default ComponenteDos;
