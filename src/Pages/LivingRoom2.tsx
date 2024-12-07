import Body from '../Components/LivingRoom_components/Body/Body';
import Header from '../Components/LivingRoom_components/Header/Header';
import Footer from '../Components/LivingRoom_components/Footer/footer';
import 'boxicons/css/boxicons.min.css';
import pic21 from '../Components/LivingRoom_components/Body/Right-Layout/pic21.jpg'

export default function LivingRoom2() {
    return (
        <div>
            <Header
                img={pic21}
                title='Living Room'
            />
            <Body page= {false}/>
            <Footer />
        </div>
    );
}