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
	const collapseState = useState(true);
	const collapse = collapseState[0];
	return (
		<>
			<nav className={'h-full w-fit absolute transition-all duration-300 pl-5 pr-5 pt-20 flex-none flex flex-col z-20 bg-blue-primary bg-opacity-90 backdrop-blur ' + (collapse && '-translate-x-1/4 opacity-0 invisible')}>
				{/*(<button onClick={() => setCollapse(!collapse)} className="w-fit flex mt-2 items-center relative bottom-1 -right-1/2">
					<FontAwesomeIcon icon={collapse ? faBars : faXmark} className="text-white bg-blue-primary p-3 text-xl bg-opacity-90 backdrop-blur" />
				</button>)*/}
				<ul className={"flex flex-col justify-center space-y-3 relative"}>
						{section_list?.map((section: any, index: number) => (
							<li key={section.label} className="group px-3 z-10">
								<button onClick={() => select(index)} className={`relative uppercase text-white py-2 cursor-pointer transition-all duration-300
								after:h-0.5 after:absolute after:block after:bg-selection after:transition-all
								group-hover:after:w-full group-hover:after:left-0 ` + (`${index}` === selected ? 'after:w-full after:left-0 ' : 'after:w-0 after:left-1/2 ') + (collapse && '-translate-x-20')}>
									{section.label}
								</button>
							</li>
						))}
					</ul>
			</nav>
			<MenuButton collapseState={collapseState} />
			</>
	);
}