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
  import { studentProgress as courses } from "@/constants";
  
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
  
  