import hero01 from './hero01.jpg'
import pic20 from './pic20.jpg'
import sofa from './sofa.jpg'
import pic23 from './pic23.jpg'

export default function RightLayout() {

    const Read = [
    [
        "Sunt doloremque blandit inven",
        "November 20, 2017 / Living Room",  
        pic20,
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
        "Read More »"
    ],
    [
        "Fugit quaerat vulputate! Irure.",
        "November 20, 2017 / Living Room",  
        hero01,
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
        "Read More »"
    ],
    [
        "Litora aptent magnam laoreet!",
        "November 7, 2017 / Living Room",  
        sofa,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
        "Read More »"
    ],
    [
        "Ex maxime quibusdam quam",
        "April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",  
        pic23,
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
        "Read More »"
    ],
  ];

    return (
        <div>

            <div>
                <p><a href="">Taciti hendrerit dis odit incidunt</a></p>
                <p style={{ color: 'red' }}>November 21, 2017 / Kitchen, Living Room, Reading Room</p>
                <img className='my-2' src={'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg'} alt="" />
                <p>Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]</p>
                <p className='my-8'><a href="#">Read More »</a></p>
                <hr />
            </div>

            <div className='mt-12 grid grid-cols-2 gap-12'>
                {Read.map((item, i) => (
                    <div key={i}>
                        <p><a href="">{item[0]}</a></p>
                        <p className='my-2'><a style={{ color: 'red' }} href="">{item[1]}</a></p>
                        <img  src={item[2]} alt="" />
                        <p className=''>{item[3]}</p>
                        <p><a href="">{item[4]}</a></p>
                        <hr className='mt-5'/>
                    </div>
                ))}
            </div>


        </div>
    );
}