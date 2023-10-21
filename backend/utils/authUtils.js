```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateAuthToken = (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
    return token;
}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

module.exports = {
    generateAuthToken,
    hashPassword,
    comparePassword
}
```