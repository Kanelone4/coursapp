import Navbar from './Navbar';
import BlogPosts from '../Body/bodyG/blogPosts';
import Footer from '../footer/footer';
import Content from '../Body/bodyG/content';
import Component from '../Body/bodyD/Component';

export default function Kitchen() {
    return (
        <div style={{
            backgroundImage: 'url(https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg)',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            position: 'relative',
            top:'-100px'
        }}>
            <Navbar />
            <Content />
            <Component />

            <BlogPosts />
            <Footer />
        </div>
    );
}
