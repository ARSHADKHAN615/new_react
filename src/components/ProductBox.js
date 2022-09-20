import { Badge, Box, Image, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

export default function ProductBox({ product }) {
    const toast = useToast()
    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false);

    const addToCart = () => {    
        toast({
            title: 'Product added to cart',
            status: 'success',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
            variant: 'top-accent',
          })
        setIsAdded(true);
    }

    setTimeout(() => {
        setIsAdded(false);
    }, 1000);

    return (
        <Box w={270} borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg' p={3} rounded='md' bg='white' m={1}>
            <Image src={product.image} alt={product.title} w='100%' h='300px' objectFit='cover' />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {product.category}
                    </Badge>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {product.title}
                </Box>

                <Box display='flex' justifyContent='space-between' mt={2}>
                    <Box>
                        $ {product.price}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                        </Box>
                    </Box>
                    <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8} onClick={() => {
                        dispatch(add(product))
                        addToCart()
                        }}>
                        
                        {isAdded ? 'Added' : 'Add'}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}