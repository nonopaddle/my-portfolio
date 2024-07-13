'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuButton } from "./menu-button";

interface HeaderType {
	section_list?: any[],
	selected: string,
	select: Function,
}
export const Navbar = ({ section_list, selected, select }: HeaderType) => {
	const [collapse, setCollapse] = useState(true);
	return (
		<>
			<nav className={'h-full w-fit absolute transition-all duration-300 pl-5 pr-5 pt-20 flex-none flex flex-col z-20 bg-blue-primary/90 backdrop-blur ' + (collapse && '-translate-x-1/4 opacity-0 invisible')}>
				<ul className={"flex flex-col justify-center space-y-3 relative"}>
						{section_list?.map((section: any, index: number) => (
							<li key={section.label} className="group px-3 z-10 selection:bg-white selection:text-blue-primary">
								<button onClick={() => {select(index); setCollapse(true)}} className={`relative uppercase text-white py-2 cursor-pointer transition-all duration-300
								after:h-0.5 after:absolute after:block after:bg-selection after:transition-all
								group-hover:after:w-full group-hover:after:left-0 ` + (`${index}` === selected ? 'after:w-full after:left-0 ' : 'after:w-0 after:left-1/2 ') + (collapse && '-translate-x-20')}>
									{section.label}
								</button>
							</li>
						))}
					</ul>
			</nav>
			<MenuButton collapseState={[collapse, setCollapse]} />
			</>
	);
}