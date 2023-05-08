import Story from "./Story.js";

export default function Stories() {
    const storyProps = [
        { image: "assets/img/9gag.svg", name: "9gag" },
        { image: "assets/img/meowed.svg", name: "meowed" },
        { image: "assets/img/barked.svg", name: "barked" },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            name: "nathanwpylestrangeplanet",
        },
        { image: "assets/img/wawawicomics.svg", name: "wawawicomics" },
        { image: "assets/img/respondeai.svg", name: "respondeai" },
        { image: "assets/img/filomoderna.svg", name: "filomoderna" },
        { image: "assets/img/memeriagourmet.svg", name: "memeriagourmet" },
    ];

    return (
        <div className="stories">
            {storyProps.map(Story)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
