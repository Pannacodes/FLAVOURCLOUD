import React from 'react'


function AboutUs() {
  return (
    <div className="about-page">
      <h1>About FlavourCloud</h1>

      <section>
        <h2>Our Project</h2>

        <p>
          FlavourCloud is a recipe management application built with React.
          It allows users to explore recipes, view detailed recipe
          information, and manage their favorite recipes.
        </p>

        <p>
          This project was created as part of our React mini-project at
          Ironhack, where we are practicing React, components, props, state,
          and React Router.
        </p>
      </section>

      <section>
        <h2>Meet the Team</h2>

        <div className="team-member">
          <h3>Jinal</h3>

          <a
            href="https://github.com/Jins-00757"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="YOUR_TEAMMATE_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="team-member">
          <h3>Anna</h3>

          <a
            href="https://github.com/Pannacodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;