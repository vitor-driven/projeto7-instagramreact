import Post from "./Post.js";

export default function Posts() {
    const postsProps = [
        {
            postUser: "meowed",
            userPic: "assets/img/meowed.svg",
            postImage: "assets/img/gato-telefone.svg",
            likeUser: "barked",
            likePic: "assets/img/barked.svg",
            likeCount: "55",
        },
        {
            postUser: "barked",
            userPic: "assets/img/barked.svg",
            postImage: "assets/img/dog.svg",
            likeUser: "meowed",
            likePic: "assets/img/meowed.svg",
            likeCount: "37",
        },
        {
            postUser: "meowed",
            userPic: "assets/img/meowed.svg",
            postImage: "assets/img/gato-telefone.svg",
            likeUser: "barked",
            likePic: "assets/img/barked.svg",
            likeCount: "82",
        },
        {
            postUser: "barked",
            userPic: "assets/img/barked.svg",
            postImage: "assets/img/dog.svg",
            likeUser: "meowed",
            likePic: "assets/img/meowed.svg",
            likeCount: "16",
        },
    ];

    return <div className="posts">{postsProps.map(Post)}</div>;
}
