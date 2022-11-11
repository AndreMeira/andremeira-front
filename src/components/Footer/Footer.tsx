import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <p>
                <a href="https://github.com/AndreMeira" target="_blank"><img src={Github}></img></a>
                <a href="https://www.linkedin.com/in/andr%C3%A9-meira-989827164/" target="_blank"><img src={LinkedIn}></img></a>
            </p>
            <p>
                André Meira, Hamburg.
            </p>
        </div>
    )
}