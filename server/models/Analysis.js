const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
    resumeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sourceType: String,
    overallScore: Number,
    subScores: {
        formatting: Number,
        keywords: Number,
        impact: Number,
        length: Number
    },
    flaggedIssues: [String],
    jdMatch: {
        jdText: String,
        matchPercent: Number,
        matchedKeywords: [String],
        missingKeywords: [String]
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analysis', analysisSchema);