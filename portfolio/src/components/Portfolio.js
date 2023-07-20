import React from "react";
import Project from "./Project";
import RecipesNow from "../images/RecipesNow.png";
import TextEditor from "../images/TextEditor.png";
import Forecast from "../images/Forecast.png";
import WorkDay from "../images/WorkDay.png";
import Notes from "../images/Notes.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
              {
                title: "Recipes Now!",
                imgSrc: RecipesNow,
                deployedLink:
                    "https://avenp.github.io/recipe-search-app/",
                githubLink:
                    "https://github.com/AvenP/recipe-search-app",
              },
              {
                title: "Jate Text Editor",
                imgSrc: TextEditor,
                deployedLink:
                    "https://text-changer-ap-01b7083735a3.herokuapp.com/",
                githubLink:
                    "https://github.com/AvenP/text-changer",
              },
              {
                title: "5 Day Forecast",
                imgSrc: Forecast,
                deployedLink:
                    "https://avenp.github.io/5-day-forecast/",
                githubLink:
                    "https://github.com/AvenP/5-day-forecast",
              },
              {
                title: "Workday Schedule",
                imgSrc: WorkDay,
                deployedLink:
                    "https://avenp.github.io/Workday-Scheduler/",
                githubLink:
                    "https://github.com/AvenP/Workday-Scheduler",
              },
              {
                title: "Note Creator",
                imgSrc: Notes,
                deployedLink:
                    "https://notes-4-you.herokuapp.com/",
                githubLink:
                    "https://github.com/AvenP/note-creator",
              },
            ].map((project, index) => (
                <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                {/* <h2>{project.title}</h2> */}
                <Project
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                  />
                   </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;