import { FaChevronLeft } from "react-icons/fa";
import { Flex, IconButton, Image } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const isHomePage = pathname === "/";
  return (
    <Flex
      as="header"
      w="100%"
      h={["50", "100"]}
      align="center"
      justify="center"
    >
      {!isHomePage && (
        <IconButton
          icon={<FaChevronLeft style={{ fontSize: "0.75rem" }} />}
          backgroundColor={"#FFFFFF"}
          onClick={handleGoBack}
          aria-label="Go Back"
          position="absolute"
          left="10px"
        />
      )}
      <Image src="/Logo.svg" alt="Logo" boxSize={["81px", "184px"]} />
    </Flex>
  );
};

export default Header;
