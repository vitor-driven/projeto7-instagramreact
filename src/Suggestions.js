import Suggestion from "./Suggestion.js";

export default function Suggestions() {
    const sugProps = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            reason: "Segue você",
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            reason: "Segue você",
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            reason: "Segue você",
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            reason: "Segue você",
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
            reason: "Segue você",
        },
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugProps.map(Suggestion)}
        </div>
    );
}
