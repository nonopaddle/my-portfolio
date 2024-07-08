import { Section } from "..";

interface IHomeSection {
    section_index: any
}

export const HomeSection = (P: IHomeSection) => {
    return (
        <Section index={P.section_index} label="Noé Delin">

        </Section>
    );
}