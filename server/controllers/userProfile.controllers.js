const UserProfile = require("../models/userProfile.models");
const User = require("../models/user.models");
const {uploadOnCloudinary} = require("../utils/cloudinary");

exports.addEducation = async (req, res) => {
    const { education } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({_id: id});
        userProfile.education.unshift(education);
        await userProfile.save();
        return res.status(200).json({ message: "Education added successfully" , education: userProfile.education});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error adding education" });
    }
}

exports.addWorkExperience = async (req, res) => {
    const { workExperience } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        userProfile.workExperience.unshift(workExperience);
        await userProfile.save();
        return res.status(200).json({ message: "Work experience added successfully" , workExperience: userProfile.workExperience});
    } catch (error) {
        res.status(500).json({ message: "error adding experience" });
    }
}

exports.addPositionOfResponsibility = async (req, res) => {
    const { positionOfResponsibility } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        userProfile.positionsOfResponsibility.unshift(positionOfResponsibility);
        await userProfile.save();
        return res.status(200).json({ message: "Position of responsibility added successfully" , positionOfResponsibility: userProfile.positionsOfResponsibility});
    } catch (error) {
        res.status(500).json({ message: "error adding position of responsibility" });
    }
}

exports.addSkill = async (req, res) => {
    const { skill } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        userProfile.skills.unshift(skill);
        await userProfile.save();
        return res.status(200).json({ message: "Skill added successfully" , skill: userProfile.skills});
    } catch (error) {
        res.status(500).json({ message: "error adding skill" });
    }
}

exports.updateEducation = async (req, res) => {
    const { education } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        const index = userProfile.education.findIndex(edu => edu._id.toString() === education._id.toString());
        userProfile.education[index] = education;
        await userProfile.save();
        return res.status(200).json({ message: "Education updated successfully" , education: userProfile.education});
    } catch (error) {
        res.status(500).json({ message: "error updating education" });
    }
}

exports.updateWorkExperience = async (req, res) => {
    const { workExperience } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        const index = userProfile.workExperience.findIndex(work => work._id.toString() === workExperience._id.toString());
        userProfile.workExperience[index] = workExperience;
        await userProfile.save();
        return res.status(200).json({ message: "Work experience updated successfully" , workExperience: userProfile.workExperience});
    } catch (error) {
        res.status(500).json({ message: "error updating experience" });
    }
}

exports.updatePositionOfResponsibility = async (req, res) => {
    const { positionOfResponsibility } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        const index = userProfile.positionsOfResponsibility.findIndex(pos => pos._id.toString() === positionOfResponsibility._id.toString()); 
        userProfile.positionsOfResponsibility[index] = positionOfResponsibility;
        await userProfile.save();
        return res.status(200).json({ message: "Position of responsibility updated successfully" , positionOfResponsibility: userProfile.positionsOfResponsibility});
    } catch (error) {
        res.status(500).json({ message: "Error updating position of responsibility" });
    }
}

exports.updateSkill = async (req, res) => {
    const { skill } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        const index = userProfile.skills.findIndex(sk => sk._id.toString() === skill._id.toString());
        userProfile.skills[index] = skill;
        await userProfile.save();
        return res.status(200).json({ message: "Skill updated successfully" , skill: userProfile.skills});
    } catch (error) {
        res.status(500).json({ message: "error updating skill" });
    }
}

exports.deleteEducation = async (req, res) => {
    const { educationId } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });
        const index = userProfile.education.findIndex(edu => edu._id.toString() === educationId);
        userProfile.education.splice(index, 1);
        await userProfile.save();
        return res.status(200).json({ message: "Education deleted successfully" , education: userProfile.education});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error deleting education" });
    }
}

exports.deleteWorkExperience = async (req, res) => {
    const { workExperienceId } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });

        const index = userProfile.workExperience.findIndex(work => work._id.toString() === workExperienceId);

        userProfile.workExperience.splice(index, 1);

        await userProfile.save();

        return res.status(200).json({ message: "Work experience deleted successfully" , workExperience: userProfile.workExperience});

    } catch (error) {
        res.status(500).json({ message: "error deleting experience" });
    }
}

exports.deletePositionOfResponsibility = async (req, res) => {
    const { positionOfResponsibilityId } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });

        const index = userProfile.positionsOfResponsibility.findIndex(por => por._id.toString() === positionOfResponsibilityId);

        userProfile.positionsOfResponsibility.splice(index, 1);

        await userProfile.save();

        return res.status(200).json({ message: "Position of responsibility deleted successfully" , positionOfResponsibility: userProfile.positionsOfResponsibility});

    } catch (error) {
        res.status(500).json({ message: "error deleting position of responsibility" });
    }
}

exports.deleteSkill = async (req, res) => {
    const { skillId } = req.body;
    const  id  = req.user.profile;
    try {
        const userProfile = await UserProfile.findOne({ _id: id });

        const index = userProfile.skills.findIndex(sk => sk._id.toString() === skillId);

        userProfile.skills.splice(index, 1);

        return res.status(200).json({ message: "Skill deleted successfully" , skill: userProfile.skills});

    } catch (error) {
        res.status(500).json({ message: "error deleting skill" });
    }
}

exports.updateName = async (req, res) => {
    const {name} = req.body;
    const id = req.user.profile;

    try {
        const profile = await UserProfile.findOneAndUpdate({_id: id}, {name}, {new: true});
        return res.status(200).json({message: "Name updated successfully", profile});
    } catch (error) {
        return res.status(500).json({message: "Error updating name"});
    }
}

exports.updateProfile = async (req, res) => {
    const {education, 
        skills, 
        workExperience, 
        name, 
        domain, 
        languages, 
        locations, 
        expectedSalary, 
        experience, 
        about, 
        projects } = req.body;
    const id = req.user.profile;
    
    try {
        
        const updatedProjects = [];

        for (let i = 0; i < projects.length; i++) {
            const project = JSON.parse(projects[i]);

            const file = req.files[i];

            let uploadedFile;
            if (file) {
                uploadedFile = await uploadOnCloudinary(file.path);
            }

            updatedProjects.push({
                name: project.name,
                description: project.description,
                file: uploadedFile?.url || null
            });
        }

        const profile = await UserProfile.findOneAndUpdate({_id: id}, {
            education,
            skills,
            workExperience,
            domain,
            languages,
            locations,
            expectedSalary,
            experience,
            about, 
            projects: updatedProjects
        }, {new: true});

        await User.findOneAndUpdate({_id: req.user._id}, {
            name,
            isFormFilled: true
        }, {new: true});
        
        return res.status(200).json({message: "Profile updated successfully", profile});
    } catch (error) {
        res.status(500).json({message: "Error updating profile"});
    }
}
