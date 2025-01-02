import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Google', location: 'Remote', description: 
`Job Type: Full-Time

Job Summary:
We are looking for a talented Software Developer to design, develop, and maintain software solutions.
The role involves working with cross-functional teams to deliver high-quality, scalable applications.

Responsibilities:
Develop and maintain clean, efficient code.
Collaborate with teams to gather requirements and design solutions.
Test, debug, and optimize software for performance and scalability.
Participate in code reviews and ensure adherence to coding standards.
Document software processes and updates.

Qualifications:
Bachelor’s degree in Computer Science or related field.
Proficiency in programming languages (e.g., Java, Python, JavaScript).
Strong problem-solving and teamwork skills.
Experience with databases, APIs, and version control (e.g., Git).`, link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000' },
    { id: 2, title: 'Product Manager', company: 'Facebook', location: 'Pune', description: 'Lead innovative products!', link: 'https://www.linkedin.com/',image: 'https://img.icons8.com/?size=100&id=13912&format=png&color=000000' },
    { id: 3, title: 'UI/UX Designer', company: 'Amazon', location: 'Hyderabad', description: 'Create stunning designs!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=21295&format=png&color=000000' },
    { id: 4, title: 'Full Stack Developer', company: 'Meta', location: 'Remote', description: 'Build scalable web apps!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000' },
    { id: 5, title: 'Data Analyst', company: 'Apple', location: 'Bengaluru', description: 'Analyze data to make informed decisions!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=30840&format=png&color=000000' },    
    { id: 6, title: 'Senior Software Engineer', company: 'Microsoft', location: 'Remote', description: 'Build amazing web apps!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=22989&format=png&color=000000' },
    { id: 7, title: 'Senior Product Manager', company: 'Netflix', location: 'Delhi', description: 'Lead innovative products!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=ortlsYTZxMvT&format=png&color=000000' },
    { id: 8, title: 'Senior UI/UX Designer', company: 'Flipkart', location: 'Pune', description: 'Create stunning designs!', link: 'https://www.linkedin.com/', image: 'https://img.icons8.com/?size=100&id=UU2im0hihoyi&format=png&color=000000' },
];

const Navbar = () => (
    <nav className="navbar">
         <Link to="/" ><h1 style={{fontSize: "20px"}}>CareerConnect</h1></Link>
        <h1 style={{fontSize: "20px",marginLeft: "-90px"}}>We find the best jobs for you! 🚀</h1>

    </nav>
);

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2025 CareerConnect. All rights reserved.</p>
    </footer>
);

const Home = () => (
  <div className="home">
      <h2 style={{textAlign: "center",fontSize: "25px"}}>Available Jobs 👜</h2> <br></br>
      <div className="job-list">
          {jobs.map(job => (
              <div key={job.id} className="job-card">
                  <h3> <img src={job.image} alt={job.title} width="100" height="100"/> {job.title}</h3>
                  <p>{job.company} - {job.location}</p>
                  <Link to={`/job/${job.id}`} className="view-details-link" style={{textDecoration: "none"}}>
                      View Details
                  </Link>
              </div>
          ))}
      </div>
  </div>
);


const JobDetails = () => {
    const { id } = useParams();
    const job = jobs.find(job => job.id.toString() === id);

    if (!job) {
        return <h2>Job not found</h2>;
    }

    return (
        <div className="job-details container">
            <h2> <img src={job.image} alt={job.title} width="100" height="100"/> {job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <pre id='job-description'>{jobs[0].description}</pre>
            <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job/:id" element={<JobDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;