import Watermark from "@/components/Base/Watermark";
import Container from "@/components/Layout/Container";
import TwoPanels from "@/components/Layout/TwoPanels";
import Lord from "@/assets/icons/lord.svg";
import Paper from "@/assets/icons/paper.svg";
import "./Soon.scss";

export default function() {
    return (
        <div className="coming-soon-container">
            <Container>
                <TwoPanels classes={["coming-soon"]}>
                    <Watermark>
                        <>
                            Coming<br />
                            Soon
                        </>
                    </Watermark>
                    <div className="text">
                    <p>
                        Stay tuned.&nbsp;<img src={Lord} className="icon"/>&nbsp;
                        I am launching soon. I am currently  preparing great articles.
                        Something <u>awesome</u> is coming soon. <br/>
                        Be <i>first</i> to know. 
                    </p>
                    </div>
                </TwoPanels>
            </Container>
        </div>
    );
}