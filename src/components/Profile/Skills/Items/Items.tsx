import Python from "@/assets/skills/python.svg";
import Php from "@/assets/skills/php.svg";
import Javascript from "@/assets/skills/javascript.svg";
import VueLogo from "@/assets/skills/vue.svg";
import ReactLogo from "@/assets/skills/react.svg";
import Django from "@/assets/skills/django.svg";
import Laravel from "@/assets/skills/laravel.svg";
import Symfony from "@/assets/skills/symfony.svg";
import Scala from "@/assets/skills/scala.svg";
import Debian from "@/assets/skills/debian.svg";
import Docker from "@/assets/skills/docker.svg";
import Figma from "@/assets/skills/figma.svg";
import "./Items.scss";

export function Items() {
    return (
        <div className="skill-items">
            <ul className="logos">
                <li><img src={Python} alt="python" title="Python"></img></li>
                <li><img src={Php} alt="php" title="php"></img></li>
                <li><img src={Javascript} alt="javascript" title="javascript"></img></li>
                <li><img src={VueLogo} alt="vue" title="vue"></img></li>

                <li><img src={Django} alt="django" title="django"></img></li>
                <li><img src={Laravel} alt="laravel" title="laravel"></img></li>
                <li><img src={Symfony} alt="symfony" title="symfony"></img></li>
                <li><img src={ReactLogo} alt="react" title="react"></img></li>

                <li><img src={Scala} alt="scala" title="scala"></img></li>
                <li><img src={Debian} alt="debian" title="debian"></img></li>
                <li><img src={Docker} alt="docker" title="docker"></img></li>
                <li><img src={Figma} alt="figma" title="figma"></img></li>
            </ul>
        </div>
    );
}