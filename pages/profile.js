import React from "react";
import { skills, experiences, projects, posts } from "../data/profileData";

const Profile = () => {
  return (
    <div>
      <h1>Perfil</h1>

      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.skill}: {skill.percentage}%
          </li>
        ))}
      </ul>

      <h2>Experiencias</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <strong>{experience.title}</strong>: {experience.description} (
            {experience.from} - {experience.to})
          </li>
        ))}
      </ul>

      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </strong>
            : {project.description}
            <br />
            <img src={project.image} alt={project.name} />
          </li>
        ))}
      </ul>

      <h2>Publicaciones</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}</strong>: {post.content}
            <img src={post.imageURL} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
