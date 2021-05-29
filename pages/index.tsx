import { useForm, SubmitHandler } from "react-hook-form";
import {
  Flex,
  Heading,
  FormLabel,
  FormControl,
  Button,
  Input,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AlertPop } from "../components/Alert";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "gray.700");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

    const onSubmit: SubmitHandler<LoginFormData> = (data) => {
console.log(data);
reset({})
    }



  return (
    <>
      <Flex direction="column" m={5}>
        <IconButton
          aria-label="Color Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          alignSelf="flex-end"
          isRound={true}
        />
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={6}
          >
            <Heading mb={6} textAlign="center">
              Login
            </Heading>
            <FormControl p="4">
              <FormLabel htmlFor="email">Email</FormLabel>

              <Input
                id="email"
                type="text"
                placeholder="Email"
                variant="filled"
                mb={6}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />

              {errors.email && <AlertPop formError={errors.email.message} />}
            </FormControl>

            <FormControl p="4">
              <FormLabel htmlFor="password">Password</FormLabel>

              <Input
                id="password"
                type="password"
                placeholder="Password"
                variant="filled"
                mb={6}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must contain at least 8 characters",
                  },
                })}
              />

              {errors.password && (
                <AlertPop formError={errors.password.message} />
              )}
            </FormControl>

            <Button
              type="submit"
              mb="6"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Sign In
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
}
