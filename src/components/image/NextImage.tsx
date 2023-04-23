import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

export default function Image(props) {
  <Box width="100%" heigh="100%" position="relative" bottom={1}>
    <NextImage
      layout="responsive"
      alt="My Picture"
      width={100}
      height={100}
      style={{ borderRadius: "100%" }}
      {...props}
    />
  </Box>;
}
