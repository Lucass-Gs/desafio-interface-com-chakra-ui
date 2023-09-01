import { Box, Image, Text } from "@chakra-ui/react";

type TravelImagesProps = {
  src: string;
  alt: string;
  label: string;
};

export function TravelImages({ src, alt, label }: TravelImagesProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      mx={20}
    >
      <Image src={src} alt={alt} mb="4" width="85px" />
      <Text fontSize="xl" mb="4">
        {label}
      </Text>
    </Box>
  );
}
