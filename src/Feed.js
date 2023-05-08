import Stories from "./Stories.js";
import Posts from "./Posts.js";

export default function Feed() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}
