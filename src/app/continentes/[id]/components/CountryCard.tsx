import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Captions } from "./Captions";

type CountryCardProps = {
  city: string;
  country: string;
  flag: string;
  img: string;
};

export function CountryCard({ city, country, flag, img }: CountryCardProps) {
  return (
    <Box
      bgColor="light.white"
      border="1px"
      borderRadius="base"
      borderColor="highlight.500"
      my="6"
      width="16rem"
      display="flex"
      flexDirection="column"
      alignSelf="center"
      _hover={{
        bg: "blackAlpha.100",
        transition: "all easy-in-out 0.75s",
      }}
    >
      <Image src={img} alt="a country picture"></Image>
      <Flex justify="space-between">
        <Captions city={city} country={country} />
        <Flex justify="end" align="center" mr="6">
          <Image w={10} h={10} rounded="full" src={flag} alt="UK_Flag"></Image>
        </Flex>
      </Flex>
    </Box>
  );
}
