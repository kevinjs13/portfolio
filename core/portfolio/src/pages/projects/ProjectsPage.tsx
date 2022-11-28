import React from "react";
import Card from "../../components/Card";
import PROJECTS_DATA from "../../data/projects.data";
import * as Styled from "./ProjectsPage.styled";
import { v4 as uuidv4 } from "uuid";

const ProjectsPage: React.FC = () => {
  return (
    <Styled.ProjectsContainer>
      {PROJECTS_DATA.map((project) => (
        <Card
          key={uuidv4()}
          imageUrl={project.imageUrl}
          imageAltText={project.imageAltText}
          techStack={project.techStack}
          title={project.title}
          description={project.description}
          urls={project.urls}
        />
      ))}
    </Styled.ProjectsContainer>
  );
};
export default ProjectsPage;
