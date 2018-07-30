import React from 'react';

export default (props) => {
  const updateOption = (e) => {
    props.filterJobs(e.target.name, e.target.value);
  };
  return (
    <div className="container mx-auto job-filter row p-2">
      <select
        name="type"
        value={props.type}
        onChange={updateOption}
        className="col-sm-6 filter-control">
        <option value="">Select Type...</option>
        <option value="fulltime">Fulltime</option>
        <option value="parttime">Parttime</option>
        <option value="remote">Remote</option>
        <option value="freelance">Freelance</option>
      </select>
      <select
        name="role"
        value={props.role}
        onChange={updateOption}
        className="col-sm-6 filter-control">
        <option value="">Select Role...</option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="designer">Designer</option>
      </select>
    </div>
  );
};
