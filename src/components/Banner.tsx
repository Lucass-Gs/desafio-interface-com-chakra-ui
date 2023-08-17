import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const Banner = () => {
  const isBannerShow = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      position="relative"
      backgroundImage="/Background.png"
      bgSize="cover"
      as="div"
      w="100%"
      h={["200", "335"]}
      direction="column"
      overflow="hidden"
    >
      <Text
        fontSize={[20, 36]}
        fontWeight="medium"
        color="light.heading-text"
        ml={["16px", "60px", "120px", "60px", "150px"]}
        mt={["28px", "80px"]}
      >
        5 Continentes,
      </Text>
      <Text
        fontSize={[20, 36]}
        fontWeight="medium"
        color="light.heading-text"
        ml={["16px", "60px", "120px", "60px", "150px"]}
        mb="3"
      >
        infinitas possibilidades.
      </Text>
      <Text
        fontSize={[14, 20]}
        color="light.info"
        ml={["16px", "60px", "120px", "60px", "150px"]}
      >
        Chegou a hora de tirar do papel a viagem que você.
      </Text>
      <Text
        fontSize={[14, 20]}
        color="light.info"
        ml={["16px", "60px", "120px", "60px", "150px"]}
      >
        sempre sonhou.
      </Text>

      {isBannerShow && (
        <Image
          position="relative"
          src="/Airplane.svg"
          alt="airplane"
          h="270"
          top="-165px"
          left={{ lg: "300px", xl: "350px" }}
          mr="5"
        />
      )}
    </Flex>
  );
};

export default Banner;
