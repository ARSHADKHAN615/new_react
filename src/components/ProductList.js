import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import ProductBox from "./ProductBox"
import axios from "../axios-config"
import { useState } from "react"

export default function ProductList() {


    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        const res = await axios.get('/products');
        setProduct(res.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <Box px={2}>
            <Text as='b' fontSize='3xl'>Product List</Text>
            <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
                {
                    isLoading && <Center>
                        <Spinner size='xl' />
                    </Center>
                }

                {
                    products.map((product) => {
                        return <ProductBox key={product.id} product={product} />

                    })
                }
            </Box>
        </Box>
    )
}