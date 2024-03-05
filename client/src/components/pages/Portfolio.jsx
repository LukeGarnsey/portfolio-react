import ProjectCard from "../UI/ProjectCard";
import { passwordApp, weatherApp, questionsApp, workDayApp } from "../../assets/PortfolioObjects";
export default function Portfolio(){
  return (
    <div>
      <h3 className="">Portfolio</h3>
      <div className="container">
        <div className="row g-4 pb-4 justify-content-left">
          <div style={styles.col}  className={columnClasses}>
            <ProjectCard app={passwordApp}></ProjectCard>
          </div>
          <div style={styles.col}  className={columnClasses}>
          <ProjectCard app={weatherApp}></ProjectCard>
          </div>
        </div>

        <div className="row g-2 pb-4">
          <div style={styles.col}  className={columnClasses}>
            <ProjectCard app={questionsApp}></ProjectCard>
          </div>
          <div style={styles.col}  className={columnClasses}>
          <ProjectCard app={workDayApp}></ProjectCard>
          </div>
        </div>


      </div>
    </div>
  );
}
const columnClasses = "col-md-6 col-sm";
const styles = {
  col : {
    width:'400px',
  }
}