const courseDetails = [
  {
    id: 1,
    title: "Become a Certified Web Developer: HTML, CSS and Javascript",
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
          name: "Introduction",
          subSections: [
            {
              name: "Introduction to HTML, CSS and Javascript",
              content: {
                type: "video",
                duration: 4,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/introduction-to-html-css-javascript/overview",
              videoSrc:
                "https://www.youtube.com/embed/EDJ9YbHXRZA?si=tXkIbSz_yl0Z-PKt",
              videoDescription:
                "This is an introduction lecture, here we will understand about what is HTML, CSS and Javascript. Why these technologies is used and how they work with each other.",
            },
            {
              name: "Install VS Code and Extensions",
              content: {
                type: "video",
                duration: 2.0,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/install-vs-code-and-extensions/overview",
              videoSrc:
                "https://www.youtube.com/embed/Hz3U2DCv13g?si=QLYEqu71Ykzn-_xR",
              videoDescription:
                "Here we be installing a code editor, namely Visual Studio Code, we can use any other code editor as well. Here we will also see the large array of extensions which are available to use, that makes web development much more easier and fun.",
            },
            {
              name: "Basic Structure of HTML website",
              content: {
                type: "video",
                duration: 5.0,
                cashback: 2.5,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/basic-structure-of-html-website/overview",
              videoSrc:
                "https://www.youtube.com/embed/EoRS7ARtX6M?si=LDtEIChJjYRR2xwm",
              videoDescription:
                "In this lecture we will be going through the basic structure of the HTML website, we will learn about html , body, head tags and also learn what do they signify and how they can be used.",
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
          name: "HTML Tutorials",
          subSections: [
            {
              name: "Heading and Paragraph Tag",
              content: {
                type: "video",
                duration: 4,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/heading-and-paragraph-tag/overview",
              videoSrc:
                "https://www.youtube.com/embed/-KRmOkwEorA?si=VCHDQLux9R0X7xAX",
              videoDescription:
                "Here we will be learning about yet another set of tags, called the heading tag and the paragraph tag.",
            },
            {
              name: "Links and Attributes in HTML",
              content: {
                type: "video",
                duration: 2,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/links-and-attributes-in-html/overview",
              videoSrc:
                "https://www.youtube.com/embed/VjNNIUq3I7Q?si=okzogS7cciksR9bV",
              videoDescription:
                "Here we will learn what are the links and the attributes tag in HTML",
            },
            {
              name: "List and Tables",
              content: {
                type: "video",
                duration: 5,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/list-and-tables/overview",
              videoSrc:
                "https://www.youtube.com/embed/t3i_mckFoP8?si=qt5au575_UcEngjp",
              videoDescription:
                "Here we will learn about list tags, namely ul, li and tables tag namely th, tr, td etc.",
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
          name: "CSS Tutorials",
          subSections: [
            {
              name: "Introduction to CSS",
              content: {
                type: "text",
                duration: 4,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/introduction-to-css/overview",
              videoSrc:
                "https://www.youtube.com/embed/2sgZmEw5nis?si=YyTIz3Ru5fPItxGh",
              videoDescription:
                "Here we will be learning about the CSS and its fundamentals.",
            },
            {
              name: "Inline, Internal and External CSS",
              content: {
                type: "video",
                duration: 2,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/inline-internal-external-css/overview",
              videoSrc:
                "https://www.youtube.com/embed/t9r5CHuwPqo?si=8vHh9lVN-S6aITpc",
              videoDescription:
                "Here we will learn how you can apply CSS to your html script, there are three ways in which we can apply CSS to our HTML, we will also be looking at the advantages and disadvatange of each of them",
            },
            {
              name: "CSS Selectors",
              content: {
                type: "video",
                duration: 5,
              },
              link: "/course/become-a-certified-web-developer-html-css-js/lecture/css-selectors/overview",
              videoSrc:
                "https://www.youtube.com/embed/_YDpVf-VFpY?si=3Ak9_hzEcd13jF0M",
              videoDescription: "Here we will learn about selectors in css.",
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
