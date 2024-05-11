import SectionHeader from "../components/SectionHeader";
import ExperienceItem from "../components/experience/ExperienceItem";
import ResumeLink from "../components/experience/ResumeLink";

export default function Experience(){

  return (
    <>
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Experience">
        <SectionHeader text={"Experience"} />
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <ExperienceItem listChips={["JavaScript", "C#"]} yearObject={{ariaLabel:"2024 to Present", text:"2024 - Present"}} 
              headerObject={{job:"Platform Engineer", company:"Willowtree"}} body={
                "Integrate into preexisting cross functional teams to deliver on production goals and fix issues in large scale applications."
              } link={"https://www.willowtreeapps.com/"} />
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={["Typescript", "JavaScript", "Nodejs", "Pixijs", "C#", "Unity3D"]} yearObject={{ariaLabel:"2024 to Present", text:"2024 - Present"}} 
              headerObject={{job:"Lead Engineer", company:"Filament Games"}} body={
                "During my time at Filament Games, I orchestrated the development and deployment of web applications utilizing Node.js, JavaScript, TypeScript, React, and MySQL."
              } link={"https://www.filamentgames.com/"}/>
            </li>
              
            
          </ol>
          <div className="mt-12">
            <ResumeLink />
          </div>
        </div>
      </section>
    </>
  );
}