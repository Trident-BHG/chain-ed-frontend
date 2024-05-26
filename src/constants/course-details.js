const courseDetails = [{
    id: 1,
    title: "Javascript for Beginners",
    type: "development",
    duration: "15 days",
    author: "Mayank Chhipa",
    fees: "30",
    cashback: "10",
    rating: 4,
    thumbnail: "./course_thumbnails/course2.jpg",
    tags: ["popular", "new"],
    details: {
      noOfEnrolledStudents: 100,
      sections: [
        {
          name: "Introduction to Javascript",
          subSections: [
            {
              name: "Course Intro",
              content: {
                type: "text",
                duration: 4,
              },
            },
            {
              name: "Hello World in Javacript",
              content: {
                type: "video",
                duration: 2.00,
              },
            },
            {
              name: "Where to put Javascipt",
              content: {
                type: "video",
                duration: 5.00,
                cashback:2.5
              },
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 1.5,
              },
            },
          ],
        },
        {
          name: "Javascript 2023/2024 edition",
          subSections: [
            {
              name: "Course Intro",
              content: {
                type: "text",
                duration: 4,
              },
            },
            {
              name: "Hello World in Javacript",
              content: {
                type: "video",
                duration: 2,
              },
            },
            {
              name: "Where to put Javascipt",
              content: {
                type: "video",
                duration: 5,
              },
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 2.5,
              },
            },
          ],
        },
        {
          name: "Chapter 1: Hello Javascript",
          subSections: [
            {
              name: "Course Intro",
              content: {
                type: "text",
                duration: 4,
              },
            },
            {
              name: "Hello World in Javacript",
              content: {
                type: "video",
                duration: 2,
              },
            },
            {
              name: "Where to put Javascipt",
              content: {
                type: "video",
                duration: 5,
              },
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 2.5,
              },
            },
          ],
        },
      ],
    },
  }];

  module.exports = {
    courseDetails
  }