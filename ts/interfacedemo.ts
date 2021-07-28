interface Mark {
  subject: string;
  score: number;
}

class Student {
  marksheet: Mark[] = [
    {
      score: 87,
      subject: "English",
    },
    {
      score: 77,
      subject: "Marathi",
    },
    {
      score: 88,
      subject: "Science",
    },
  ];

  printMarksheet() {
    console.log("markseet: ", this.marksheet);
  }
}

class Customer {}

const chandan = new Student();
chandan.printMarksheet();
