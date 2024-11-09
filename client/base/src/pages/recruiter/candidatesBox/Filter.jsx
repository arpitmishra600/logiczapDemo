import React, { useState } from "react";
import { Autocomplete, TextField, Chip, Slider } from "@mui/material";
import { Box } from "@mui/system";
import {educationOptions} from '../../../helpers/education'
export default function Filter() {
  const [domains, setDomains] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [locations, setLocations] = useState([]);
  const [edu, setEdu] = useState([]);
  const [experience, setExperience] = useState([0, 10]);
  const [expectations, setExpectations] = useState([0, 100000]);

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  const renderAutocomplete = (label, value, setValue, options) => (
    
    <>
    <h3>{label}</h3>
      <Autocomplete
      size="small"
        multiple
        freeSolo
        options={options}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
              className="m-1"
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
        className="w-full"
      />
    </>
   
  );

  return (
    <div>
      <div className='flex justify-between font-bold tracking-wide text-lg'>Filter By <button className='text-xs font-[400] flex items-center border rounded-[32px] px-2 border-[#FB3748] p-1'>{svgs.x}Clear Filters</button></div>
      <Box className="p-4 space-y-4 w-full max-w-2xl mx-auto">

      {/* Autocomplete Fields */}
      <div className="space-y-2">
        {renderAutocomplete("Domain", domains, setDomains, ["Web Development", "Data Science", "Design"])}
        {renderAutocomplete("Skills", skills, setSkills, ["React", "Node.js", "Python"])}
        {renderAutocomplete("Languages", languages, setLanguages, ["English", "Spanish", "Mandarin"])}
        {renderAutocomplete("Locations", locations, setLocations, ["New York", "San Francisco", "Remote"])}
      
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-gray-700 font-medium">Experience (years)</label>
          <Slider
            value={experience}
            onChange={handleSliderChange(setExperience)}
            valueLabelDisplay="auto"
            min={0}
            max={30}
            className="text-indigo-600"
          />
        </div>

        <div className="space-y-1">
          <label className="text-gray-700 font-medium">Expected Salary</label>
          <Slider
            value={expectations}
            onChange={handleSliderChange(setExpectations)}
            valueLabelDisplay="auto"
            min={0}
            max={200000}
            className="text-indigo-600"
          />
        </div>
      </div>
    </Box>
    </div>
  )
}

const svgs={
  x:<svg fill="#FB3748" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path></g></svg>
}