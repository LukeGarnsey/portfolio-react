import ProjectCard from "../UI/ProjectCard";
import { passwordGenerator, questions, weatherDashboard, workDay } from "../../images/work";

export default function Portfolio(){
  return (
    <div>
      <h1 className="py-1">Portfolio</h1>
      <div className="container">
        <div className="row g-2 pb-4 justify-content-sm-center">
          <div className="col-sm">
            <ProjectCard image={questions}></ProjectCard>
          </div>
          <div className="col-sm">
          <ProjectCard image={passwordGenerator}></ProjectCard>
          </div>
        </div>

        <div className="row g-2 pb-4">
          <div className="col-sm">
            <ProjectCard image={weatherDashboard}></ProjectCard>
          </div>
          <div className="col-sm">
          <ProjectCard image={workDay}></ProjectCard>
          </div>
        </div>

        <div className="row g-2 pb-4">
          <div className="col-sm">
            One of two
          </div>
          <div className="col-sm">
            One of two
          </div>
        </div>

      </div>
    </div>
  );
}