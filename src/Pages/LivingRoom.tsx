import Body from '../Components/LivingRoom_components/Body/Body';
import Header from '../Components/LivingRoom_components/Header/Header';
import Footer from '../Components/LivingRoom_components/Footer/footer';
import 'boxicons/css/boxicons.min.css';

export default function LivingRoom() {
    return (
        <div>
            <Header
                img='hero01-free-img-1024x647.jpg'
                title='Living Room'
            />
            <Body page= {true} />
            <Footer />
        </div>
    );
}