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
            <ProjectItem text={"This is going to describe everything about my project."} title={"thinkFlash"} link={"https://thinkflash-0iex.onrender.com/"}
            image={{src:"images/ThinkFlashTransparent.png", alt:"Train your brain with AI built flash cards."}}/>
          </li>
          <li className="mb-12">
            <ProjectItem text={"This is going to describe everything about my project."} title={"A Night Most Fowl"} link={"https://www.filamentgames.com/"}
            image={{src:"images/ThinkFlashTransparent.png", alt:"Train your brain with AI built flash cards."}}/>
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