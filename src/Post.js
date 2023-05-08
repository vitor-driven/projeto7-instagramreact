export default function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userPic} alt={props.postUser} />
                    barked
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImage} alt={props.postUser} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likePic} alt={props.likeUser} />
                    <div className="texto">
                        Curtido por <strong>adorable_animals</strong> e{" "}
                        <strong>outras {props.likeCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
