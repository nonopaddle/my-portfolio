interface ISection {
	children?: any,
	index: number,
	label: string
};

export const Section = (P: ISection) => {
	return (
		<section className="h-full w-full">
			{P.children}
		</section>
	);
}

