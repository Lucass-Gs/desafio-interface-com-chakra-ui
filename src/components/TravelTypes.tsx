import {
  Flex,
  Image,
  Box,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const TravelTypes = () => {
  const [isMobile] = useMediaQuery("(max-width: 968px)");
  return (
    <Flex
      w="100%"
      px={{ base: 4, xl: "170px" }}
      mt="40px"
      justify="space-around"
      flexWrap="wrap"
    >
      {isMobile && (
        <>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 36]} fontWeight="medium">
              vida noturna
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 36]} fontWeight="medium">
              praia
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 36]} fontWeight="medium">
              moderno
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 36]} fontWeight="medium">
              clássico
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 36]} fontWeight="medium">
              e mais ...
            </Text>
          </Box>
        </>
      )}
      {!isMobile && (
        <Box>
          <Image
            src="/vida_noturna.svg"
            alt="taça"
            mb="4"
            ml="4"
            width="85px"
          />
          <Text fontSize="xl">vida noturna</Text>
        </Box>
      )}
    </Flex>
  );
};

export default TravelTypes;
