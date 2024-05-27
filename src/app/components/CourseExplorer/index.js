"use cleint";

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
import { courses } from "@/constants";

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
