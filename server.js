const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 2020;

app.use(cors());
app.use(express.json());

let studentData = [
    {
        "id": 1000,
        "hallticket": 1987654321,
        "name": "Harsha Reddy",
        "student_details": {
          "father_name": "Ramesh Reddy",
          "mother_name": "Lakshmi Reddy",
          "date_of_birth": "2000-01-22",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 94,
            "second_lang_1": 85,
            "maths_a_1": 62,
            "maths_b_1": 72,
            "physics_1": 50,
            "chemistry_1": 45
          },
          "year_two": {
            "english_2": 94,
            "second_lang_2": 96,
            "maths_a_2": 65,
            "maths_b_2": 68,
            "physics_2": 50,
            "chemistry_2": 52,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 891,
          "grade": "A"
        }
      },
      {
        "id": 1002,
        "hallticket": 1987654322,
        "name": "Arjun Netha",
        "student_details": {
          "father_name": "Suresh Netha",
          "mother_name": "Radha Netha",
          "date_of_birth": "2001-05-12",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 90,
            "second_lang_1": 84,
            "maths_a_1": 58,
            "maths_b_1": 62,
            "physics_1": 55,
            "chemistry_1": 48
          },
          "year_two": {
            "english_2": 95,
            "second_lang_2": 92,
            "maths_a_2": 66,
            "maths_b_2": 60,
            "physics_2": 45,
            "chemistry_2": 56,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 869,
          "grade": "A"
        }
      },
      {
        "id": 1003,
        "hallticket": 1987654323,
        "name": "Sai Kiran",
        "student_details": {
          "father_name": "Ramesh Kiran",
          "mother_name": "Sarada Kiran",
          "date_of_birth": "2000-02-24",
          "course": "CEC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 85,
            "second_lang_1": 75,
            "maths_a_1": 56,
            "maths_b_1": 56,
            "physics_1": 42,
            "chemistry_1": 42
          },
          "year_two": {
            "english_2": 90,
            "second_lang_2": 83,
            "maths_a_2": 60,
            "maths_b_2": 53,
            "physics_2": 40,
            "chemistry_2": 58,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 798,
          "grade": "B"
        }
      },
      {
        "id": 1004,
        "hallticket": 1987654324,
        "name": "Ajay Patel",
        "student_details": {
          "father_name": "Anil Patel",
          "mother_name": "Sudha Patel",
          "date_of_birth": "2000-06-12",
          "course": "CEC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 75,
            "second_lang_1": 65,
            "maths_a_1": 42,
            "maths_b_1": 49,
            "physics_1": 45,
            "chemistry_1": 50
          },
          "year_two": {
            "english_2": 70,
            "second_lang_2": 72,
            "maths_a_2": 58,
            "maths_b_2": 56,
            "physics_2": 49,
            "chemistry_2": 51,
            "physics_practical_2": 29,
            "chemistry_practical_2": 28
          }
        },
        "result": {
          "marks": 739,
          "grade": "B"
        }
      },
      {
        "id": 1005,
        "hallticket": 1987654325,
        "name": "Arjun Reddy",
        "student_details": {
          "father_name": "Raju Reddy",
          "mother_name": "Deepa Reddy",
          "date_of_birth": "2001-07-19",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 85,
            "second_lang_1": 79,
            "maths_a_1": 43,
            "maths_b_1": 56,
            "physics_1": 48,
            "chemistry_1": 49
          },
          "year_two": {
            "english_2": 58,
            "second_lang_2": 91,
            "maths_a_2": 54,
            "maths_b_2": 51,
            "physics_2": 55,
            "chemistry_2": 39,
            "physics_practical_2": 28,
            "chemistry_practical_2": 28
          }
        },
        "result": {
          "marks": 764,
          "grade": "B"
        }
      },
      {
        "id": 1006,
        "hallticket": 1987654326,
        "name": "Rajesh Goud",
        "student_details": {
          "father_name": "Rakesh Goud",
          "mother_name": "Prathima Goud",
          "date_of_birth": "2001-04-03",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 72,
            "second_lang_1": 65,
            "maths_a_1": 39,
            "maths_b_1": 35,
            "physics_1": 42,
            "chemistry_1": 45
          },
          "year_two": {
            "english_2": 58,
            "second_lang_2": 62,
            "maths_a_2": 48,
            "maths_b_2": 42,
            "physics_2": 39,
            "chemistry_2": 42,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 647,
          "grade": "C"
        }
      },
      {
        "id": 1007,
        "hallticket": 1987654327,
        "name": "Sai Krishna",
        "student_details": {
          "father_name": "Raghavendra",
          "mother_name": "Radha",
          "date_of_birth": "2000-11-29",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 79,
            "second_lang_1": 71,
            "maths_a_1": 42,
            "maths_b_1": 49,
            "physics_1": 42,
            "chemistry_1": 49
          },
          "year_two": {
            "english_2": 64,
            "second_lang_2": 72,
            "maths_a_2": 52,
            "maths_b_2": 56,
            "physics_2": 49,
            "chemistry_2": 39,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 722,
          "grade": "C"
        }
      },
      {
        "id": 1008,
        "hallticket": 1987654328,
        "name": "Keerthi Sharma",
        "student_details": {
          "father_name": "Anand Sharma",
          "mother_name": "Jaya Sharma",
          "date_of_birth": "2001-05-12",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 98,
            "second_lang_1": 92,
            "maths_a_1": 65,
            "maths_b_1": 62,
            "physics_1": 55,
            "chemistry_1": 52
          },
          "year_two": {
            "english_2": 94,
            "second_lang_2": 96,
            "maths_a_2": 63,
            "maths_b_2": 62,
            "physics_2": 51,
            "chemistry_2": 49,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 897,
          "grade": "A"
        }
      },
      {
        "id": 1009,
        "hallticket": 1987654329,
        "name": "Jaya Sharma",
        "student_details": {
          "father_name": "Prakash Rao",
          "mother_name": "Padma Rao",
          "date_of_birth": "2001-12-12",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 93,
            "second_lang_1": 96,
            "maths_a_1": 68,
            "maths_b_1": 69,
            "physics_1": 53,
            "chemistry_1": 54
          },
          "year_two": {
            "english_2": 92,
            "second_lang_2": 90,
            "maths_a_2": 62,
            "maths_b_2": 66,
            "physics_2": 50,
            "chemistry_2": 46,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 897,
          "grade": "A"
        }
      },
      {
        "id": 1010,
        "hallticket": 1987654330,
        "name": "Ravi Yadav",
        "student_details": {
          "father_name": "Venkat Yadav",
          "mother_name": "Suma Yadav",
          "date_of_birth": "1999-11-10",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 56,
            "second_lang_1": 65,
            "maths_a_1": 34,
            "maths_b_1": 35,
            "physics_1": 42,
            "chemistry_1": 44
          },
          "year_two": {
            "english_2": 71,
            "second_lang_2": 62,
            "maths_a_2": 36,
            "maths_b_2": 42,
            "physics_2": 43,
            "chemistry_2": 39,
            "physics_practical_2": 27,
            "chemistry_practical_2": 27
          }
        },
        "result": {
          "marks": 623,
          "grade": "D"
        }
      },
      {
        "id": 1011,
        "hallticket": 1987654331,
        "name": "Ayesha Khan",
        "student_details": {
          "father_name": "Yusuf Khan",
          "mother_name": "Fatima Khan",
          "date_of_birth": "2002-05-25",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 72,
            "second_lang_1": 91,
            "maths_a_1": 62,
            "maths_b_1": 51,
            "physics_1": 42,
            "chemistry_1": 48
          },
          "year_two": {
            "english_2": 83,
            "second_lang_2": 95,
            "maths_a_2": 35,
            "maths_b_2": 56,
            "physics_2": 42,
            "chemistry_2": 49,
            "physics_practical_2": 29,
            "chemistry_practical_2": 28
          }
        },
        "result": {
          "marks": 783,
          "grade": "A"
        }
      },
      {
        "id": 1012,
        "hallticket": 1987654332,
        "name": "Zara Ahmed",
        "student_details": {
          "father_name": "Sameer Ahmed",
          "mother_name": "Aisha Ahmed",
          "date_of_birth": "2002-02-12",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 56,
            "second_lang_1": 62,
            "maths_a_1": 41,
            "maths_b_1": 39,
            "physics_1": 42,
            "chemistry_1": 46
          },
          "year_two": {
            "english_2": 42,
            "second_lang_2": 49,
            "maths_a_2": 48,
            "maths_b_2": 43,
            "physics_2": 40,
            "chemistry_2": 41,
            "physics_practical_2": 29,
            "chemistry_practical_2": 28
          }
        },
        "result": {
          "marks": 606,
          "grade": "B"
        }
      },
      {
        "id": 1013,
        "hallticket": 1987654333,
        "name": "Amelia Thomas",
        "student_details": {
          "father_name": "David Thomas",
          "mother_name": "John Mathew",
          "date_of_birth": "2000-08-01",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 51,
            "second_lang_1": 60,
            "maths_a_1": 38,
            "maths_b_1": 34,
            "physics_1": 41,
            "chemistry_1": 34
          },
          "year_two": {
            "english_2": 52,
            "second_lang_2": 61,
            "maths_a_2": 41,
            "maths_b_2": 38,
            "physics_2": 38,
            "chemistry_2": 32,
            "physics_practical_2": 28,
            "chemistry_practical_2": 28
          }
        },
        "result": {
          "marks": 576,
          "grade": "C"
        }
      },
      {
        "id": 1014,
        "hallticket": 1987654334,
        "name": "Pranitha Guptha",
        "student_details": {
          "father_name": "Ashok Gupta",
          "mother_name": "Sunitha Gupta",
          "date_of_birth": "2001-02-20",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 94,
            "second_lang_1": 98,
            "maths_a_1": 70,
            "maths_b_1": 68,
            "physics_1": 55,
            "chemistry_1": 54
          },
          "year_two": {
            "english_2": 98,
            "second_lang_2": 96,
            "maths_a_2": 70,
            "maths_b_2": 67,
            "physics_2": 56,
            "chemistry_2": 53,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 937,
          "grade": "A"
        }
      },
      {
        "id": 1015,
        "hallticket": 1987654335,
        "name": "Siddharth Tiwari",
        "student_details": {
          "father_name": "Mohan Tiwari",
          "mother_name": "Neha Tiwari",
          "date_of_birth": "2000-07-01",
          "course": "MPC",
          "month_and_year_of_pass": "MARCH 2019",
          "medium": "ENGLISH"
        },
        "obtained_marks": {
          "year_one": {
            "english_1": 54,
            "second_lang_1": 62,
            "maths_a_1": 32,
            "maths_b_1": 36,
            "physics_1": 38,
            "chemistry_1": 39
          },
          "year_two": {
            "english_2": 62,
            "second_lang_2": 59,
            "maths_a_2": 45,
            "maths_b_2": 41,
            "physics_2": 39,
            "chemistry_2": 40,
            "physics_practical_2": 29,
            "chemistry_practical_2": 29
          }
        },
        "result": {
          "marks": 605,
          "grade": "B"
        }
      }
];

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

