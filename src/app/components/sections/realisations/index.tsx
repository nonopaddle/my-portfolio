import { Section } from "..";

interface IRealisationsSection {
    section_index: any
}

export const RealisationsSection = (P: IRealisationsSection) => {
    return (
        <Section index={P.section_index} label="Réalisations">

        </Section>
    );
}