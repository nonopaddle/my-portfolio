import { Section } from "..";

interface IContactsSection {
    section_index: any
}

export const ContactsSection = (P: IContactsSection) => {
    return (
        <Section index={P.section_index} label="Contacts">

        </Section>
    );
}