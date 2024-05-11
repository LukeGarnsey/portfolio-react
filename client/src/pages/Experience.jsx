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
              <ExperienceItem listChips={["Kotlin",  "Android Studio", "Java","Bash", "Objective-C", "X-Code", "SQL"]} yearObject={{ariaLabel:"2021 to 2023", text:"2021 - 2023"}} 
              headerObject={{job:"Platform Engineer", company:"Willowtree"}} body={
                "Integrate into preexisting cross functional teams to deliver on production goals and fix issues in large scale applications."
              } link={"https://www.willowtreeapps.com/"} />
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={["Typescript", "JavaScript", "Node.js", "React", "Pixi.js", "C#", "Unity3D", "SQL"]} yearObject={{ariaLabel:"2019 to 2021", text:"2019 - 2021"}} 
              headerObject={{job:"Lead Engineer", company:"Filament Games"}} body={
                "During my time at Filament Games, I orchestrated the development and deployment of web applications utilizing Node.js, JavaScript, TypeScript, React, and MySQL."
              } link={"https://www.filamentgames.com/"}/>
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={["JavaScript",".Net", "C#", "Unity3D", "CouchDB"]} yearObject={{ariaLabel:"2018 to 2019", text:"2018 - 2019"}} 
              headerObject={{job:"VR Engineer", company:"Immersive Touch"}} body={
                "Developed surgery preparation software that interfaced with virtual reality (VR) environments. My role involved designing and implementing innovative solutions to enhance the immersive experience for users, particularly in the context of surgical simulations."
              } link={"https://www.immersivetouch.com/"}/>
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={[ "Android Studio", "Java", "Objective-C", "X-Code", "JavaScript", "C#", "Unity3D", "Vuforia", "ARKit"]} yearObject={{ariaLabel:"2016 to 2018", text:"2016 - 2018"}} 
              headerObject={{job:"Software Developer", company:"YETi CGI"}} body={
                "My responsibilities revolved around augmented reality (AR) development and creating software tailored for custom hardware applications. This entailed designing and implementing AR experiences, as well as developing software solutions optimized for integration with various hardware devices and systems that clients were building for end users. Additionally, I collaborated closely with cross-functional teams to ensure seamless integration of software and hardware components, contributing to the overall success of projects."
              } link={"https://yeticgi.com/"}/>
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