```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 5432,
});

const getUserData = async (username) => {
  const res = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return res.rows[0];
};

const getBrandData = async (brandName) => {
  const res = await pool.query('SELECT * FROM brands WHERE name = $1', [brandName]);
  return res.rows[0];
};

const getProposalData = async (proposalId) => {
  const res = await pool.query('SELECT * FROM proposals WHERE id = $1', [proposalId]);
  return res.rows[0];
};

const getContractData = async (contractId) => {
  const res = await pool.query('SELECT * FROM contracts WHERE id = $1', [contractId]);
  return res.rows[0];
};

const getScheduleData = async (scheduleId) => {
  const res = await pool.query('SELECT * FROM schedules WHERE id = $1', [scheduleId]);
  return res.rows[0];
};

module.exports = {
  getUserData,
  getBrandData,
  getProposalData,
  getContractData,
  getScheduleData,
};
```