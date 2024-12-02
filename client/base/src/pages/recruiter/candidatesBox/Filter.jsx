import React, { useState } from "react";
import { Autocomplete, TextField, Chip, Slider } from "@mui/material";
import { Box } from "@mui/system";
import {educationOptions} from '../../../helpers/education'
const placeholders={
  "Domain":"e.g web developer",
  "Skills":"e.g html,css,js",
  "Languages":"e.g hindi,english",
  "Locations":"e.g delhi,mumbai"

}
export default function Filter({setOpenFilter}) {
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
    <h3 className="text-sm">{label}</h3>
      <Autocomplete
      size="small"
        multiple
        freeSolo
        options={[]} // Prevent 'filter' errors
  open={false} // Completely disable the popup
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
            size="small"
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
              className="m-1"
            />
          ))
        }
        
        renderInput={(params) => (
          <TextField {...params} label={placeholders[label]} variant="outlined" />
        )}
        className="w-full"
      />
    </>
   
  );

  return (
    <div>
      <div className='flex justify-between font-bold tracking-wide text-lg'>Filter By <button onClick={()=>setOpenFilter(false)}>{cross("black")}</button></div>
      
      <Box className="space-y-4 w-full max-w-2xl mx-auto">

      {/* Autocomplete Fields */}
      <div className="space-y-1">
        {renderAutocomplete("Domain", domains, setDomains, ["press Enter to add"])}
        {renderAutocomplete("Skills", skills, setSkills, ["React", "Node.js", "Python"])}
        {renderAutocomplete("Languages", languages, setLanguages, ["English", "Spanish", "Mandarin"])}
        {renderAutocomplete("Locations", locations, setLocations, ["New York", "San Francisco", "Remote"])}
      
      </div>

      {/* Sliders */}
      <div className="space-y-2">
        <div className="space-y-1 space-x-2">
          <label className="text-gray-700 font-medium">Experience (years)</label>
          <Slider
            value={experience}
            onChange={handleSliderChange(setExperience)}
            valueLabelDisplay="auto"
            min={0}
            max={30}
            className="text-indigo-600 !w-[90%]"
          />
        </div>

        <div className="space-y-1 space-x-2">
          <label className="text-gray-700 font-medium">Expected Salary (in rupees)</label>
          <Slider
            value={expectations}
            onChange={handleSliderChange(setExpectations)}
            valueLabelDisplay="auto"
            min={0}
            max={200000}
            className="text-indigo-600 !w-[90%]"
          />
        </div>
      </div>
    </Box>
    <button className='text-xs font-[400] flex items-center border rounded-[32px] px-2 border-[#FB3748] p-1'>{cross("#FB3748")}Clear Filters</button>
    </div>
  )
}

const cross=(fill)=>{
  return <svg fill={fill} width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path></g></svg>
}
