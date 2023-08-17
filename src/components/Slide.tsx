import { Flex, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

type SwiperProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};

export const Slide = ({ imgSrc, title, subtitle }: SwiperProps) => {
  return (
    <Flex
      h={{ base: "20rem", md: "30rem" }}
      backgroundImage={imgSrc}
      bgSize="cover"
      bgPos="center"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Text
          zIndex={2}
          color={"light.heading-text"}
          fontWeight={"bold"}
          fontSize={{ base: "3xl", md: "5xl" }}
          textAlign={"center"}
        >
          {title}
        </Text>
        <Text
          zIndex={2}
          color={"light.heading-text"}
          fontWeight={"bold"}
          fontSize={{ base: "lg", md: "2xl" }}
          textAlign={"center"}
        >
          {subtitle}.
        </Text>
      </Stack>
    </Flex>
  );
};
