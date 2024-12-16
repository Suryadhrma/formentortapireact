const express = require('express');
const router = express.Router();

// Mock data for meetings
let meetings = [
    { id: 1, title: "Pertemuan 1", status: "Belum Dibuat" },
    { id: 2, title: "Pertemuan 2", status: "Belum Dibuat" },
    { id: 3, title: "Pertemuan 3", status: "Belum Dibuat" },
    { id: 4, title: "Pertemuan 4", status: "Belum Dibuat" },
];

// Get all meetings
router.get('/', (req, res) => {
    res.json(meetings);
});

// Add a new meeting
router.post('/', (req, res) => {
    const newMeeting = {
        id: meetings.length + 1,
        title: req.body.title,
        status: "Belum Dibuat"
    };
    meetings.push(newMeeting);
    res.status(201).json(newMeeting);
});

// Update a meeting status
router.put('/:id', (req, res) => {
    const meeting = meetings.find(m => m.id === parseInt(req.params.id));
    if (meeting) {
        meeting.status = req.body.status || meeting.status;
        res.json(meeting);
    } else {
        res.status(404).json({ message: 'Meeting not found' });
    }
});

// Delete a meeting
router.delete('/:id', (req, res) => {
    meetings = meetings.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
