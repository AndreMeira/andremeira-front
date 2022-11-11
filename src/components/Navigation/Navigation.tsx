import NavigationNaive from "./NavigationNaive";
import AmLogo from "@/assets/logo-am-dev.svg";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

/**
 * Return the navigation links
 * @returns 
 */
export const Links = (location: string): Array<JSX.Element> => {
    /**
     * Yield 'current' if the path is current path
     */
    const current = (link: string) => 
        link === location ? 'current' : ''; 

    return [
        <Link to="/" className={classNames(current('/'), "nav")}>about</Link>,
        <Link to="/blog" className={classNames(current('/blog'), 'nav')}>blog</Link>,
        <Link to="/contact-me" className={current('/contact-me')}>
            <button className="small">contact me</button>
        </Link>
    ]
}

/**
 * The smart navigation element
 */
export default function Navigation() {
    const location = useLocation()
    return <NavigationNaive logo={AmLogo} 
            links={Links(location.pathname)} />
}