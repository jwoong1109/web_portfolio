import React from 'react';
import '../assets/scss/section/_resume.scss';
import resume from '../data/resume_data';

const Resume = () => {
  return (
    <div className="resume-container">
      <ul className='section1'>
        <li>{resume.name}</li>
      </ul>

      <ul className='section2'>
        <li>{resume.name2}</li>
      </ul>

      <ul className='section3'>
        <li>{resume.name3}</li>
      </ul>
    </div>
  );
}

export default Resume;
