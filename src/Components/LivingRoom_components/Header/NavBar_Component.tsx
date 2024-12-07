import { Link } from 'react-router-dom'
interface Content {
    img: string
}

export default function NavBar(props: Content) {
    return (
        <div className="flex justify-between">
            
            <img src={props.img} alt="" />
            
            
            <nav style={{marginLeft: '450px', filter: 'brightness(.80)'}} className="flex gap-10 text-white font-semibold text-lg">
                <a style={{textDecoration: 'none'}} href="">About Us</a>
                <Link style={{textDecoration: 'none'}} to="/Living-Room">Living Room</Link>
                <a style={{textDecoration: 'none'}} href="">Kitchen</a>
                <a style={{textDecoration: 'none'}} href="">Outdoors</a>
                <a style={{textDecoration: 'none'}} href="">Contact</a>
            </nav>
        </div>
    );
}

