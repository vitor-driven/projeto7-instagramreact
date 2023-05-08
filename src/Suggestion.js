export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} alt={props.name} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>
            <div className="seguir">seguir</div>
        </div>
    );
}
