import './Post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://annphoto.net/wp-content/uploads/2021/05/15-dicas-de-fotografia-de-paisagem-de-montanha-para-imagens.jpgfit15001000ssl1-780x470.jpeg" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                <span className="postCat">
                    Music
                </span>
                <span className="postCat">
                    Life
                </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}