# Slidely AI Submission Backend
This repository contains the code for the backend server of the Slidely AI Submission Desktop App. The backend is an Express server built with TypeScript and uses a JSON file as a database to store submissions.

![Screenshot 2024-06-21 223230](https://github.com/SandSnorter/Desktop-App-Backend_Slidely-AI_Submission/assets/121429638/b5abdc91-3714-4c67-8056-77c020860036)
![Screenshot 2024-06-21 223218](https://github.com/SandSnorter/Desktop-App-Backend_Slidely-AI_Submission/assets/121429638/8a96c592-2d11-4ce7-85c4-02e745592a4c)
![Screenshot 2024-06-21 211911](https://github.com/SandSnorter/Desktop-App-Backend_Slidely-AI_Submission/assets/121429638/601d1ee6-ff2f-4163-8bb2-6305a4e8b184)
## Features
- /ping: A GET request that always returns true.
- /submit: A POST request to save submissions.
- /read: A GET request to retrieve a specific submission based on its index.

## Requirements
- Node.js
- npm (Node Package Manager)
- Installation

## Clone the repository:

```bash
  git clone https://github.com/yourusername/slidely-ai-backend.git
```

Navigate to the project directory:

```bash
  cd Desktop-App-Backend_Slidely-AI_Submission
```
Install the dependencies:

```bash
  npm install
```
Running the Server

- Compile the TypeScript code:

```bash
  npx tsc
```
This will create a dist folder with app.js in it

Start the server:

```bash
  node dist/app.js
```

The server will be running locally on http://localhost:3000.

## Endpoints
### 1. /ping
- Method: GET
- Description: This endpoint is used to check if the server is running.
- Response: true
  
### 2. /submit
- Method: POST
- Description: This endpoint is used to save a new submission.
- Parameters:
    - name (string)
    - email (string)
    - phone (string)
    - github_link (string)

### 3. /read
- Method: GET
- Description: This endpoint is used to retrieve a submission by its index.
- Query Parameter:
    - index (number) - 0-based index of the submission to retrieve.

## JSON Database
The submissions are stored in a db.json file. The structure of the JSON file is as follows:
