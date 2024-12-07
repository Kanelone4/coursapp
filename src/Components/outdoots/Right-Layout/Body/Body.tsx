import Component from "../Left-layout/Component";
import RightLayout from "../RightLayout";

export default function Body() {
    return (
        <div className="mx-40 flex">
            <div className="flex-2/3">
                <RightLayout />
            </div>
            <hr className="rotate-90 w-16 ml-12"/>
            <div className="flex-1/3 ml-12">
                <Component />
            </div>

        </div>
    );
}