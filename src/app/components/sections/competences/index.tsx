import { Section } from "..";

interface ICompetencesSection {
	section_index: any
}

export const CompetencesSection = (P: ICompetencesSection) => {
	return (
		<Section index={P.section_index} label="Compétences">

		</Section>
	);
}