const { OAuth2Client } = require('google-auth-library');
const User = require("../models/user.models");
const UserProfile = require("../models/userProfile.models");
const {generateCustomId} = require("../controllers/user.controllers")

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(req, res) {
  const { token } = req.body;

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Find or create the user
    let user = await User.findOne({
      $or: [{ email: payload.email }, { googleId: payload.sub }],
    });

    if (!user) {
      const profile = await UserProfile.create({
        education: [],
        workExperience: [],
        positionsOfResponsibility: [],
        skills: [],
      });

      const customId = await generateCustomId(User.collection);

      user = await User.create({
        _id: customId,
        username: payload.name.replace(/\s+/g, '').toLowerCase(),
        email: payload.email,
        googleId: payload.sub,
        profile: profile._id,
      });
    }

    // Optionally, create a session or send back a token
    res.json({ success: true, user });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
}

module.exports = { verifyGoogleToken };