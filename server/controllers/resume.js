const PDFDocument = require('pdfkit');
const fs = require('fs');
const UserProfile = require('../models/userProfile.models');

// Function to generate a PDF resume
exports.generateResume = async (req, res) => {
    const id = req.user.profile;  
    const { name, email, phoneNumber } = req.user;
    try {
        // Fetch the user profile data from MongoDB
        const userProfile = await UserProfile.findOne({ _id: id });

        if (!userProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        // Create a new PDF document
        const doc = new PDFDocument({
            size: 'A4',
            margins: { top: 50, bottom: 50, left: 50, right: 50 }
        });

        // Set headers for the response to make the browser download the file
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');

        // Pipe the document to the response
        doc.pipe(res);

        // Add resume title and name
        doc.fontSize(25).text(`${name}'s Resume`, { align: 'center', underline: true });
        doc.moveDown();

        // Add contact information in bold
        doc.fontSize(12).font('Helvetica-Bold').text(`Email: ${email}`);
        doc.fontSize(12).font('Helvetica-Bold').text(`Phone: ${phoneNumber}`);
        doc.moveDown();

        // Add Education Section with styling
        if (userProfile.education && userProfile.education.length > 0) {
            doc.fontSize(16).font('Helvetica-Bold').text('Education', { underline: true });
            userProfile.education.forEach(edu => {
                doc.moveDown();
                doc.fontSize(12).font('Helvetica-Bold').text(`${edu.qualification} - ${edu.institution}`);
                doc.fontSize(12).font('Helvetica').text(`${edu.startDate} - ${edu.endDate}`);
            });
            doc.moveDown();
        }

        // Add Work Experience Section with bullet points
        if (userProfile.workExperience && userProfile.workExperience.length > 0) {
            doc.fontSize(16).font('Helvetica-Bold').text('Work Experience', { underline: true });
            userProfile.workExperience.forEach(exp => {
                doc.moveDown();
                doc.fontSize(12).font('Helvetica-Bold').text(`${exp.role} at ${exp.company}`);
                doc.fontSize(12).font('Helvetica').text(`${exp.startDate} - ${exp.endDate}`);
                doc.fontSize(12).font('Helvetica').text(exp.description, { indent: 20 });
            });
            doc.moveDown();
        }

        // Add Positions of Responsibility Section
        if (userProfile.positionsOfResponsibility && userProfile.positionsOfResponsibility.length > 0) {
            doc.fontSize(16).font('Helvetica-Bold').text('Positions of Responsibility', { underline: true });
            userProfile.positionsOfResponsibility.forEach(pos => {
                doc.moveDown();
                doc.fontSize(12).font('Helvetica-Bold').text(`${pos.title} - ${pos.organization}`);
                doc.fontSize(12).font('Helvetica').text(`${pos.startDate} - ${pos.endDate}`);
                doc.fontSize(12).font('Helvetica').text(pos.description, { indent: 20 });
            });
            doc.moveDown();
        }

        // Add Skills Section with bullet points
        if (userProfile.skills && userProfile.skills.length > 0) {
            doc.fontSize(16).font('Helvetica-Bold').text('Skills', { underline: true });
            userProfile.skills.forEach(skill => {
                doc.moveDown();
                doc.fontSize(12).font('Helvetica').text(`• ${skill.name} - ${skill.proficiency}`);
            });
        }

        // Finalize the PDF and end the stream
        doc.end();
    } catch (error) {
        console.error('Error generating resume:', error);
        res.status(500).json({ message: "Error generating resume" });
    }
};