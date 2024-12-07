interface Content {
    img: string
}

export default function NavBar(props: Content) {
    return (
        <div className="flex justify-between">
            
            <img src={props.img} alt="" />
            
            
            <nav style={{marginLeft: '450px', filter: 'brightness(.80)'}} className="flex gap-10 text-white font-semibold text-lg">
                <a href="">About Us</a>
                <a href="">Living Room</a>
                <a href="">Kitchen</a>
                <a href="">Outdoors</a>
                <a href="">Contact</a>
            </nav>
        </div>
    );
}

