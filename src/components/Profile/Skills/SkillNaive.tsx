import Container from "../../Layout/Container";
import TwoPanels from "../../Layout/TwoPanels";
import Description from "./Description/Description";
import { Items } from "./Items/Items";
import "./Skills.scss"

export default function SkillNaive() {
    return (
        <section className="skills-container" id="skills-section">
            <Container>
                <TwoPanels classes={['skills']}>
                    <div className="items-container"><Items></Items></div>
                    <div className="description-container"><Description></Description></div>
                </TwoPanels>
            </Container>
        </section>
    );
}