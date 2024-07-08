import { Section } from "..";
import Image from "next/image";

interface IFormationsSection {
	section_index: any,
}

export const FormationsSection = (P: IFormationsSection) => {
	return (
		<Section index={P.section_index} label="Formations">
			<div className="relative w-full h-full overflow-y-auto overflow-hidden no-scrollbar flex flex-col perspective-[2px]">

				<div className="flex-none h-full w-full bg-JR parallax-[-1px+1.5] bg-cover bg-center brightness-50 -z-10"/>
				<div className="flex-none absolute left-[20%] h-full w-fit p-10 bg-blue-secondary flex items-center parallax-[0.75px+0.5] z-10">
					<h1 className="text-white">2020 - 2022</h1>
					<p>Mon premier contact danc le monde de l'informatique à eu liau au lycée. Durant mes années de 1ère et de terminale j'ai suivit les cours de la spécialité Numérique et Sciences Informatiques, où j'ai pu apprendre les bases de l'algorithmie.</p>
				</div>
				<Image src="/img/Logo_Jean-Rostand-Roubaix.png" width={300} height={300} alt="logo Lycée Jean Rostand" className="absolute h-fit"/>
				<div className="h-1/2 flex-none bg-blue-primary"/>
				<div className="flex-none h-full w-full bg-IUT parallax-[-1px+1.5] bg-cover bg-center brightness-50 -z-10">
					
				</div>


				{/*(<div className="absolute h-full w-fit bg-blue-secondary">
					<h1 className="text-white">2020 - 2022</h1>
					<p></p>
				</div>
				<Image src="/img/Logo_Jean-Rostand-Roubaix.png" width={300} height={300} alt="logo Lycée Jean Rostand" className="absolute h-fit"/>
				<div className="absolute h-full w-fit bg-blue-secondary">
					<h1 className="text-white">2022 - aujourd'hui</h1>
					<p></p>
				</div>
				<Image src="/img/iutLille.png" width={600} height={600} alt="logo IUT de Lille" className="absolute" />)*/}
			</div>

		</Section>
	);
}