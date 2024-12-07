export default function SeachBar() {
    return (
        <div className="relative">
            <input type="text" placeholder="Search..." style={{width: '350px'}} className="border-2 text-base p-3 mt-2" />
            <i className="bx bx-search  text-black absolute " style={{left: '320px', marginTop: '35px'}}></i>
        </div>
    );
}