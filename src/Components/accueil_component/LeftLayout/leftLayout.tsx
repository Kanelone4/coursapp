import React from 'react';

interface Tags {
    texts: string[];
}

const Tag: React.FC<Tags> = (props) => {
    return (
        <div style={{ position: 'relative',  }} className="mt-6 border-2">
            <div className="m-6">
                <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold',position: 'relative',top: '-10px', }}className="font-bold text-2xl">Tags</p>
                <div className="mt-5">
                    {props.texts.map((text, index) => (
                        <div className="hover:bg-pink-400 border-2 inline-block mr-2 mt-2" key={index}>
                            <p className="p-2 text-pink-500 hover:text-white"><a style={{ color: '#ff0E47',position: 'relative',top: '-1px',left: '-3px' }} href="">{text}</a></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface Post {
    img: string;
    text1: string;
    text2: string;
}

interface Posts {
    posts: Post[];
}

const RecentPosts: React.FC<Posts> = (props) => {
    return (
        <div style={{ position: 'relative', top: '-80px' }} className="mt-6 border-2">
            <div className="mx-3 my-9">
                <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold',position: 'relative',top: '-10px', }}className="my-4 font-bold text-2xl">Recent Posts</p>
                <div>
                    {props.posts.map((post, index) => (
                        <div key={index}>
                            <div className="flex">
                                <div>
                                    <img style={{ width: '75px', height: '75px' }} src={post.img} alt="" />
                                </div>
                                <div className="ml-2">
                                    <p style={{ fontSize: '17px', fontFamily: 'sans-serif', fontWeight: 'bold',color:'#ff0E47',textAlign: 'left' }}><a  style={{ color: '#ff0E47',position: 'relative',top: '-5px',left: '15px' }}href="">{post.text1}</a></p>
                                    <p style={{ position: 'relative',top: '-15px',left: '15px',textAlign: 'left' }}className="mt-2 font-light w-48">{post.text2}</p>
                                </div>
                            </div>
                            {props.posts.length - 1 !== index && <hr className="mt-3 mb-5" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SeachBar: React.FC = () => {
    return (
        <div className="relative">
            <input style={{ width: '350px',backgroundColor:'#f4f4f7',border: '3px solid #f4f4f7',position: 'relative',top: '-40px' }} type="text" placeholder="Search..."  className=" text-base p-3 mt-5" />
            <i className="bx bx-search text-black absolute mt-9" style={{ left: '310px',position: 'relative',top: '-112px' }}></i>
        </div>
    );
};

const LeftLayout: React.FC = () => {
    return (
        <div className="ml-8 relative" style={{ width: '350px', left: '1000px', }}>
    <div className="flex">
        {/* Barre verticale */}

        {/* Contenu principal */}
        <div>
            <SeachBar />
            <RecentPosts
                posts={[
                    {
                        img: "pic20-free-img-150x150.jpg",
                        text1: "Consectetuer vehicula ab",
                        text2: "In Kitchen, Lifestyle",
                    },
                    {
                        img: "hero01-free-img-1024x647.jpg",
                        text1: "Taciti hendrerit dis odit incidunt",
                        text2: "In Kitchen, Living Room, Reading Room",
                    },
                    {
                        img: "pic20-free-img-150x150.jpg",
                        text1: "Sunt doloremque blandit inven",
                        text2: "In Living Room",
                    },
                    {
                        img: "hero01-free-img-1024x647.jpg",
                        text1: "Fugit quaerat vulputate! Irure.",
                        text2: "In Living Room",
                    },
                    {
                        img: "sofa-with-pot-150x150.jpg",
                        text1: "Litora aptent magnam laoreet!",
                        text2: "In Living Room",
                    },
                ]}
            />
            <Tag
                texts={[
                    "appliances",
                    "architecture",
                    "area",
                    "bed",
                    "bedroom",
                    "chair",
                    "chairs",
                    "corners",
                    "decor",
                    "design",
                    "exhaust",
                    "fire place",
                    "frames",
                    "furniture",
                    "garden",
                    "home",
                    "interior",
                    "kitchen",
                    "lifestyle",
                    "lights",
                    "living room",
                    "modern",
                    "outdoor",
                    "plants",
                    "Shopping",
                    "sitout",
                    "table",
                    "table top",
                    "wall",
                ]}
            />
        </div>
    </div>
</div>

    );
};

export default LeftLayout;
