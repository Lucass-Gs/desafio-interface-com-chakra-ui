import { Flex, Stack, Text } from "@chakra-ui/react";

type BannerProps = {
  imgSrc: string;
  title: string;
};

export const BannerContinente = ({ imgSrc, title }: BannerProps) => {
  return (
    <Flex
      h={{ base: "10rem", md: "30rem" }}
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
      </Stack>
    </Flex>
  );
};
