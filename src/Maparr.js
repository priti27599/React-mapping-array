import React from 'react';

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
];

function Maparr() {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Maparr;

const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech}
    {level}
  </li>
);
