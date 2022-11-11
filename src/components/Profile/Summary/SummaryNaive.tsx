import Container from "@/components/Layout/Container";
import TwoPanels from "@/components/Layout/TwoPanels";
import Biography from "./Biography/Biography";
import Identity from "./Identity/Identity";
import "./Summary.scss";

export default function Summary() {
    return (
        <div className="profile-summary-container">
            <Container>
                <TwoPanels classes={['profile', 'summary']}>
                    <div className="identity-container"><Identity></Identity></div>
                    <div className="biography-container"><Biography></Biography></div>
                </TwoPanels>
            </Container>
        </div>
    );
}