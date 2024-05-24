import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  import ProgressCard from "@/app/components/ProgressCard";
  
  export default function StudentProgress() {
    const ongoingCourses = courses.filter(({ tags }) => {
      return tags.includes("ongoing");
    });
  
    const completedCourses = courses.filter(({ tags = [] }) => {
      return tags.includes("completed");
    });
  
    return (
      <Tabs width="100%">
        <TabList fontWeight={500}>
          <Tab >All</Tab>
          <Tab>Ongoing</Tab>
          <Tab>Completed</Tab>
          <Tab>Claimed</Tab>
        </TabList>
  
        <TabPanels>
          <TabPanel>
            <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
              {courses.map((course, i) => (
                /* <Box > */
                <ProgressCard course={course} key={`course-index-${i}`} />
                /* </Box> */
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
              {ongoingCourses.map((course, i) => (
                /* <Box > */
                <ProgressCard course={course} key={`course-index-${i}`} />
                /* </Box> */
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6}>
              {completedCourses.map((course, i) => (
                /* <Box > */
                <ProgressCard course={course} key={`course-index-${i}`} />
                /* </Box> */
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
      daysLeft: "16",
      author: "Wisdom Umanah",
      earnings: "50",
      completion: "20",
      thumbnail: "./course_thumbnails/course1.jpg",
      tags: ["all"],
    },
  
    {
      title: "Javascript for Beginners",
      type: "development",
      daysLeft: "16",
      author: "Mayank",
      earnings: "30",
      completion: "10",
      thumbnail: "./course_thumbnails/course2.jpg",
      tags: ["all", "ongoing"],
    },
    {
      title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
      type: "development",
      daysLeft: "16",
      author: "Sudhanshu Kumar",
      earnings: "50",
      completion: "20",
      thumbnail: "./course_thumbnails/course3.jpg",
      tags: ["all", "ongoing"],
    },
    {
      title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
      type: "development",
      daysLeft: "16",
      author: "Chinmoy and Alex",
      earnings: "50",
      completion: "20",
      thumbnail: "./course_thumbnails/course4.jpg",
      tags: ["all", "completed"],
    },
  ];
  