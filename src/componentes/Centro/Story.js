import './Stories'

export default function Story(props) {
    return (
     <>
        <div className="Story">

            <div className="imagem">
                <img src={props.imgSrc} />
            </div>
            <div className="usuario">
                <p>{props.nome}</p>
            </div>

        </div>
        </>
    );
}