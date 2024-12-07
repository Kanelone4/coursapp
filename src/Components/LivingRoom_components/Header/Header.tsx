import NavBar from "./NavBar_Component";

interface Content {
    img: string,
    title: string
}

export default function Header(props: Content) {
    return (
        <div className="relative mb-0">
            <img className="w-full" style={{clipPath: 'inset(0 0 34% 0', filter: 'brightness(.30)'}} src={props.img} alt="" />
            <div className="absolute mx-40 " style={{top: '30px'}}>
                <NavBar img="InteriorImg.png"/>
                <div className="text-white text-center mt-60 ">
                    <p className="font-bold text-8xl">{props.title}</p>
                    <p className="mt-4"><a href="">Home</a><span className="w-4">&gt;&gt;</span>{props.title}</p>
                </div>
            </div>
        </div>
    );
}
