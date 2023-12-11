import React, { useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const contactSection = useRef();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { values, errors, touched, handleSubmit, handleChange, getFieldProps } =
    useFormik({
      initialValues: { firstName: "", email: "", type: "", comment: "" },
      onSubmit: (values) => {
        submit("", values);
        onOpen(response.type, response.message);
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        comment: Yup.string().required("Required"),
      }),
    });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      ref={contactSection}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
              submit();
            }}
          >
            <VStack spacing={4}>
              <FormControl
                isInvalid={errors.firstName && touched ? true : false}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  {...getFieldProps("firstName")}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email && touched ? true : false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched ? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
