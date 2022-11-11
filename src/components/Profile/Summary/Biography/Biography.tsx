import "./Biography.scss";
import Smile from "@/assets/profile/smile.svg";
import Arrow from "@/assets/icons/arrow.svg";


export default function Biography() {
    return (
        <div className="biography">
            <p>
                Hey there!&nbsp;<img src={Smile} className="icon"/>&nbsp;
                I’m a french <u>full stack developer</u> based in Hamburg, Germany.<br/>
                I focus on delivering <b>clean</b> and <i>highly</i> <b>maintenable</b> digital products.
            </p>
            <p><a href="#skills-section"><button className="main">tell me more <img src={Arrow}></img></button></a></p>
        </div>
    );
}