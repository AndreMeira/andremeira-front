import classNames from "classnames";
import './Container.scss';

interface ContainerProps {
    fluid?:boolean;
    children?: JSX.Element|JSX.Element[]
}


export default function Container(
    {fluid, children}: ContainerProps
): JSX.Element {
    const fluidClass = fluid ? 'fluid' : ''; 
    const classes = classNames('container', fluidClass);
    return<div className={classes}>{children}</div>;
}