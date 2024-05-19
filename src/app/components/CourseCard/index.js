import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  Box,
  Spacer,
  Icon,
  HStack,
} from "@chakra-ui/react";

import ArrowRight from "@/app/components/icons/ArrowRight";

export default function CourseCard({ course }) {
  const {
    title,
    type,
    duration,
    author,
    fees,
    cashback,
    rating,
    thumbnail = "./course_thumbnails/course1.jpg",
  } = course || {};
  return (
    <Card maxW="300px">
      <CardBody p={0}>
        <Box position="relative">
          <Text
            fontSize="sm"
            position="absolute"
            top="2"
            left="2"
            bg="yellow.500"
            p="2"
            borderRadius="base"
            style={{ fontWeight: 500 }}
          >
            ${cashback} cashback
          </Text>
          <Image
            src={thumbnail}
            borderRadius="base"
            borderBottomRadius="none"
            alt="course thumbnail"
          />
        </Box>
        <Stack mt="6" spacing="2" p="2">
          <Flex color="gray.600">
            <Text>{type}</Text>
            <Spacer />
            <Text>{duration} weeks</Text>
          </Flex>
          <Text fontSize="large" style={{ fontWeight: "500" }}>
            {title}
          </Text>
          <Text>By: {author}</Text>
          <Flex>
            <HStack spacing="1">
              {typeof rating === "number" && (
                <>
                  <StarRatings rating={rating} color="yellow.500" />
                  <StarRatings rating={5 - rating} color="gray.500" />
                </>
              )}
            </HStack>
            <Spacer />
            <Text>$50</Text>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter p="2" style={{ fontWeight: 500 }}>
        <Button
          width="100%"
          variant="solid"
          rightIcon={<ArrowRight color={"white"} />}
        >
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}

const StarRatings = ({ rating, color }) => {
  console.log({ rating, color });
  const stars = [...Array(rating).keys()];
  return stars.map((item) => (
    <Icon key={`ratings-${item}`} as={StarIcon} color={color} />
  ));
};
