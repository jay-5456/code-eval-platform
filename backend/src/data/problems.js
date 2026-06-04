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
        input: "100 2",
        output: "200"
      },
      {
        input: "999 0",
        output: "0"
      }
    ]
  }
];

module.exports = problems;