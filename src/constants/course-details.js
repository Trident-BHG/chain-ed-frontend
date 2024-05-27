const courseDetails = [
  {
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
              link: "/course/javascript-for-beginners/lecture/introduction-to-javascript/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Hello World in Javacript",
              content: {
                type: "video",
                duration: 2.0,
              },
              link: "/course/javascript-for-beginners/lecture/hello-world-in-javascript/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Where to put Javascipt",
              content: {
                type: "video",
                duration: 5.0,
                cashback: 2.5,
              },
              link: "/course/javascript-for-beginners/lecture/where-to-put-javascript/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 1.5,
              },
              link: "/course/javascript-for-beginners/lecture/chapter-task-1/quiz",
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
              link: "/course/javascript-for-beginners/lecture/course-intro/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Javascript Basics",
              content: {
                type: "video",
                duration: 2,
              },
              link: "/course/javascript-for-beginners/lecture/javascript-basics/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Javascript syntax",
              content: {
                type: "video",
                duration: 5,
              },
              link: "/course/javascript-for-beginners/lecture/Javascript-syntax/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 2.5,
              },
              link: "/course/javascript-for-beginners/lecture/chapter-task-2/quiz",
            },
          ],
        },
        {
          name: "Chapter 1: Hello Javascript",
          subSections: [
            {
              name: "For loop in Javascript",
              content: {
                type: "text",
                duration: 4,
              },
              link: "/course/javascript-for-beginners/lecture/for-loop-in-js/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "While loop in js",
              content: {
                type: "video",
                duration: 2,
              },
              link: "/course/javascript-for-beginners/lecture/While-loop-in-js/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Javascript single thread architecture",
              content: {
                type: "video",
                duration: 5,
              },
              link: "/course/javascript-for-beginners/lecture/Javascript-single-thread-architecture/overview",
              videoSrc:
                "https://www.youtube.com/embed/xv9OmztShIw?si=kPKxOUFzRrWl4zV3",
            },
            {
              name: "Chapter task",
              content: {
                type: "quiz",
                cashback: 2.5,
              },
              link: "/course/javascript-for-beginners/lecture/chapter-task-3/quiz",
            },
          ],
        },
      ],
    },
  },
];

module.exports = {
  courseDetails,
};
