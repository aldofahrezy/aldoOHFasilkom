import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Carnaval of Education, Arts, and Culture</h3>
          <p>A series of events that is coordinated mainly by the Student Council of SMA Pradita Dirgantara, including: PD Competition Series and Konser Langit Benderang.</p>
        </div>
        <div className="project-card">
          <h3>Perhimpunan Humas Siswa</h3>
          <p>Initiated an event organisign body in high school. Experiences: Camcorder operator, Lighting Operator, Gaffer, Visual Jockey, Motion Deisgner, Video Editor, Sound Engineer, etc.</p>
        </div>
        <div className="project-card">
          <h3>Nagasthira Production</h3>
          <p>A body that is responsible for Nagasthira's (PD'04) media production. Find more at </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
