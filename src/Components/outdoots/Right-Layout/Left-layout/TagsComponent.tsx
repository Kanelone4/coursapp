interface Tags{
    texts: string[]
}

export default function Tag(props: Tags) {
    
    return (
        <div className="mt-6 border-2">
            <div className="m-6">
                <p className="font-bold text-2xl">Tags</p>
                <div className="mt-5 ">
                    {props.texts.map((text, index) => (
                        <div key={index} className="hover:bg-red-500 border-2 inline-block mr-2 mt-2">
                            <p  className="text-red-500 p-2 hover:text-white"><a href="">{text}</a></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}