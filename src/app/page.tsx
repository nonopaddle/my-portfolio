'use client'
import {useEffect, useRef, useState} from "react";
import { Header } from "./components/header";
import { HomeSection } from "./components/sections/home";
import { FormationsSection } from "./components/sections/formations";
import { CompetencesSection } from "./components/sections/competences";
import { RealisationsSection } from "./components/sections/realisations";
import { ContactsSection } from "./components/sections/contacts";

export default function Home() {
  const [sections, setSections] = useState<any[]>();
  const [id, setId] = useState<string>('0');
  const [nextID, setNextID] = useState<string>('0');
  const selected = useRef(null);
  const sectionsContainer = useRef(null);

  useEffect(() => {
    setSections([
      {label: 'Noé Delin' , selected: false, element: <HomeSection section_index={0} key={0}/>},
      {label: 'Formations' , selected: false, element: <FormationsSection section_index={1} key={1}/>},
      {label: 'Compétences' , selected: false, element: <CompetencesSection section_index={2} key={2}/>},
      {label: 'Réalisations' , selected: false, element: <RealisationsSection section_index={3} key={3}/>},
      {label: 'Contacts' , selected: false, element: <ContactsSection section_index={4} key={4}/>}
    ]);
  }, []);

  const handleScroll = () => {
    if (sections && sectionsContainer.current) {
      // @ts-ignore
      const y_pos = sectionsContainer.current.scrollLeft / (window.innerWidth * sections.length);
      sections?.forEach((_: any, index: number) => {
        const min = Math.trunc((index - 0.5) / sections.length * 100) / 100;
        const max = Math.trunc((index + 0.5) / sections.length * 100) / 100;
        if (y_pos >= min && y_pos < max && id != `${index}`) setId(`${index}`);
      });
    }
    //console.log(id);
  };

  const select = (id: number) => {
    setNextID(`${id}`);
  };
  
  useEffect(() => {
    console.log(id, selected.current);
    // @ts-ignore
    selected.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [nextID]);

  return (
    <main className="w-full h-full sm:flex sm:flex-col">
      <Header section_list={sections} selected={id} select={select}/>
      <div ref={sectionsContainer} className="w-full h-full grow flex overflow-x-auto no-scrollbar snap-x snap-mandatory" onScroll={handleScroll}>
        {sections?.map((section, index) => (
          <div ref={nextID === `${index}` ? selected : null} key={section.label} className="h-full w-full flex-none snap-center  overflow-y-auto">
            {section.element}
          </div>
        ))}
      </div>
    </main>
  );
}