import { Link } from "react-router-dom";
import "./Navigation.scss";

interface NavigationNaiveProps {
    logo: string;
    links: Array<JSX.Element>
}

/**
 * The naive navigation component
 */
export default function NavigationNaive(
    {logo, links}: NavigationNaiveProps
): JSX.Element {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">
                <img src={logo}></img>
                </Link>
                
            </div>
            <ul>
                {links.map((el, i) => 
                <li key={i}>{el}</li>)}
            </ul>
        </nav>
    )
}