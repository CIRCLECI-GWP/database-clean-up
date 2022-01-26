const axios = require("axios").default;
require("dotenv").config();

const API_BASE_URL = "https://circleci.com/api/v2/schedule";
const vcs = process.env.VCS_TYPE;
const org = process.env.ORG_NAME;
const project = process.env.PROJECT_ID;
const token = process.env.CIRCLECI_TOKEN;

const schedule_ids = ["4c9cabbf-5e84-4cfe-b9ae-9a78097448c4"];

async function deleteScheduleById() {
  for (let i = 0; i < schedule_ids.length; i++) {
    let deleteScheduleEndpoint = `${API_BASE_URL}/${schedule_ids[i]}`;
    let res = await axios.delete(deleteScheduleEndpoint, {
      headers: { "circle-token": token },
    });
    console.log(res.data);
  }
}

deleteScheduleById();
