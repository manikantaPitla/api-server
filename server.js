const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 2020;

app.use(cors());
app.use(express.json());

let studentData = [];

app.get('/studentData', (req, res) => {
  res.send(studentData);
});

app.get('/studentData/:hallticket', (req, res) => {
  const hallticket = req.params.hallticket;

  const entry = studentData.find(entry => entry.hallticket === Number(hallticket));

  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

app.post('/studentData', (req, res) => {
  const { id, hallticket, name, student_details, obtained_marks, result } = req.body;

  try {
    const existingEntry = studentData.find(entry => entry.hallticket === hallticket);
    if (existingEntry) {
      return res.status(400).json({ message: 'Hallticket value must be unique' });
    }

    const newEntry = {
      id,
      hallticket,
      name,
      student_details,
      obtained_marks,
      result
    };

    studentData.push(newEntry);

    res.status(200).json({ message: 'Data added successfully!' });
  } catch (error) {
    let errorMessage = 'An error occurred while processing the request';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({ message: errorMessage });
  }
});

app.put('/studentData/:hallticket', (req, res) => {
  const hallticket = req.params.hallticket;
  const { id, name, student_details, obtained_marks, result } = req.body;

  try {
    const existingEntry = studentData.find(entry => entry.hallticket === Number(hallticket));
    if (!existingEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    existingEntry.id = id;
    existingEntry.name = name;
    existingEntry.student_details = student_details;
    existingEntry.obtained_marks = obtained_marks;
    existingEntry.result = result;

    res.status(200).json({ message: 'Data updated successfully!' });
  } catch (error) {
    let errorMessage = 'An error occurred while processing the request';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({ message: errorMessage });
  }
});

app.delete('/studentData/:hallticket', (req, res) => {
  const hallticket = req.params.hallticket;

  try {
    const index = studentData.findIndex(entry => entry.hallticket === Number(hallticket));
    if (index === -1) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    studentData.splice(index, 1);

    res.status(200).json({ message: 'Data deleted successfully!' });
  } catch (error) {
    let errorMessage = 'An error occurred while processing the request';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({ message: errorMessage });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
