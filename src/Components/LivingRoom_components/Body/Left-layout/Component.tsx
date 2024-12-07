import SeachBar from "./Component-searchBar";
import RecentPosts from "./RecentPostsComponent";
import Tag from "./TagsComponent";

export default function Component() {
    return (
        <div className="ml-16" style={{width: '350px'}}>
            <SeachBar />

            <RecentPosts
                posts={
                    [
                        {
                            img: "pic26-free-img-150x150.jpg",
                            text1: "Consectetuer vehicula ab",
                            text2: "In Kitchen, Lifestyle"
                        },
                        {
                            img: "hero01-free-img-1024x647.jpg",
                            text1: "Taciti hendrerit dis odit incidunt",
                            text2: "In Kitchen, Living Room, Reading Room"
                        },
                        {
                            img: "pic20-free-img-150x150.jpg",
                            text1: "Sunt doloremque blandit inven",
                            text2: "In Living Room"
                        },
                        {
                            img: "hero01-free-img-1024x647.jpg",
                            text1: "Fugit quaerat vulputate! Irure.",
                            text2: "In Living Room"
                        },
                        {
                            img: "sofa-with-pot-150x150.jpg",
                            text1: "Litora aptent magnam laoreet!",
                            text2: "In Living Room"
                        }
                    ]
                }
            />

            <Tag
                texts={
                    [
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
                        "wall"
                    ]
                }
            />
        </div>
    );
}