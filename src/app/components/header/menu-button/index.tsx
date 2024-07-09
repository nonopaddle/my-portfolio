'use client'

import { useEffect, useState } from "react";

interface IMenuButton {
	collapseState: Array<any>,
}

export const MenuButton = (P: IMenuButton) => {
	const [collapse, setCollapse] = P.collapseState;
	return (
		<button id="button" onClick={() => setCollapse(!collapse)} className="ml-2 mt-2 w-fit flex items-center absolute z-20">
			<svg width={50} height={50} xmlns="http://www.w3.org/2000/svg">
				<g color="#0d1b2a" strokeWidth="1.5" strokeLinecap="round" stroke="currentcolor">
					<line x1="10" y1="15" x2="40" y2="15" >
						{!collapse ?
							<>
								<animate dur="0.3s" attributeName="x1" from="10" to="15" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="40" to="35" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="y2" from="15" to="35" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="currentColor" to="white" begin="button.click" fill="freeze" />
							</>
							:
							<>
								<animate dur="0.3s" attributeName="x1" from="15" to="10" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="35" to="40" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="y2" from="35" to="15" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="white" to="currentColor" begin="button.click" fill="freeze"/>
							</>
						}
					</line>
					<line x1="10" y1="25" x2="40" y2="25">
						{!collapse ?
							<>
								<animate dur="0.3s" attributeName="x1" from="10" to="25" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="40" to="25" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="currentColor" to="white" begin="button.click" fill="freeze"/>
							</>
							:
							<>
								<animate dur="0.3s" attributeName="x1" from="25" to="10" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="25" to="40" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="white" to="currentColor" begin="button.click" fill="freeze"/>
							</>
						}
					</line>

					<line x1="10" y1="35" x2="40" y2="35">
						{!collapse ?
							<>
								<animate dur="0.3s" attributeName="x1" from="10" to="15" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="40" to="35" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="y2" from="35" to="15" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="currentColor" to="white" begin="button.click" fill="freeze"/>
							</>
							:
							<>
								<animate dur="0.3s" attributeName="x1" from="15" to="10" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="x2" from="35" to="40" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="y2" from="15" to="35" begin="button.click" fill="freeze"/>
								<animate dur="0.3s" attributeName="stroke" from="white" to="currentColor" begin="button.click" fill="freeze"/>
							</>
						}
					</line>
				</g>

			</svg>
		</button>
	)
};