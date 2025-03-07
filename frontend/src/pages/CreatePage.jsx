import React, { useState } from 'react'
import { h1, image } from 'framer-motion/client';
import { Box, Button, Container, Heading, Input, VStack, useColorModeValue } from '@chakra-ui/react';
import { useProductStore } from '../store/Product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState ({
    name: "",
    price: "",
    image: "",

  });

  const {createProduct}=useProductStore()

  const handleProduct = async () => {
    const {success,message} = await createProduct(newProduct)
    console.log("Success:",success)
    console.log("Message:",message)
  }

  const handleAddProduct = () => 
    console.log(newProduct);
  
  return <Container maxW={"container.sm"}>
    <VStack
    spacing={8}>
      <Heading as={h1} size={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box w={"full"} bg={useColorModeValue("white", "grey.800")} p={6} rounded={"lg"} shadow={"md"}>
      <VStack spacing={4}>
        <Input 
          placeholder='Product Name'
          name = 'name'
          value = {newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
        />
        <Input 
          placeholder='Price'
          name = 'price'
          value = {newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
        />
        <Input 
          placeholder='Image URL'
          name = 'image'
          value = {newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
        />
        <Button colorScheme="blue" onClick={handleAddProduct} w="full">
            Add Product
        </Button>
      </VStack>
      </Box>
    </VStack>
  </Container>

}

export default CreatePage
