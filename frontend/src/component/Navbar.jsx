import React from 'react'
import { Container, Flex, Spacer, HStack, Text, Button, useColorMode} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useProductStore } from '../store/Product';



const Navbar = () => {
const { colorMode, toggleColorMode } = useColorMode();
const { products } = useProductStore();

  return (
  <Container maxW={"1140px"} px={2} >
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row",
      }} 
    >

<Text
 fontSize= {{ base: "22", sm: "28"}}
 fontWeight={'extrabold'}
 textTransform={"uppercase"}
 textAlign={"center"}
 bgGradient={"linear(to-r, #7928CA, #FF0080)"}
 bgClip={"text"}
>

<Link to={"/"}>Candle Chronicles 🛒</Link>
</Text>

<HStack spacing={2} alignItems={"center"}>
<Link to={"/create"}>
<Button>
  <PlusSquareIcon fontSize={20} />
</Button>
</Link>

<Button onClick={toggleColorMode}>
  {colorMode === "light" ? <IoMoon />:<LuSun size="20" />}
</Button>

     </HStack>
    </Flex>
  </Container>
);
};

export default Navbar