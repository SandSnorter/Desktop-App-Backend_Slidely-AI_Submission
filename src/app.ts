import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;
const dbFilePath = 'db.json';

app.use(express.json());

interface Submission {
    name: string;
    email: string;
    phone: string;
    github: string;
}

interface SubmissionsData {
    submissions: Submission[];
}

app.get('/ping', (req, res) => {
    res.send('True');
});

app.post('/submit', (req: Request, res: Response) => {
    const newSubmission: Submission = req.body;

    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file');
            return;
        }

        const submissionsData: SubmissionsData = JSON.parse(data);
        submissionsData.submissions.push(newSubmission);

        fs.writeFile(dbFilePath, JSON.stringify(submissionsData, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error writing to database file');
                return;
            }

            res.status(200).send('Submission saved successfully');
        });
    });
});

app.get('/read', (req: Request, res: Response) => {
    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file');
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});