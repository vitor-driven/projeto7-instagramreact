import React, { useState } from "react";

export default function User() {
    const [userName, changeName] = useState("catanacomics");
    const askName = () => {
        const newName = prompt("Defina o novo nome de usuário:");
        if (newName.length > 0) {
            changeName(newName);
        }
    };

    const [userPic, changePic] = useState("assets/img/catanacomics.svg");
    const askPic = () => {
        const newPic = prompt("Link da nova foto de perfil:");
        if (newPic.length > 0) {
            changePic(newPic);
        }
    };

    return (
        <div className="usuario">
            <img src={userPic} onClick={askPic} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon name="pencil" onClick={askName}></ion-icon>
                </span>
            </div>
        </div>
    );
}
