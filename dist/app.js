"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = 3000;
const dbFilePath = 'db.json';
app.use(express_1.default.json());
app.get('/ping', (req, res) => {
    res.send('True');
});
app.post('/submit', (req, res) => {
    const newSubmission = req.body;
    fs_1.default.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database file');
            return;
        }
        const submissionsData = JSON.parse(data);
        submissionsData.submissions.push(newSubmission);
        fs_1.default.writeFile(dbFilePath, JSON.stringify(submissionsData, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error writing to database file');
                return;
            }
            res.status(200).send('Submission saved successfully');
        });
    });
});
app.get('/read', (req, res) => {
    fs_1.default.readFile(dbFilePath, 'utf8', (err, data) => {
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
