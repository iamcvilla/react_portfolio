import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Calvin Villanueva</h2>
          <ul>
            <li>
              Currently a Helpdesk Technician. Soon to become Full Stack Web Developer
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/calvilla/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://docs.google.com/document/d/1HMyIIh6yt4MXMu4RqspdNXkHSDBCF4uP9kzh_GgUTbE/edit?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
          ....
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
