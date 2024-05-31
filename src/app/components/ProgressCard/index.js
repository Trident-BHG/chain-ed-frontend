import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Flex,
  Box,
  Spacer,
  Icon,
  HStack,
  Progress
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function CourseCard({ course }) {
  const {
    title,
    type,
    daysLeft,
    earnings,
    completion,
    thumbnail = "./course_thumbnails/course1.jpg",
  } = course || {};
  return (
    <Card maxW="300px">
      <CardBody p={0}>
        <Box position="relative">
          <Image
            src={thumbnail}
            borderRadius="base"
            borderBottomRadius="none"
            alt="course thumbnail"
          />
        </Box>
        <Stack mt="6" spacing="2" p="2">
          <Flex color="gray.600">
            <Text fontSize={"xs"} fontWeight={500}>{type.toUpperCase()}</Text>
            <Spacer />
            <Text fontSize={"xs"} fontWeight={500}>{daysLeft} days left</Text>
          </Flex>
          <Text fontSize="large" style={{ fontWeight: "500" }}>
            {title}
          </Text>
          <Flex>
            <Text fontSize={"xs"} fontWeight={500}>Total Earnings</Text>
            <Spacer/>
            <Text fontWeight={500}>$50</Text>
          </Flex>
          <Progress colorScheme='blue' height="7px" value={completion} borderRadius={2} />
          <Text fontSize={"2xs"} fontWeight={500}>{completion}% completion</Text>
          {completion == 100 ? <Button as="a" href="https://testnets.opensea.io/assets/arbitrum-sepolia/0x15571497160a656868b8044d3d3bcb8da6c95490/2701" target="_blank">Show Certificate</Button> : ""}
          
        </Stack>
      </CardBody>
      <CardFooter p="2" style={{ fontWeight: 500 }}>
      </CardFooter>
    </Card>
  );
}
