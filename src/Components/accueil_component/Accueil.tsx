import Navbar from '../components/navbar/Navbar';
import Content from './content/content';
import LeftLayout from './LeftLayout/leftLayout';
import BlogPosts from './BlogPosts/blogPosts';
import Footer from './footer/footer';
import Home from './home/home';
export default function Accueil() {
    return (
        <div style={{
            backgroundImage: 'url(https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg)',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            
        }} >
            <Navbar />
            <Home />
            <Content />
            <LeftLayout />
            <BlogPosts />
            <Footer />
        </div>
    );
}