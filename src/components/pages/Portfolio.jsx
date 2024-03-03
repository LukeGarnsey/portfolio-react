import ProjectCard from "../UI/ProjectCard";
import questionsImage from '../../images/work/questions.png';
export default function Portfolio(){
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row bg-app-yellow">
          <div className="col-sm">
            <ProjectCard image={questionsImage}></ProjectCard>
          </div>
          <div className="col-sm">
            One of two
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            One of two
          </div>
          <div className="col-sm">
            One of two
          </div>
        </div>

        <div className="row">
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