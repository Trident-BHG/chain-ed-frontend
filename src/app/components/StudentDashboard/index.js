"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  IconProps,
  useColorModeValue,
  VStack,
  Grid,
  GridItem,
  Badge,
  HStack,
  Spacer
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

import ArrowRight from "@/app/components/icons/ArrowRight";
import { px } from "framer-motion";

export default function () {
    const property = {
        imageUrl: './student_img.png',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
  return (
    <Container maxWidth="100%" borderTop="1px" borderColor="gray.100" pt="8">
      <Container maxWidth="100%">
        <VStack>
            <Box border="1px solid #225CF3" borderRadius="8px" bg="#ECF1FE" w="100%" h="156px">
                <Text lineHeight="26px" fontSize="20px" fontWeight="500">Welcome</Text>
                <Box color="#225CF3" fontWeight="semibold" fontSize="4xl">Mayank Chhipa</Box>
                <Box position={"relative"} overflow={"hidden"} align="right" top="-120px" left="85.55px">
                    <Image
                     alt="Student Image"
                     fit="contain"
                     w="241px"
                     h="222px"
                     src={"./student_img.png"}
                    />
                </Box>
            </Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} w="100%">
                <GridItem w='100%' h='140' bg='#ECF1FE' border="1px solid #225CF3" borderRadius="8px">
                </GridItem>
                <GridItem w='100%' h='140' bg='#ECF1FE' border="1px solid #225CF3" borderRadius="8px">
                <Box w="100%" mr={"16px"}>
                        <img src="./loading.svg"/>
                        <Text align={"right"}>24</Text>
                    </Box>
                    <Box w="100%"></Box>
                </GridItem>
                <GridItem w='100%' h='140' bg='#ECF1FE' border="1px solid #225CF3" borderRadius="8px">
                <Box w="100%" mr={"16px"}>
                        <img src="./earnings.svg"/>
                        <Text align={"right"}>$46</Text>
                    </Box>
                    <Box w="100%"></Box>
                </GridItem>
                <GridItem w='100%' h='140' bg='#ECF1FE' border="1px solid #225CF3" borderRadius="8px">
                <Box w="100%" mr={"16px"}>
                        <img src="./cashback.svg"/>
                        <Text align={"right"}>$16</Text>
                    </Box>
                    <Box w="100%"></Box>
                </GridItem>
            </Grid>
            <Box border="2px" w="100%" h="483px">
            <Flex >
            
            {Array(4).fill('').map((_, i) => (
                <Box w="2xs">
                <Box w='2xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        >
                        {property.title}
                        </Box>

                        <Box>
                        {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                                />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {
                    i != 0 || i%3==0 ?  "" : <Spacer/>
                }
                
                </Box>
                ))}
                
            </Flex>
            </Box>
        </VStack>
      </Container>
    </Container>
  );
}


// https://v2.chakra-ui.com/docs/components/box
