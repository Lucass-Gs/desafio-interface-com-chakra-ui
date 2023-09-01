import { Flex, Text } from "@chakra-ui/react";

type CaptionsProps = {
  city: string;
  country: string;
};

export function Captions({ city, country }: CaptionsProps) {
  return (
    <Flex direction="column" alignSelf="start" ml="6" my="6">
      <Text fontSize="lg" fontWeight="medium">
        {city}
      </Text>
      <Text mt="2" fontSize="sm" color="dark.info">
        {country}
      </Text>
    </Flex>
  );
}
