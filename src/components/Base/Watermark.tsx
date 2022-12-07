import "./Watermark.scss";

interface WatermarkProps {
    children: JSX.Element|JSX.Element[]
}


export default function Watermark({children}:WatermarkProps) {
    const elements = children instanceof Array 
        ? children : [children];

    return (
        <div className="watermark">
            <h2>{children}</h2>
            <div className='big-circle'></div>
            <div className='small-circle'></div>
        </div>
    );
}