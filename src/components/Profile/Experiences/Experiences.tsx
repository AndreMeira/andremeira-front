import Portrait from "@/assets/profile/portrait-beach.png";
import Container from "@/components/Layout/Container";
import TwoPanels from "@/components/Layout/TwoPanels";
import Items from "./Items/Items";
import "./Experiences.scss";
import Watermark from "@/components/Base/Watermark";


export default function Experiences() {
    return (
        <section className="experiences-container" id="experiences-section">
            <div className="portrait">
                <img className="profile-portrait" src={Portrait}></img>
            </div>
            <div className="experiences-details-container">
                <Container>
                    <TwoPanels classes={["experiences"]}>
                        <Watermark>
                            <>
                                12+<br />
                                YEARS<br />
                                EXP<br />
                            </>
                        </Watermark>
                        <Items></Items>
                    </TwoPanels>
                </Container>
                
            </div>
        </section>
    );
}