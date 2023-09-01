import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Text, Stack, Tooltip } from "@chakra-ui/react";

type InfoContinenteProps = {
  countries: number;
  languages: number;
  cities: number;
  margin?: number;
};

export function InfoContinente({
  countries,
  languages,
  cities,
  margin = 0,
}: InfoContinenteProps) {
  return (
    <Flex justify={["space-between", "space-around", "center"]} mx="6">
      <Stack spacing={0} mx={margin}>
        <Text color="highlight.900" fontSize="1.5rem" fontWeight="bold">
          {countries}
        </Text>
        <Text fontSize="1.15rem">países</Text>
      </Stack>
      <Stack spacing={0} mx={margin}>
        <Text color="highlight.900" fontSize="1.5rem" fontWeight="bold">
          {languages}
        </Text>
        <Text fontSize="1.15rem">línguas</Text>
      </Stack>
      <Stack spacing={0}>
        <Text color="highlight.900" fontSize="1.5rem" fontWeight="bold">
          {cities}
        </Text>
        <Text fontSize="1.15rem">
          cidades
          <span> +100</span>
          <Tooltip
            label="Número de cidades no top 100 cidades mais visitadas no mundo."
            fontSize="md"
          >
            <InfoOutlineIcon ml={2} color="dark.info-50" width={3} />
          </Tooltip>
        </Text>
      </Stack>
    </Flex>
  );
}
