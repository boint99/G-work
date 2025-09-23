import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
}
