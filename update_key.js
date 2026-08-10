const fs = require('fs');

const profilesPath = '/root/.openclaw/agents/main/agent/auth-profiles.json';
const data = JSON.parse(fs.readFileSync(profilesPath, 'utf8'));

data.profiles["google:default"].key = "AIzaSyA6W7iHQPvmunSoc9lGvtPE6qt2gY7SDQ0";

fs.writeFileSync(profilesPath, JSON.stringify(data, null, 2));
