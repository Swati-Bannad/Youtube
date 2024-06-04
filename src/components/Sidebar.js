import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    
    return !isMenuOpen ? null : (
        <div className="p-3 w-52" >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Shorts</Link></li>
                <li><Link to="/">Sunscriptions</Link></li>
            </ul>
            <h1 className="font-bold mt-3">You</h1>
            <ul>
                <li><Link to="/">Your Channel</Link></li>
                <li><Link to="/">History</Link></li>
                <li><Link to="/">Play List</Link></li>
                
            </ul>
            <h1 className="font-bold mt-3">Sunscriptions</h1>
            <ul>
                <li><Link to="/">Names</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
