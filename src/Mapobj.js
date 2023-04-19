import React from 'react';

const countries = [
  { id: 1, name: 'Finland', city: 'Helsinki' },
  { id: 2, name: 'Sweden', city: 'Stockholm' },
  { id: 3, name: 'Denmark', city: 'Copenhagen' },
  { id: 4, name: 'Norway', city: 'Oslo' },
  { id: 5, name: 'Iceland', city: 'Reykjavík' },
];

const Mapobj = () => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.id}>
          <h2>{country.name}</h2>
          <h3>{country.city}</h3>
        </div>
      ))}
    </div>
  );
};

export default Mapobj;
