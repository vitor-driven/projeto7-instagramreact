import React, { useState } from "react";

export default function User() {
    const [userName, changeName] = useState("catanacomics");
    const askName = () => {
        const newName = prompt("Defina o novo nome de usuário:");
        if (newName.length > 0 && newName !== " ") {
            changeName(newName);
        }
    };

    const [userPic, changePic] = useState("assets/img/catanacomics.svg");
    const askPic = () => {
        const newPic = prompt("Link da nova foto de perfil:");
        if (newPic.length > 0 && newPic !== " ") {
            changePic(newPic);
        }
    };

    return (
        <div className="usuario">
            <img
                src={userPic}
                onClick={askPic}
                data-test="profile-image"
                alt="imagem de perfil"
            />
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon
                        name="pencil"
                        data-test="edit-name"
                        onClick={askName}
                    ></ion-icon>
                </span>
            </div>
        </div>
    );
}
