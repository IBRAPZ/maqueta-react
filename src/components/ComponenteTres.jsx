import '../styles/ComponenteTres.css';

function ComponenteTres({ titulo }) {
  return (
    <div className="componente-tres">
      <div className="parte-superior">COMPONENTE TRES</div>
      <div className="parte-inferior">{titulo}</div>
    </div>
  );
}

export default ComponenteTres;
