import classNames from "classnames";
import "./TwoPanels.scss";

interface TwoPanelsProps {
    children: [JSX.Element, JSX.Element];
    classes?: string[];
}

export default function TwoPanels({children, classes = []}:TwoPanelsProps): JSX.Element {
    return (
        <div className={classNames("two-panels", ...classes)}>
            <div className="first-panel">{children[0]}</div>
            <div className="second-panel">{children[1]}</div>
        </div>
    );
}