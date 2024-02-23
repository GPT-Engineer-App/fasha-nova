import React from "react";
import { Box, Flex, Text, Image, Button, Heading, Input, Stack, InputGroup, InputLeftElement, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const Index = () => {
  // Sample product data (would usually be fetched from a database)
  const products = [
    { id: 1, name: "Stylish Dress", price: "$49.99", image: 'https://images.unsplash.com/photo-1466837703337-242d94d6b8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwZHJlc3N8ZW58MHx8fHwxNzA4NjYxNjg4fDA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Casual Shirt", price: "$29.99", image: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaGlydHxlbnwwfHx8fDE3MDg2NjE2ODh8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 3, name: "Elegant Top", price: "$34.99", image: 'https://images.unsplash.com/photo-1527628217451-b2414a1ee733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdG9wfGVufDB8fHx8MTcwODY2MTY4OXww&ixlib=rb-4.0.3&q=80&w=1080' },
    // Add more products as needed
  ];

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex justifyContent="space-between" alignItems="center" p={4} borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">
          Fashonova
        </Heading>
        <InputGroup maxW="600px" w="100%">
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search for products, trends, and more" />
        </InputGroup>
        <Flex alignItems="center">
          <Button variant="ghost" leftIcon={<FaUser />} mr={2}>
            Login
          </Button>
          <Button variant="ghost" leftIcon={<FaShoppingBag />}>
            Cart
          </Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Center bg="pink.100" h="500px" color="white" flexDirection="column">
        <Heading as="h2" size="2xl" mb={4}>
          New Arrivals
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover the latest trends
        </Text>
        <Button colorScheme="pink" size="lg">
          Shop Now
        </Button>
      </Center>

      {/* Product Display */}
      <Wrap justify="center" p={4} spacing="30px">
        {products.map((product) => (
          <WrapItem key={product.id} maxW="sm" boxShadow="md" borderRadius="md" overflow="hidden">
            <Box textAlign="center">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
                <Button mt={2} colorScheme="pink" size="sm">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      {/* Footer */}
      <Box bg="gray.100" p={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Fashonova. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
