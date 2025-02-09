import { InsertEmoticon } from "@mui/icons-material";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Prescripto",
    image: "https://i.ibb.co.com/DHCcdVvm/Screenshot-9-2-2025-112554-serene-crumble-e9ce54-netlify-app.jpg",
    stack: "React, tailwind",
    description:
      "A web application that allows users to manage appointment for doctors",
    liveLink: "https://serene-crumble-e9ce54.netlify.app/",
    github: "https://github.com/showrov4g/Doctor-protal",
    challenges: "Optimizing user experience",
    improvements: "Add database to store user and doctors data",
  },
  {
    id: 2,
    name: "orchid",
    image:
      "https://i.ibb.co.com/N2X7prZg/Screenshot-9-2-2025-113211-assaignment10-web-app.jpg",
    stack: "React js, Tailwind CSS, dasiUI",
    description: "This is a electronic item website",
    liveLink: "https://legendary-sherbet-6a85d6.netlify.app/",
    github: "https://github.com/showrov4g/Gadget-Heaven",
    challenges: "Implementing WebSockets for user authentication",
    improvements: "Integrating payment method for collecting payment from user",
  },
  {
    id: 3,
    name: "Hostel management",
    image: "https://i.ibb.co.com/dswhyCsH/Screenshot-9-2-2025-11296-ssaignment12-web-app.jpg",
    stack: "React js, tailwind, firebase, mongoDb",
    description: "An e-commerce platform with secure payments.",
    liveLink: "https://example.com",
    github: "https://github.com/showrov4g/hostel-management",
    challenges: "Ensuring secure transactions and scalability.",
    improvements: "Adding AI-driven product recommendations.",
  },
];

const Projects = () => {
    const [selctProject, setSeletctProject] = useState(null)
  return (
    <div id="project">
      <div className="flex flex-col text-center items-center justify-center gap-4 my-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#42446E]">
          Projects
        </h1>
        <p className="text-lg md:text-xl">Things I’ve built so far</p>
      </div>
      {/* card sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img className="h-[300px]"
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Project Name : {item.name}
                
              </h2>
             
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Views details</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
