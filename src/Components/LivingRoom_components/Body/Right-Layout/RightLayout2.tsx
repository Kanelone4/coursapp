import { Link } from 'react-router-dom'
import pic21 from './pic21.jpg'

export default function RightLayout2() {

    const Read = [
    [
        "Natoque odio amet autem parturient",
        "March 15, 2012 / Living Room, Outdoors",  
        pic21,
        "Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a […]",
        "Read More »"
    ],
  ];

    return (
        <div>
            <div className='mt-12 grid grid-cols-2 gap-12'>
                {Read.map((item, i) => (
                    <div key={i}>
                        <p className='font-bold text-2xl'><a href="">{item[0]}</a></p>
                        <p className='my-2 text-xs'><a style={{ color: 'red' }} href="">{item[1]}</a></p>
                        <img  src={item[2]} alt="" />
                        <p className='mt-5 font-light'>{item[3]}</p>
                        <p style={{color: 'red'}} className='my-8'><a href="">{item[4]}</a></p>
                        <hr className='mb-0'/>
                    </div>
                ))}
            </div>

            <div style={{width: '520px'}} className='flex justify-between mt-12'>
                <div>
                    <button style={{borderColor: 'red'}} className='bx bx-left-arrow-alt py-2 px-7 font-extralight text-xl border-2 hover:bg-red-500 hover:text-white'><Link to="/Living-Room">Previous</Link></button>
                </div>
                <div className='flex'>
                    <button className='px-3 py-1 mr-2 font-extralight text-xl border-2 hover:bg-red-500 hover:text-white'><Link to="/Living-Room">1</Link></button>
                    <div className='px-3 py-1 mr-2 font-extralight text-xl border-2 bg-red-500 text-white'>2</div>
                </div>
            </div>


        </div>
    );
}


 

