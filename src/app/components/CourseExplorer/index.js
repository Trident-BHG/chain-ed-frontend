import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";

import CourseCard from "@/app/components/CourseCard";

export default function CourseExplorer() {
  const popularCourses = courses.filter(({ tags }) => {
    return tags.includes("popular");
  });

  const newCourses = courses.filter(({ tags = [] }) => {
    return tags.includes("new");
  });

  return (
    <Tabs width="100%">
      <TabList>
        <Tab>All</Tab>
        <Tab>Most Popular</Tab>
        <Tab>New</Tab>
      </TabList>

      <TabPanels>
        <TabPanel px="0">
          <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
            {courses.map((course, i) => (
              <CourseCard course={course} key={`course-index-${i}`} />
            ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
            {popularCourses.map((course, i) => (
              <CourseCard course={course} key={`course-index-${i}`} />
            ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
            {newCourses.map((course, i) => (
              <CourseCard course={course} key={`course-index-${i}`} />
            ))}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

const courses = [
  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Wisdom Umanah",
    fees: "50",
    cashback: "20",
    rating: 4,
    thumbnail: "./course_thumbnails/course1.jpg",
    tags: ["new"],
  },

  {
    title: "Javascript for Beginners",
    type: "development",
    duration: "16",
    author: "Mayank",
    fees: "30",
    cashback: "10",
    rating: 5,
    thumbnail: "./course_thumbnails/course2.jpg",
    tags: ["popular", "new"],
  },
  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Sudhanshu Kumar",
    fees: "50",
    cashback: "20",
    rating: 5,
    thumbnail: "./course_thumbnails/course3.jpg",
    tags: ["popular", "new"],
  },
  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Chinmoy and Alex",
    fees: "50",
    cashback: "20",
    rating: 3,
    thumbnail: "./course_thumbnails/course4.jpg",
    tags: [],
  },

  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Chinmoy and Alex",
    fees: "50",
    cashback: "20",
    rating: 3,
    thumbnail: "./course_thumbnails/course4.jpg",
    tags: [],
  },
  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Chinmoy and Alex",
    fees: "50",
    cashback: "20",
    rating: 3,
    thumbnail: "./course_thumbnails/course4.jpg",
    tags: [],
  },
  {
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    type: "development",
    duration: "16",
    author: "Chinmoy and Alex",
    fees: "50",
    cashback: "20",
    rating: 3,
    thumbnail: "./course_thumbnails/course4.jpg",
    tags: [],
  },
];
