import { Section } from "..";
import Image from "next/image";

interface IFormationsSection {
	section_index: any,
}

export const FormationsSection = (P: IFormationsSection) => {
	return (
		<Section index={P.section_index} label="Formations">
			<div className="relative w-full h-full overflow-y-auto overflow-hidden no-scrollbar flex flex-col perspective-[2px] selection:bg-white selection:text-blue-primary">

				<div className="flex-none h-full w-full bg-JR parallax-[-1px+1.5] bg-cover bg-center brightness-[.33] -z-10"/>
				<div className="flex-none absolute top-[30%] left-[30%] w-[40%] h-fit flex flex-col parallax-[1px+1] z-10
					sm:left-1/3 sm:w-1/3">
					<h1 className="text-white h-fit w-2/3 text-2xl
					sm:text-5xl 2xl:text-7xl">Jean Rostand</h1>
					<span className="text-white h-fit w-full text-[0.45rem] sm:text-[0.5rem]
					 2xl:text-lg">2020 - 2022</span>
					<div className="text-white h-fit w-full text-[0.55rem] sm:text-xl mt-10 flex flex-col space-y-10 under
					 2xl:text-4xl">
						<p>
							Mes premiers pas dans le monde de l'informatique se sont fait au lycée Jean Rostand.<br/>
							Durant mes années de 1ère et de Terminale, j'ai suivit les cours de la spécialité <b className="text-xantous">Numérique et Sciences Informatiques</b>.
						</p>
						<p>
							Ces cours m'ont introduit à certaines technologies telles que <b className="text-xantous">HTML</b>, <b className="text-xantous">CSS</b>, <b className="text-xantous">SQL</b>, et <b className="text-xantous">Python</b>, grâce auquel j'ai appris les bases de l'algorithmie.
						</p>
					</div>
					
					
				</div>
				{/*(<Image src="/img/Logo_Jean-Rostand-Roubaix.png" width={300} height={300} alt="logo Lycée Jean Rostand" className="absolute h-fit right-5 top-1/2 -translate-y-1/2"/>)*/}

				<div className="h-1/2 flex-none bg-blue-primary"/>
				
				<div className="flex-none h-full w-full bg-IUT parallax-[-1px+1.5] bg-cover bg-center brightness-[.33] -z-10"/>

				<div className="flex-none absolute top-[180%] left-[30%] w-[40%] h-fit flex flex-col parallax-[1px+1] z-10
					sm:left-1/3 sm:w-1/3">
					<h1 className="text-white h-fit w-2/3 text-2xl
					sm:text-5xl">BUT Informatique</h1>
					<span className="text-white h-fit w-full text-[0.45rem]">2022 - Aujourd'hui</span>
					<p className="text-white h-fit w-full text-[0.55rem] mt-10
						sm:text-xl">
						
					</p>
				</div>
				
			</div>

		</Section>
	);
}