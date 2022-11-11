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
                <img src={logo}></img>
            </div>
            <ul>
                {links.map((el, i) => 
                <li key={i}>{el}</li>)}
            </ul>
        </nav>
    )
}