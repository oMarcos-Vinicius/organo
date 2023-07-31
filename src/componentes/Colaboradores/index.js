import "./Colaboradores.css";

const Colaboradores = ({ nome, imagem, cargo, corDeFundo}) => {
    return (<div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={`Foto do ${nome}`}></img>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaboradores;