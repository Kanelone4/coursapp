import Component from "./Left-layout/Component";
import RightLayout from "./Right-Layout/RightLayout";
import RightLayout2 from "./Right-Layout/RightLayout2";

interface Page {
    page: boolean
}

export default function Body(props: Page) {
    return (
        <div className="mx-40 flex">
            <div className="flex-2/3">
                {props.page ? <RightLayout /> : <RightLayout2 />}
            </div>
            <div>
                <hr className="rotate-90"/>
            </div>
            <div className="flex-1/3 ml-12">
                <Component />
            </div>
        </div>

        
    );
}