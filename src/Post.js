import React, { useState } from "react";

export default function Post(props) {
    let initCount = Number(props.likeCount);
    const [isLiked, setLike] = useState(false);
    const toggleLike = () => {
        setLike(!isLiked);
    };

    function likeImage() {
        if (isLiked !== true) {
            setLike(true);
        }
    }

    let userLike = isLiked ? 1 : 0;
    let likeCount = initCount + userLike;

    const [isSaved, setSave] = useState(false);
    const toggleSave = () => {
        setSave(!isSaved);
    };

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userPic} alt={props.postUser} />
                    barked
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div
                onDoubleClick={likeImage}
                data-test="post-image"
                className="conteudo"
            >
                <img src={props.postImage} alt={props.postUser} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {isLiked ? (
                            <ion-icon
                                data-test="like-post"
                                name="heart"
                                onClick={toggleLike}
                                style={{ color: "red" }}
                            ></ion-icon>
                        ) : (
                            <ion-icon
                                data-test="like-post"
                                name="heart-outline"
                                onClick={toggleLike}
                            ></ion-icon>
                        )}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {isSaved ? (
                            <ion-icon
                                data-test="save-post"
                                name="bookmark"
                                onClick={toggleSave}
                            ></ion-icon>
                        ) : (
                            <ion-icon
                                data-test="save-post"
                                name="bookmark-outline"
                                onClick={toggleSave}
                            ></ion-icon>
                        )}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likePic} alt={props.likeUser} />
                    <div data-test="likes-number" className="texto">
                        Curtido por <strong>adorable_animals</strong> e{" "}
                        <strong>outras {likeCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
