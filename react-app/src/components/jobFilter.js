import React from 'react';

export default () => (
  <div className="container mx-auto job-filter row p-2">
    <select className="col-sm-4 filter-control">
      <option>Type...</option>
      <option>Fulltime</option>
      <option>Part-time</option>
      <option>Remote</option>
      <option>Freelance</option>
    </select>
    <select className="col-sm-4 filter-control">
      <option>Role...</option>
      <option>Backend</option>
      <option>Front-End</option>
      <option>Full Stack</option>
    </select>
    <select className="col-sm-4 filter-control">
      <option>Experience...</option>
      <option>Junior</option>
      <option>Intermediate</option>
      <option>Senior</option>
    </select>
  </div>
);
