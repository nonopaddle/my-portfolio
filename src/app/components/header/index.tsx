'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface HeaderType {
	section_list?: any[],
	selected: string,
	select: Function,
}
export const Header = ({ section_list, selected, select }: HeaderType) => {
	const [collapse, setCollapse] = useState(true);
	return (
		<nav className={'h-fit w-full absolute sm:static sm:p-0 flex-none'}>
			<div className="bg-prussian-blue">
				<button onClick={() => setCollapse(!collapse)} className="w-fit flex py-3 items-center sm:hidden ">
					<FontAwesomeIcon icon={collapse ? faBars : faXmark} className="text-white px-3 text-xl" />
				</button>
			</div>
			<div className="sm:!block" style={{ display: 'grid', height: 'fit-content', gridTemplateRows: collapse ? '0' : '100%', transition: 'all 0.2s', overflowY: 'hidden' }}>
				<ul className={"sm:py-2 flex flex-col sm:flex-row justify-center bg-blue-primary relative"}>
					{section_list?.map((section: any, index: number) => (
						<li key={section.label} className="group px-3 z-10">
							<button onClick={() => select(index)} className={`relative uppercase text-white py-2 cursor-pointer
							after:h-0.5 after:absolute after:block after:bg-selection after:transition-all
							group-hover:after:w-full group-hover:after:left-0 ` + (`${index}` === selected ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2')}>
								{section.label}
							</button>
						</li>
					))}
					<li className="absolute bg-blue-secondary flex-none h-full w-32 top-0"></li>
				</ul>
			</div>

		</nav>
	);
}