function validateStudentData(req, res, next) {
  const { id, hallticket, name, student_details, obtained_marks, result } = req.body;
  if (!id || !hallticket || !name || !student_details || !obtained_marks || !result) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  next();
}

app.get('/studentData', (req, res) => {
  try {
    res.send(studentData);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving student data: ${error.message}` });
  }
});

app.get('/studentData/:hallticket', (req, res) => {
  try {
    const hallticket = req.params.hallticket;

    const entry = studentData.find(entry => entry.hallticket === Number(hallticket));

    if (entry) {
      res.json({ message: 'Entry retrieved successfully!', data: entry });
    } else {
      res.status(404).json({ message: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving student data: ${error.message}` });
  }
});

app.post('/studentData', validateStudentData, (req, res) => {
  try {
    const { id, hallticket, name, student_details, obtained_marks, result } = req.body;

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

    res.status(201).json({ message: 'Data added successfully!', data: newEntry });
  } catch (error) {
    res.status(500).json({ message: `Error adding student data: ${error.message}` });
  }
});

app.put('/studentData/:hallticket', (req, res) => {
  try {
    const hallticket = req.params.hallticket;
    const updatedFields = req.body;

    const existingEntry = studentData.find(entry => entry.hallticket === Number(hallticket));
    if (!existingEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    Object.assign(existingEntry, updatedFields);

    res.status(200).json({ message: 'Data updated successfully!', data: existingEntry });
  } catch (error) {
    res.status(500).json({ message: `Error updating student data: ${error.message}` });
  }
});

app.delete('/studentData/:hallticket', (req, res) => {
  try {
    const hallticket = req.params.hallticket;

    const index = studentData.findIndex(entry => entry.hallticket === Number(hallticket));
    if (index === -1) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    const deletedEntry = studentData.splice(index, 1);

    res.status(200).json({ message: 'Data deleted successfully!', data: deletedEntry });
  } catch (error) {
    res.status(500).json({ message: `Error deleting student data: ${error.message}` });
  }
});

app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`);
});
