export default function SeachBar() {
    return (
        <div style={{position: 'relative', top: '-300px', marginBottom:'-300px'}} className="relative">
            <input type="text" placeholder="Search..." style={{width: '350px'}} className="border-2 text-base p-3 mt-5" />
            <i className="bx bx-search  text-black absolute mt-9" style={{left: '320px'}}></i>
        </div>
    );
}