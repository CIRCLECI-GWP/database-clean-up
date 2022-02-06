## Scheduled database clean up using Scheduled Pipelines

[![CircleCI](https://circleci.com/gh/CIRCLECI-GWP/database-clean-up/tree/main.svg?style=svg)](https://circleci.com/gh/CIRCLECI-GWP/database-clean-up/tree/main)
### Getting started

Clone this application on GitHub with:

```bash
git clone https://github.com/yemiwebby/db-clean-up.git
```

Navigate into the folder and install its dependencies:

```bash
cd db-clean-up

npm install
```

Copy or create a `.env` file:

```bash
cp .env.sample .env
```

Replace the placeholders with the appropriate values:

- `VCS_TYPE`: Your version control system, such as `github`.
- `ORG_NAME`: Your GitHub username or organisation name
- `PROJECT_ID`: Your project Id on CircleCI. `db-clean-up` in our case
- `CIRCLECI_TOKEN`: Your CircleCI Token
- `MONGODB_URI`: Your MongoDB URI string as extracted from MongoDB Atlas dashboard.

### Running the application

Run the application with:

```bash
npm run start
```
