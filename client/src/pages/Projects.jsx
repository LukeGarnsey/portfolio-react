import SectionHeader from "../components/SectionHeader";
import ArchiveLink from "../components/projects/ArchiveLink";
import ProjectItem from "../components/projects/ProjectItem";

export default function Projects(){

  return (<>
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <SectionHeader text={"Projects"} />
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <ProjectItem text={"thinkFlash is an AI powered app. The user can have AI generate a deck of flash cards on any topic and quiz themselves using their newly built flash cards."} title={"thinkFlash"} link={"https://thinkflash-0iex.onrender.com/"}
            image={{src:"images/thinkFlash.png", alt:"Think Flash web app homepage"}}/>
          </li>
          <li className="mb-12">
            <ProjectItem text={"Digital Handwriting is a literacy-based learning experience that allows players to experience the sensory feel of handwriting through touchscreen controls. The game focuses on teaching the correct motion and order of strokes to create characters, while also preparing the user to distinguish between uppercase and lowercase."} title={"Digital Handwriting"} link={"https://www.filamentgames.com/project/digital-handwriting/"}
            image={{src:"images/dha.png", alt:"Digital Handwriting action page"}}/>
          </li>
          <li className="mb-12">
            <ProjectItem text={"This is going to describe everything about my project."} title={"A Night Most Fowl"} link={"https://www.filamentgames.com/"}
            image={{src:"images/ThinkFlashTransparent.png", alt:"Train your brain with AI built flash cards."}}/>
          </li>
        </ul>
        <div className="mt-12">
          <ArchiveLink />
        </div>
      </div>
    </section>
  </>);
}