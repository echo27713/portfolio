import React from "react";

// const HomePage = () => {
//     const { general, projects } = profileData;
//     const { displayName, profession, location, about } = general;

//     return (
//       <div className="home-page">
//         {/* Profile Section */}
//         <header className="profile-section">
//           <img src={profilePhoto} alt={displayName} className="profile-photo" />
//           <h1>{displayName}</h1>
//           <p>{profession}</p>
//           <p>{location}</p>
//           <p>{about}</p>
//         </header>

//         {/* Projects Section */}
//         <section className="projects-section">
//           <h2>Projects</h2>
//           <ul>
//             {projects.map((project) => (
//               <li key={project.id}>
//                 <h3>{project.title} ({project.year})</h3>
//                 {project.description && <p>{project.description}</p>}
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     );

const HomePage = () => {
  // Fetch profile data from the public folder
  const profileData = {
    displayName: "Eunjung Cho",
    profession: "UX Designer",
    location: "San Francisco Bay Area",
    about: `Currently, I am looking for new opportunities.\n\nFor the past 12 years, I've worked at startups and big tech companies as an interaction designer and user researcher.`,
  };

  return (
    <div className="home-page">
      {/* Profile Section */}
      <header className="profile-section">
        <img
          src="/profile/profilePhoto.jpg"
          alt="Eunjung Cho"
          className="profile-photo"
        />
        <h1>{profileData.displayName}</h1>
        <p>{profileData.profession}</p>
        <p>{profileData.location}</p>
        <p>{profileData.about}</p>
      </header>
    </div>
  );
};

export default HomePage;
