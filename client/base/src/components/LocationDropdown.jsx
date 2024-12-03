import { Autocomplete, Box, TextField } from '@mui/material';
import { City, State } from 'country-state-city';
import React, { useEffect, useState } from 'react'
import countries from '../helpers/countries';

export default function LocationDropdown() {
    const [data,setData]=useState({country:"", state:"", city:"", pincode:""})
    const [Ccode,setCcode]=useState([])
    const [Scode,setScode]=useState([])
    const [stateDrop,setStateDrop]=useState([])
    const [cityDrop,setCityDrop]=useState([])
    const [errors,setErrors]=useState({})
    const [countryCode,setCountryCode]=useState([])
    useEffect(()=>{
        let states=[]
         Ccode.map((item)=>states.push({label:item.name,iso:item.isoCode}))
    
         setStateDrop(states)
        },[Ccode])
    
        useEffect(()=>{
        let cities=[]
         Scode.map((item)=>cities.push({label:item.name,iso:item.isoCode}))
         setCityDrop(cities)
        },[Scode])
  return (
 <>
       
              <Autocomplete
              sx={{mb:2}}
              size='small'
              className='flex-1'
            id="country-select-demo"
    
            options={countries}
            onChange={(e,v)=>{setCcode(State.getStatesOfCountry(v.code));setCountryCode(v.code);setData({...data,country:v.label})}}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="country"
                error={errors.country} helperText={errors.country}
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  },
                }}
              />
            )}
          />
          <Autocomplete
           sx={{mb:2}}
          size='small'
              className='flex-1'
            disablePortal
            options={stateDrop}
                onChange={(e)=>{setScode(City.getCitiesOfState(countryCode,stateDrop.filter((item)=>item.label==e.target.innerHTML)[0].iso));setData({...data,state:e.target.innerHTML})}}
       
            renderInput={(params) => <TextField {...params} label="state" error={errors.state} helperText={errors.state}/>}
          />
            
        <div className='flex gap-2'>
          <Autocomplete
           sx={{mb:2}}
          size='small'
                className='flex-1'
            disablePortal
            options={cityDrop}
            onChange={(e)=>setData({...data,city:e.target.innerHTML})}
          
            renderInput={(params) => <TextField {...params} label="city" error={errors.city} helperText={errors.city}/>}
          />
          <TextField size='small' className='flex-1' id="pincode" type='number' label="pincode" variant="outlined" onChange={(e)=>setData({...data,pincode:e.target.value})} error={errors.pincode} helperText={errors.pincode}/>
        </div>
 </>
  )
}
