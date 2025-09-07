import { Link } from "react-router-dom";

export default function Navbar(){
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    
    return ()
}