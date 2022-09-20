import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Forms() {

  const SignupSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });


  return (
    <Center m={10}>
    <Box w="70%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={10}>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({errors, touched }) => (
        <Form>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={errors.email && touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Field
                as={Input}
                name="email"
                variant="filled"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.firstName && touched.firstName}>
              <FormLabel>First Name</FormLabel>
              <Field
                as={Input}
                name="firstName"
                variant="filled"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.lastName && touched.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Field
                as={Input}
                name="lastName"
                variant="filled"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
    </Box>
    </Center>
  );
}