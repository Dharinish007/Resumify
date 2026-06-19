const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    template: String,
    personalInfo: {
        fullName: String,
        email: String,
        phone: String,
        linkedin: String,
        github: String,
        portfolio: String
    },
    summary: String,
    education: [{ institution: String, degree: String, cgpa: String, year: String }],
    experience: [{ company: String, role: String, duration: String, bullets: [String] }],
    projects: [{ title: String, stack: String, bullets: [String], link: String }],
    skills: [{ category: String, items: [String] }],
    certifications: [{ name: String, issuer: String, year: String }],
    sectionOrder: [String],
    latestScore: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);