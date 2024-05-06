import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Filter = ({ setFilters }) => {


  const Styles = {
    label: {
      fontSize: 12,
      lineHeight: "15px",
      '&.Mui-focused':{
        fontSize: 14,
        color:"#000",
        top:-5,
      },
      
    },
    input: {
      fontSize: 12,
      lineHeight: "15px",
    }
  }


  const dummyData = {
    minExp: ['1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 ', '10 '],
    companyName: ['Dropbox','Google', 'Microsoft', 'Adobe'],
    location: ['delhi ncr', 'mumbai', 'chennai',],
    remote: ['Remote', 'On-site'],
    techStack: ['React', 'Angular', 'Vue.js', 'Next.js'],
    jobRole: ['Frontend ','IOS', 'Backend ', 'Full Stack ', 'Software Engineer', 'DevOps ', 'UI/UX', 'Data Scientist', 'Machine Learning ', 'QA '],
    minJdSalary: ['50$', '60$', '70$', '800$', '90$', '10$', '110$', '1280$', '130$', '140$'],
  };


  const [selectedFilters, setSelectedFilters] = useState({dummyData});
  
   const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prevFilters => ({
        ...prevFilters,
        [filterName]: value
       
    }));
    console.log(selectedFilters)
};

  useEffect(() => {
      setFilters(selectedFilters);
  }, [selectedFilters, setFilters]);


  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', padding: "20px" }}>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }} >
          <InputLabel id="min-experience-label" style={Styles.label}>Min Experience</InputLabel>
          <Select
            labelId="min-experience-label"
            id="min-experience"
            value={selectedFilters.minExp || ''}
            onChange={e => handleFilterChange('minExp', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.minExp.map((experience, index) => (
              <MenuItem key={index} value={experience} style={Styles.input}>{experience}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="company-name-label" style={Styles.label} displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}>Company Name</InputLabel>
          <Select
            labelId="company-name-label"
            id="company-name"
            value={selectedFilters.companyName || ''}
            onChange={e => handleFilterChange('companyName', e.target.value)}
            style={Styles.input}

          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.companyName.map((company, index) => (
              <MenuItem key={index} value={company} style={Styles.input}>{company}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="location-label" style={Styles.label}>Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={selectedFilters.location || ''}
            onChange={e => handleFilterChange('location', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.location.map((loc, index) => (
              <MenuItem key={index} value={loc} style={Styles.input}>{loc}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="remote-label" style={Styles.label}>Remote/On-site</InputLabel>
          <Select
            labelId="remote-label"
            id="remote"
            value={selectedFilters.remote || ''}
            onChange={e => handleFilterChange('remote', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.remote.map((option, index) => (
              <MenuItem key={index} value={option} style={Styles.input}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="tech-stack-label" style={Styles.label}>Tech Stack</InputLabel>
          <Select
            labelId="tech-stack-label"
            id="tech-stack"
            value={selectedFilters.techStack || ''}
            onChange={e => handleFilterChange('techStack', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.techStack.map((stack, index) => (
              <MenuItem key={index} value={stack} style={Styles.input}>{stack}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="role-label" style={Styles.label}>Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={selectedFilters.jobRole || ''}
            onChange={e => handleFilterChange('jobRole', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.jobRole.map((r, index) => (
              <MenuItem key={index} value={r} style={Styles.input}>{r}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ m: 1, minWidth: 128 }}>
          <InputLabel id="min-base-pay-label" style={Styles.label}>Min Base Pay</InputLabel>
          <Select
            labelId="min-base-pay-label"
            id="min-base-pay"
            value={selectedFilters.minJdSalary|| ''}
            onChange={e => handleFilterChange('minJdSalary', e.target.value)}
            style={Styles.input}
          >
            <MenuItem value="" style={Styles.input}>Select</MenuItem>
            {dummyData.minJdSalary.map((pay, index) => (
              <MenuItem key={index} value={pay} style={Styles.input}>{pay}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Filter;
