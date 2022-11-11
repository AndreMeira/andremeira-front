import Watermark from "@/components/Base/Watermark";
import Container from "@/components/Layout/Container";
import TwoPanels from "@/components/Layout/TwoPanels";
import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Hand from "@/assets/icons/wave-hand.svg";
import "./ContactMe.scss";

export default function() {
    return (
        <div className="coming-soon-container">
            <Container>
                <TwoPanels classes={["coming-soon"]}>
                    <Watermark>
                        <>
                            Contact<br />
                            Me.
                        </>
                    </Watermark>
                    <div className="text">
                    <p>
                        I'd like to hear from you. &nbsp;<img src={Hand} className="icon"/>&nbsp;
                        You can contact me on &nbsp; 
                        <a target="_blank" href="https://www.linkedin.com/in/andr%C3%A9-meira-989827164/"> 
                        <u>linkedin</u></a>.
                        Don't forget to have a look at my 
                        <a target="_blank" href="https://github.com/AndreMeira"> <u>github</u> <img className="icon" src={Github}></img></a><br />
                    </p>
                    </div>
                </TwoPanels>
            </Container>
        </div>
    );
}