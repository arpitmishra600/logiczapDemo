import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context with a default value
const MyContext = createContext();

// Create a Provider component
const Context = ({ children }) => {
    const [poppup, setPoppup] = useState(false);
    const [formSteps, setFormSteps] = useState(0);
    const [expdialog,setExpdialog]=useState(false)
    const [edudialog,setEdudialog]=useState(false)
    const [proDialog,setProDialog]=useState(false)
    const [enableNextButton,setEnableNextButton]=useState(true)

    //singup form data

    const [formData,setFormData]=useState({
        firstName:"",lastName:"",about:"",
        education:[],
        experience:[],
        projects:[],
        skills:[],
        preferredWorkRoles:[],
        preferredWorkLocations:[],
        languagesSpoken:[],
        profilePic:"",
        coverPic:""
    })

    //dashboard contexts
    const [selectedCandidateMenu,setSelectedCandidateMenu]=useState("profile")
    const [selectedRecruiterMenu,setSelectedRecruiterMenu]=useState("profile")

    //modal contexts
    const [editAbout,setEditAbout]=useState(false)
    const [editProjects,setEditProjects]=useState(false)
    const [editSkills,setEditSkills]=useState(false)
    const [editExperience,setEditExperience]=useState(false)
    const [editEducation,setEditEducation]=useState(false)
    const [editAdditional,setEditAdditional]=useState(false)

    //chat contexts
    const [openChat,setOpenChat]=useState("both")
    
   
    useEffect(() => {
    console.log(editAbout)
        
      }, [editAbout])
    
    
    return (
        <MyContext.Provider value={{poppup, setPoppup,formSteps, setFormSteps,expdialog,setExpdialog,edudialog,setEdudialog,proDialog,setProDialog,formData,setFormData,enableNextButton,setEnableNextButton,selectedCandidateMenu,setSelectedCandidateMenu,selectedRecruiterMenu,setSelectedRecruiterMenu,
            editAbout,setEditAbout,editProjects,setEditProjects,editSkills,setEditSkills,editExperience,setEditExperience,editEducation,setEditEducation,editAdditional,setEditAdditional,openChat,setOpenChat
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default Context
// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
