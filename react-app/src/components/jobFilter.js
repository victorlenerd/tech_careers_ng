import React from 'react';

export default (props) => {
  // console.log(props);
  const updateOption = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    switch (e.target.name) {
      case 'typeSelect':
        return props.filterJobs(e.target.value, '', '');
      case 'roleSelect':
        return props.filterJobs('', e.target.value, '');
      case 'experienceSelect':
        return props.filterJobs('', '', e.target.value);
      default:
        return props.filterJobs();
    }
  };
  return (
    <div className="container mx-auto job-filter row p-2">
      <select
        name="typeSelect"
        onChange={updateOption}
        className="col-sm-4 filter-control">
        <option value="">Type...</option>
        <option value="fulltime">Fulltime</option>
        <option value="parttime">Parttime</option>
        <option value="remote">Remote</option>
        <option value="freelance">Freelance</option>
      </select>
      <select
        name="roleSelect"
        onChange={updateOption}
        className="col-sm-4 filter-control">
        <option value="">Role...</option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="designer">Designer</option>
      </select>
      <select
        name="experienceSelect"
        onChange={updateOption}
        className="col-sm-4 filter-control">
        <option value="">Experience...</option>
        <option value="junior">Junior</option>
        <option value="intermediate">Intermediate</option>
        <option value="senior">Senior</option>
      </select>
    </div>
  );
};
