import Summary from "@/components/Profile/Summary/SummaryNaive";
import SkillNaive from "@/components/Profile/Skills/SkillNaive";
import Experiences from "@/components/Profile/Experiences/Experiences";

export default function Profile() {
    return (
        <>
            <Summary></Summary>
            <SkillNaive></SkillNaive>
            <Experiences></Experiences>
        </>
    );
}