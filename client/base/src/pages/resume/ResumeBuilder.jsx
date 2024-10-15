import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import axios from 'axios';
import { useMyContext } from '../../context/Context';

const ResumeBuilder = () => {
  const { step, setStep, subStep, setSubStep } = useMyContext();
  const [userProfile, setUserProfile] = useState({
    education: [],
    hasExperience: 'No',
    workExperience: [],
    hasResponsibility: 'No',
    positionsOfResponsibility: [],
    skills: []
  });
  const [currentItem, setCurrentItem] = useState({});

  const questions = [
    { id: 'education', text: "Let's add your education details.", type: 'education' },
    { id: 'hasExperience', text: "Do you have work experience?", type: 'select' },
    { id: 'workExperience', text: "Let's add your work experience.", type: 'workExperience' },
    { id: 'hasResponsibility', text: "Do you have any positions of responsibility?", type: 'select' },
    { id: 'positionsOfResponsibility', text: "Let's add your positions of responsibility.", type: 'responsibility' },
    { id: 'skills', text: "What are your key skills? (Add one at a time)", type: 'skill' },
  ];

  const subQuestions = {
    education: [
      { field: 'qualification', text: "What's your qualification?", type: 'select' },
      { field: 'institution', text: "What's your Institution?", type: 'text' },
      { field: 'startDate', text: "When did you start?", type: 'date' },
      { field: 'endDate', text: "When did you finish?", type: 'date' },
    ],
    workExperience: [
      { field: 'company', text: "What's the company name?", type: 'text' },
      { field: 'role', text: "What was your role?", type: 'text' },
      { field: 'startDate', text: "When did you start?", type: 'date' },
      { field: 'endDate', text: "When did you finish?", type: 'date' },
      { field: 'description', text: "Describe your responsibilities:", type: 'textarea' },
    ],
    responsibility: [
      { field: 'title', text: "What was your title?", type: 'text' },
      { field: 'organization', text: "What was the organization?", type: 'text' },
      { field: 'startDate', text: "When did you start?", type: 'date' },
      { field: 'endDate', text: "When did you finish?", type: 'date' },
      { field: 'description', text: "Describe your responsibilities:", type: 'textarea' },
    ],
  };

  const degreeOptions = [
    "High School", "Associate's", "Bachelor's", "BTech", "BEng", "BSc", 
    "Master's", "MTech", "MEng", "MSc", "MBA", "PhD", "Other"
  ];

  const handleInputChange = (value) => {
    const question = questions[step];
    const subQuestion = subQuestions[question.type]?.[subStep];

    if (subQuestion) {
      setCurrentItem(prev => ({ ...prev, [subQuestion.field]: value }));
    } else {
      setCurrentItem(value);
    }
  };

  const handleSubmit = () => {
    const question = questions[step];

    switch (question.type) {
      case 'select':
        setUserProfile(prev => ({ ...prev, [question.id]: currentItem }));
        setCurrentItem({});
        setStep(prev => prev + 1);
        break;
      case 'education':
      case 'workExperience':
      case 'responsibility':
        if (subStep < subQuestions[question.type].length - 1) { 
          setSubStep(prev => prev + 1);
        } else {
          setUserProfile(prev => ({
            ...prev,
            [question.id]: [...prev[question.id], currentItem]
          }));
          setCurrentItem({});
          setSubStep(0);
        }
        break;
      case 'skill':
        if (currentItem.name && currentItem.proficiency) {
          setUserProfile(prev => ({
            ...prev,
            skills: [...prev.skills, currentItem]
          }));
          setCurrentItem({ name: '', proficiency: '' });
        }
        break;
    }
  };

  const moveToNextSection = () => {
    setStep(prev => prev + 1);
    setSubStep(0);
    setCurrentItem({});
  };

  const moveToPreviousStep = () => {
    if (subStep > 0) {
      setSubStep(prev => prev - 1);
    } else if (step > 0) {
      let prevStep = step - 1;
      while (prevStep >= 0) {
        const prevQuestion = questions[prevStep];
        if (prevQuestion.type === 'select') {
          break;
        } else if (prevQuestion.type === 'workExperience' && userProfile.hasExperience.toLowerCase() === 'no') {
          prevStep--;
        } else if (prevQuestion.type === 'responsibility' && userProfile.hasResponsibility.toLowerCase() === 'no') {
          prevStep--;
        } else {
          break;
        }
      }
      setStep(Math.max(0, prevStep));
      setSubStep(0);
    }
    setCurrentItem({});
  };

  const isNextButtonDisabled = () => {
    const question = questions[step];
    const subQuestion = subQuestions[question.type]?.[subStep];
  
    if (question.type === 'select' || (subQuestion && subQuestion.type === 'select')) {
      return !currentItem || (typeof currentItem === 'object' && Object.keys(currentItem).length === 0);
    }
  
    return false;
  };

  const renderInput = () => {
    const question = questions[step];
    const subQuestion = subQuestions[question.type]?.[subStep];

    if (question.id === 'workExperience' && userProfile.hasExperience.toLowerCase() === 'no') {
      setStep(prev => prev + 1);
      return null;
    }
    if (question.id === 'positionsOfResponsibility' && userProfile.hasResponsibility.toLowerCase() === 'no') {
      setStep(prev => prev + 1);
      return null;
    }

    switch (question.type) {
      case 'select':
        return (
          <FormControl fullWidth>
            <InputLabel>Select an option</InputLabel>
            <Select
              value={currentItem || ''}
              onChange={(e) => handleInputChange(e.target.value)}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        );
      case 'education':
      case 'workExperience':
      case 'responsibility':
        if (subQuestion) {
          switch (subQuestion.type) {
            case 'text':
              return (
                <TextField
                  fullWidth
                  value={currentItem[subQuestion.field] || ''}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
              );
            case 'date':
              return (
                <TextField
                fullWidth
                type="date"
                value={currentItem[subQuestion.field] || ''}
                onChange={(e) => handleInputChange(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                />
              );
            case 'textarea':
              return (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={currentItem[subQuestion.field] || ''}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              );
            case 'select':
              if (subQuestion.field === "qualification") {
                return (
                  <FormControl fullWidth>
                    <InputLabel id="education-qualification">Select degree type</InputLabel>
                    <Select
                      labelId="education-qualification"
                      value={currentItem[subQuestion.field] || ''}
                      onChange={(e) => handleInputChange(e.target.value)}
                    >
                      {degreeOptions.map((degree) => (
                        <MenuItem key={degree} value={degree}>{degree}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }
              break;
          }
        }
        break;
      case 'skill':
        return (
          <React.Fragment>
            <TextField
              fullWidth
              placeholder="Skill name"
              value={currentItem.name || ''}
              onChange={(e) => handleInputChange({ ...currentItem, name: e.target.value })}
              style={{ marginBottom: '10px' }}
            />
            <FormControl fullWidth>
              <InputLabel>Select proficiency</InputLabel>
              <Select
                value={currentItem.proficiency || ''}
                onChange={(e) => handleInputChange({ ...currentItem, proficiency: e.target.value })}
              >
                <MenuItem value="basic">Basic</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </React.Fragment>
        );
    }
  };

  const updateUserProfile = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/profile/updateProfile`, userProfile, { withCredentials: true });
      console.log(response.data);
      
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.log('Error updating user profile:', error);
      return false;
    }
  }

  const downloadResume = async () => {
    try {
      const updateProfile = await updateUserProfile();
      if (!updateProfile) {
        console.error('Error updating user profile');
        return;
      }

      const response = await axios({
        url: `${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/utils/resume/download`,
        method: 'GET',
        responseType: 'blob', // Ensure it's set to 'blob'
        withCredentials: true,
      });
  
      // Check if the response data is a valid blob
      if (response.data instanceof Blob) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf'; // File name
        document.body.appendChild(a);
        a.click();
  
        // Cleanup
        window.URL.revokeObjectURL(url);
        a.remove();
      } else {
        console.error('Invalid PDF data:', response.data);
      }
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  }

  const renderSummary = () => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Resume Summary
        </Typography>
        <Typography variant="h6">Education:</Typography>
        <List>
          {userProfile.education.map((edu, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${edu.qualification} in ${edu.institution} (${edu.startDate} - ${edu.endDate})`} />
            </ListItem>
          ))}
        </List>
        {userProfile.hasExperience === 'yes' && (
          <React.Fragment>
            <Typography variant="h6">Work Experience:</Typography>
            <List>
              {userProfile.workExperience.map((exp, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate})`} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        )}
        {userProfile.hasResponsibility === 'yes' && (
          <React.Fragment>
            <Typography variant="h6">Positions of Responsibility:</Typography>
            <List>
              {userProfile.positionsOfResponsibility.map((pos, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${pos.title} at ${pos.organization} (${pos.startDate} - ${pos.endDate})`} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        )}
        <Typography variant="h6">Skills:</Typography>
        <List>
          {userProfile.skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${skill.name} - ${skill.proficiency}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={() => { setStep(0); setSubStep(0); setCurrentItem({}); setUserProfile({}); }}>
          Start Over
        </Button>
        <Button onClick={downloadResume}>
          Download Resume
        </Button>
      </CardActions>
    </Card>
  );

  if (step >= questions.length) {
    return renderSummary();
  }

  const question = questions[step];
  const subQuestion = subQuestions[question.type]?.[subStep];

  return (
    <Card style={{ width: '350px', margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Resume Chatbot
        </Typography>
        <Typography variant="body2" style={{ marginBottom: '16px' }}>
          {subQuestion ? subQuestion.text : question.text}
        </Typography>
        {renderInput()}
      </CardContent>
      <CardActions style={{ justifyContent: 'space-between' }}>
        <Button onClick={moveToPreviousStep} disabled={step === 0 && subStep === 0}>
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={isNextButtonDisabled()}>
          {subQuestion ? (subStep < subQuestions[question.type].length - 1 ? 'Next' : 'Add') : 'Next'}
        </Button>
        {(question.type === 'education' || question.type === 'workExperience' || question.type === 'responsibility' || question.type === 'skill') && (
          <Button onClick={moveToNextSection}>
            {question.type === 'skill' ? 'Finish' : 'Next Section'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ResumeBuilder;