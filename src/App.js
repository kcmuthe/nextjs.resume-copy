

import './App.css';

function App() {
  return (
    <div className="resume-container">
      <section className="resume-header">
        <div>
          <h1>Kenya Muthe</h1>
          <p className="headline">BAIS Senior at University of South Florida</p>
        </div>
        <div className="contact-info">
          <p>Email: kcmuthe@gmail.com</p>
          <p>Phone: (941) 807-2651</p>
          <p>Location: Tampa, FL</p>
          <p>Portfolio: github.com/kenyamuthe</p>
        </div>
      </section>


      <section className="resume-section two-column">
        <div>
          <h2> Work Experience</h2>
          <article className="item">
            <h3>Guest Services Lead</h3>
            <p className="item-meta">Target · July 2021 - Present</p>
            <ul>
              <li>Preserved revenue streams by utilizing strong communication and negotiation skills, offering solutions to maintain customer satisfaction.</li>
              <li>Promoted customer loyalty by enrolling more than 5 customers weekly into the Target Red card to improve sales.</li>
              <li>•	Delivered Drive Up and Pick Up orders within 3 minutes to support the store’s metrics and maintain them in the “green” zone.</li>
            </ul>
          </article>

        </div>

        <div>
          <h2>Skills</h2>
          <ul className="skill-list">
            <li>Bilingual (English/Spanish)</li>
            <li>JavaScript </li>
            <li>Customer Service Operations</li>
            <li>Inventory Management</li>
            <li>Proficient in Excel</li>
          </ul>

          <h2>Education</h2>
          <article className="item">
            <h3>Bachelor of Science in Business Analytics and Information Systems</h3>
            <p className="item-meta">University of South Florida · 2022 - 2026</p>
          </article>

        </div>
      </section>
    </div>
  );
}

export default App;
