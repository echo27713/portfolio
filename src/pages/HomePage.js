import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Fetch profile data from the public folder
  const profileData = {
    displayName: "Eunjung Cho",
    profession: "UX Designer",
    location: "San Francisco Bay Area",
    about: `Currently, I am looking for a new opportunity. With years of experience at startups and big tech companies as a UX designer and user researcher, I specialize in interaction design, user research, and prototyping for both enterprise and consumer products.

Over the past year, I have expanded my skills in JavaScript and React, building web applications that blend user experience principles with technical implementation. I enjoy bringing ideas to life through both design and code.

Recently, I have developed a series of self-initiated projects, including a [weather visualization dashboard](https://college-weather-dashboard-app.vercel.app/) and a [location-based photo weather app](https://echo-flickr-weather-app.vercel.app/). I also built this portfolio site using React.\n\n `,
    skills: `Interaction design, Information Architecture, Flows&wireframes, Low-fidelity prototyping & design iteration with RITE method, Figma, HTML/CSS/Javascript/React, Swift, SQL, Field study, Usability testing, In-depth interviews, Web log analysis.`,
  };

  const projects = [
    {
      id: "6ggjU98JEQC15PStx4rh",
      year: "2023",
      title: "Fleet Software for Electric Vehicle Charging and Optimization",
      description:
        "Designed dashboard for real-time EV charging activities in bus depot.",
      thumbnail: "/projects/content/writing/6ggjU98JEQC15PStx4rh-0.png",
    },
    {
      id: "nd5lgxnHXb0jy3C5uuQL",
      year: "2023",
      title: "ChargePoint Enterprise Software Onboarding Design",
      description:
        "Analyzed pain points in activating new charging stations in ChargePoint software and designed a scalable onboarding experience to support business growth.",
      thumbnail: "/projects/content/writing/nd5lgxnHXb0jy3C5uuQL-4.png",
    },
    {
      id: "1",
      year: "2021",
      title: "Flutter/Dart DevTools",
      description:
        "Conducted qualitative user research on Flutter/Dart DevTools to improve Flutter developer’s performance debugging experience.",
    },
    {
      id: "2",
      year: "2021",
      title: "Knowre Math District Admin Dashboard",
      description:
        "Designed the dashboard for school district administrators and math curriculum coordinators. The objective of this project was showing high level usage data across schools within a district. So district admin can monitor whether their purchased software is in good use and impact on their students math learning.",
    },
    {
      id: "3",
      year: "2020",
      title: "Easy Way to Enroll Students at Knowre Math",
      description:
        "In addition to social login, other convenient ways for teachers to manage student accounts easily were added — creating student accounts on teacher dashboard, bulk upload of student accounts — and increased teacher's productivity.",
    },
    {
      id: "FnukshUUKAyg6HBYVMrv",
      year: "2019",
      title: "Knowre Math Student Progress Data Visualization",
      description:
        "Created visual tools to help teachers understand student progress.",
      thumbnail: "/projects/content/writing/FnukshUUKAyg6HBYVMrv-0.png",
    },
    {
      id: "WUIPuO2cRtNhrJmCwnYo",
      year: "2019",
      title: "Knowre Math Teacher Dashboard Redesign",
      description:
        "Redesigned the Knowre Math platform for improved user engagement.",
      thumbnail: "/projects/content/writing/WUIPuO2cRtNhrJmCwnYo-8.png",
    },
    {
      id: "nCnPrBmHltbeUhMlHJRs",
      year: "2017",
      title: "iOS Development",
      description: "Designed, developed and launched the shopping list app.",
      thumbnail: "/projects/content/writing/nCnPrBmHltbeUhMlHJRs-0.png",
    },
  ];

  const workExperience = [
    {
      startYear: "2022",
      endYear: "2024",
      jobTitle: "UX Designer",
      company: "ChargePoint",
      description:
        "Designed enterprise software for electric vehicle charging network and fleet operations.",
    },

    {
      startYear: "2022",
      endYear: "2022",
      jobTitle: "UX Researcher",
      company: "Google via ProUnlimited",
      description:
        "Qualitative user research on Dart DevTools to improve developer’s debugging experience",
    },
    {
      startYear: "2018",
      endYear: "2021",
      jobTitle: "UX Designer & Product Manager",
      company: "Knowre",
      description: "Redesigned Knowre Math teacher dashboard.",
    },
    {
      startYear: "2017",
      endYear: "2018",
      jobTitle: "Solo UX Designer & iOS Developer",
      company: "Personal Projects",
      description:
        "Learned how to code. Designed, developed, and launched 2 iOS apps.",
    },

    {
      startYear: "2012",
      endYear: "2016",
      jobTitle: "Mom, School volunteer, Art docent",
      company: "School",
      // description: "Spent quality time with my two kids.",
    },
    {
      startYear: "2008",
      endYear: "2011",
      jobTitle: "UX Researcher, Product Manager",
      company: "Naver",
      description: "Front Page and its admin system, Comment component",
    },
    {
      startYear: "2006",
      endYear: "2007",
      jobTitle: "UX Designer, UX Manager",
      company: "Olaworks",
      description:
        "Established user research integrated design process for early stage startup, Interaction designed a photo app for desktop",
    },
    {
      startYear: "2003",
      endYear: "2006",
      jobTitle: "Interaction Designer",
      company: "Yahoo! Korea",
      description:
        "Interaction designed Y! Gugi local search and Y! News, Worked on Y! interaction design pattern library",
    },
  ];

  const education = [
    {
      startYear: "2000",
      endYear: "2002",
      degree: "Master of Graphic Design",
      school: "North Carolina State University",
      thumbnails: [
        "/projects/ncstate-1.jpg",
        "/projects/ncstate-2.jpg",
        "/projects/ncstate-3.jpg",
      ],
    },
    {
      startYear: "1996",
      endYear: "2000",
      degree: "Bachelor of Science in Industrial Design",
      school: "Korea Advanced Institute of Science and Technology",
      thumbnails: [
        "/projects/kaist-1.jpg",
        "/projects/kaist-2.jpg",
        "/projects/kaist-3.jpg",
        "/projects/kaist-4.jpg",
        "/projects/kaist-5.jpg",
        "/projects/kaist-6.jpg",
        "/projects/kaist-7.jpg",
        "/projects/kaist-8.jpg",
        "/projects/kaist-9.jpg",
      ],
    },
  ];
  /* check remote url */
  console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);

  return (
    <div className="home-page">
      {/* Profile Section */}
      <header className="profile-section">
        <div className="profile-header">
          <img
            src={process.env.PUBLIC_URL + "/profile/profilePhoto.jpg"}
            alt="Eunjung Cho"
            className="profile-photo"
          />
          <div className="profile-info">
            <h1>{profileData.displayName}</h1>
            <h2>{profileData.profession}</h2>
            <h2>{profileData.location}</h2>
          </div>
        </div>
        <h2>ABOUT</h2>
        {/* <p className="profile-about">
          {profileData.about.split("\n\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </p> */}
        <ReactMarkdown
          className="profile-about"
          components={{
            a: ({ node, ...props }) => (
              <a className="project-link" {...props}>
                {props.children || "Visit project"}
              </a>
            ),
          }}
        >
          {profileData.about}
        </ReactMarkdown>
        <p className="skills-heading">
          <strong>— Skills: </strong>
          {profileData.skills}
        </p>
      </header>

      {/*Project Section */}
      <section className="section">
        <h2>PROJECTS</h2>
        <ul className="section-list">
          {projects.map((project) => (
            <li key={project.id} className="section-item">
              <div className="section-year">{project.year}</div>
              <div className="section-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.thumbnail && (
                  <Link to={`/projects/${project.id}`}>
                    <div className="section-thumbnail">
                      <img
                        src={process.env.PUBLIC_URL + project.thumbnail}
                        alt={`${project.title} thumbnail`}
                      />
                    </div>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="section">
        <h2>WORK EXPERIENCE</h2>
        <ul className="section-list">
          {workExperience.map((job, index) => (
            <li key={index} className="section-item">
              <div className="section-year">
                {job.startYear} – {job.endYear}
              </div>
              <div className="section-details">
                <h3>
                  {job.jobTitle} at {job.company}
                </h3>
                {job.description && <p>{job.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2>EDUCATION</h2>
        <ul className="section-list">
          {education.map((edu, index) => (
            <li key={index} className="section-item">
              <div className="section-year">
                {edu.startYear} – {edu.endYear}
              </div>
              <div className="section-details">
                <h3>
                  {edu.degree} at {edu.school}
                </h3>
                {/* show non clickable thumbnails*/}
                {edu.thumbnails.length > 0 && (
                  <div className="school-thumbnails">
                    {edu.thumbnails.map((thumbnail, i) => (
                      <img
                        key={i}
                        src={process.env.PUBLIC_URL + thumbnail}
                        alt={`${edu.school} design ${i + 1}`}
                        className="school-thumbnail"
                      />
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>CONTACT</h2>
        <div>
          <span className="back-to-list">
            {" "}
            <a
              href="https://www.linkedin.com/in/eunjung-cho-designer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile &#8599;
            </a>
          </span>
          <span className="footer-bar-space">|</span>
          <span className="back-to-list">
            <a
              href={`${process.env.PUBLIC_URL}/profile/EunjungCho_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume &#8595;
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
