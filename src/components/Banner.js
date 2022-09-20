import { Box, Center, Text } from "@chakra-ui/react";

const Banner = ({title}) => {
    return (
        <Center m={10}>
            <Box w="70%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={10}>
                <Text fontSize='5xl'>{title}</Text>
            </Box>
        </Center>
    )
}

export default Banner
