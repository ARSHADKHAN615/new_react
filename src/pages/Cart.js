import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    useToast,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice';
export default function Cart() {
    const AllCountItems = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const toast = useToast()

    const removeToCart = () => {    
        toast({
            title: 'Product removed to cart',
            status: 'error',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
            variant: 'top-accent',
          })
    }
    return (
        <TableContainer m={2}>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Product</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
                AllCountItems.map((item) => {
                    return (
                        <Tr key={item.id}>
                            <Td><img src={item.image} alt={item.title} width='100px' /></Td>
                            <Td>{item.title}</Td>
                            <Td isNumeric>
                            <Button colorScheme='red' onClick={() =>{
                                dispatch(remove(item.id))
                                removeToCart()
                            }}>Remove</Button>
                            </Td>
                        </Tr>
                    )
                })
            }

          </Tbody>        
        </Table>
      </TableContainer>
    )
}