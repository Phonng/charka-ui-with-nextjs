import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

export default function Details() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="start">
        ≈<Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={4} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Phong" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Vũ" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Khu công nghệ cao Hoà Lạc" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Hà Nội" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="Việt Nam">Việt Nam</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}
