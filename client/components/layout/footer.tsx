import { Box, Text } from "@chakra-ui/react";

interface FooterProps {

};

const Footer: React.FC<FooterProps> = () => {
  return <Box py={8}>
    <Text align="center">Copyright @ 2020 Daniel</Text>
  </Box>;
};

export default Footer;