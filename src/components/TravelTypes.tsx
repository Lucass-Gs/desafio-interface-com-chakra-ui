import {
  Flex,
  Image,
  Box,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { TravelImages } from "./TravelImages";

const TravelTypes = () => {
  const [isMobile] = useMediaQuery("(max-width: 968px)");
  return (
    <Flex
      w="100%"
      px={{ base: 4, xl: "170px" }}
      mt="40px"
      justify="center"
      flexWrap="wrap"
    >
      {isMobile && (
        <>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 32]} fontWeight="medium">
              vida noturna
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 32]} fontWeight="medium">
              praia
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 32]} fontWeight="medium">
              moderno
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 32]} fontWeight="medium">
              clássico
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="8px" h="8px" mx="4" bgColor="highlight.900" rounded="8px" />
            <Text fontSize={[20, 32]} fontWeight="medium">
              e mais ...
            </Text>
          </Box>
        </>
      )}
      {!isMobile && (
        <>
          <TravelImages
            src="/vida_noturna.svg"
            alt="vida noturna"
            label="vida noturna"
          />
          <TravelImages src="/praia.svg" alt="praia" label="praia" />
          <TravelImages src="/moderno.svg" alt="mderno" label="moderno" />
          <TravelImages src="/classico.svg" alt="clássico" label="clássico" />
          <TravelImages src="/e_mais.svg" alt="e mais" label="e mais..." />
        </>
      )}
    </Flex>
  );
};

export default TravelTypes;
