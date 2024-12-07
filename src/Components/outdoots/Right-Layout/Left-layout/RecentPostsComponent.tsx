interface Post{
    img: string,
    text1: string,
    text2: string
}

interface Posts{
    posts: Post[]
}

export default function RecentPosts(props: Posts) {
    return (
        <div className="mt-6 border-2">
            <div className="mx-3 my-9">
                <p className="my-4 font-bold text-2xl">Recent Posts</p>
                <div className="">
                    {props.posts.map((post, index) => (
                        <div>
                            <div key={index} className="flex">
                                <div>
                                    <img style={{width: '75px', height: '75px'}} src={post.img} alt="" />
                                </div>
                                <div className="ml-2">
                                    <p style={{color: 'red'}} className=" font-semibold w-48"><a href="">{post.text1}</a></p>
                                    <p className="mt-2 font-light w-48">{post.text2}</p>
                                </div>
                            </div>
                            {props.posts.length - 1 !== index && <hr className="mt-3 mb-5"/>}
                            
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}