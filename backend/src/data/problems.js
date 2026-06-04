const problems = [
  {
    id: 1,

    title: "Add Two Numbers",

    difficulty: "Easy",

    description:
      "Read two integers and print their sum.",

    sampleTestCases: [
      {
        input: "2 3",
        output: "5"
      },
      {
        input: "10 20",
        output: "30"
      }
    ],

    hiddenTestCases: [
      {
        input: "100 200",
        output: "300"
      },
      {
        input: "99999 1",
        output: "100000"
      },
      {
        input: "-5 5",
        output: "0"
      },
      {
        input: "0 0",
        output: "0"
      },
      {
        input: "1 1",
        output: "2"
      },
      {
        input: "-10 -20",
        output: "-30"
      },
      {
        input: "5000 7000",
        output: "12000"
      },
      {
        input: "12345 54321",
        output: "66666"
      },
      {
        input: "-100 50",
        output: "-50"
      },
      {
        input: "999999 999999",
        output: "1999998"
      }
    ]
  },

  {
    id: 2,

    title: "Multiply Two Numbers",

    difficulty: "Easy",

    description:
      "Read two integers and print their product.",

    sampleTestCases: [
      {
        input: "2 3",
        output: "6"
      },
      {
        input: "5 10",
        output: "50"
      }
    ],

    hiddenTestCases: [
      {
        input: "10 10",
        output: "100"
      },
      {
        input: "0 100",
        output: "0"
      },
      {
        input: "-5 10",
        output: "-50"
      },
      {
        input: "-5 -5",
        output: "25"
      },
      {
        input: "100 2",
        output: "200"
      },
      {
        input: "999 0",
        output: "0"
      },
      {
        input: "50 50",
        output: "2500"
      },
      {
        input: "123 456",
        output: "56088"
      },
      {
        input: "1000 1000",
        output: "1000000"
      },
      {
        input: "9999 9999",
        output: "99980001"
      }
    ]
  }
];

module.exports = problems;