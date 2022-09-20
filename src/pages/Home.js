import { Box } from "@chakra-ui/react";
import  Banner  from "../components/Banner";
import ProductList from "../components/ProductList";



export default function Home() {
  return (
    <Box>
      <Banner title="Hello Home"/>
      <ProductList />
    </Box>
  );
}