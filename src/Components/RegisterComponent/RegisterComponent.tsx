import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  FormLabel,
  Stack,
  Button,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  name,
  required,
  authpassword,
  authemail,
} from "../../Constants/Constants";
import { RegisterService } from "../../Services/RegisterService";
import { AddToken } from "../../helpers/TokenHelpers";
import { useHistory } from "react-router";
export function RegisterComponent(): JSX.Element {
  let history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
    clearErrors,
  } = useForm({ mode: "onTouched" });
  let [errorsubmit, seterror] = useState(" ");
  async function onSubmit(values: any): Promise<void> {
    try {
      let { data } = await RegisterService({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      history.push("/personal_admin");
      AddToken(data.token);
    } catch (error: any) {
      if (error.response) {
        let { data } = error.response;
        seterror(data.error);
      } else {
        seterror("ocurrió un error, intente de nuevamente");
      }
    }
  }
  return (
    <Stack
      w={{ base: "90%", md: "0%", lg: "45%" }}
      spacing="10px"
      minH="320px"
      background="#142342"
      color="white"
      padding="20px 30px"
      m="0px auto"
      borderRadius="10px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginTop="10px">
          <FormLabel>Name</FormLabel>
          <Input
            background="white"
            color="black"
            type="text"
            {...register("name", {
              required: name.MSGREQUIRED,
              minLength: {
                value: name.MINLONGNAME,
                message: name.MSGERRMINAME,
              },
              maxLength: {
                value: name.MAXLONGNAME,
                message: name.MSGERRMAXNAME,
              },
            })}
          />
          <Text fontSize="md" color="red">
            {errors.name?.message ? errors.name.message : ""}
          </Text>
        </FormControl>

        <FormControl marginTop="30px">
          <FormLabel>Email</FormLabel>
          <Input
            background="white"
            color="black"
            type={authemail.TYPE}
            {...register("email", {
              required: authemail.REQUIRED,
              pattern: {
                value: authemail.PATTERN,
                message: authemail.PATTERNMSG,
              },
            })}
          />
          <Text fontSize="md" color="red">
            {errors.email?.message ? errors.email.message : " "}
          </Text>
        </FormControl>

        <FormControl marginTop="30px">
          <FormLabel>Password</FormLabel>
          <Input
            background="white"
            color="black"
            type={authpassword.TYPE}
            {...register("password", {
              required: authpassword.MSGREQUIRED,
              minLength: {
                value: authpassword.MINVALUE,
                message: authpassword.MSGERR,
              },
            })}
          />
          <Text fontSize="md" color="red">
            {errors.password?.message ? errors.password.message : " "}
          </Text>
        </FormControl>

        <FormControl marginTop="30px">
          <FormLabel>Confirm Password</FormLabel>
          <Input
            background="white"
            color="black"
            type={authpassword.TYPE}
            {...register("passwordRepeat", {
              required: authpassword.MSGREQUIRED,
              validate: {
                passwordEqual: (value) =>
                  value === getValues().password ||
                  "password confirmation error!",
              },
            })}
          />
          <Text fontSize="md" color="red">
            {errors.passwordRepeat?.message
              ? errors.passwordRepeat?.message
              : " "}
          </Text>
        </FormControl>
        <Button
          type="submit"
          isLoading={isSubmitting}
          background="#3e5898"
          onClick={() => {
            clearErrors("confirm");
          }}
          _hover={{ background: "#455b94" }}
          marginTop="30px"
          alignItems="center"
          w="100%"
        >
          Enviar
        </Button>
      </form>
      <Box mt="3">
        <Text fontSize="md" color="red">
          {errorsubmit}
        </Text>
      </Box>
    </Stack>
  );
}
