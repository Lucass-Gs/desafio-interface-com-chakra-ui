import { Flex, Text } from "@chakra-ui/react";

export default function Slogan() {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Text fontSize={[20, 32]} fontWeight="medium">
        Vamos nessa?
      </Text>
      <Text fontSize={[20, 32]} fontWeight="medium" align="center">
        Então esccolha seu continente
      </Text>
    </Flex>
  );
}
