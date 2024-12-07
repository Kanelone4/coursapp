import NavBar from "../Header/NavBar_Component";

interface Content {
    img: string,
    title: string
}

export default function Header(props: Content) {
    return (
        <div className="relative mb-0">
            <img
  src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg"
  alt="header image"
  style={{
    width: '100%',
    height: '75vh',
    objectFit: 'cover',
     filter: 'brightness(.30)', // Pour que l'image couvre l'ensemble de la zone, sans déformation
  }}
/>
            <div className="absolute mx-40 " style={{top: '30px'}}>
                <NavBar img="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png"/>
                <div className="text-white text-center mt-60 ">
                    <p className="flex items-center justify-center text-8xl font-bold">{props.title}</p>
                    <p className="mt-4"><a href="">Home</a><span className="w-4">&gt;&gt;</span>{props.title}</p>
                </div>
            </div>
        </div>
    );
}
