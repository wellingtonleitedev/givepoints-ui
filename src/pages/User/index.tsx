import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const User: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event?.preventDefault();

    if (inputRef.current?.value)
      localStorage.setItem("@streamelements:token", inputRef.current?.value);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("@streamelements:token");

    if (token && inputRef.current) {
      inputRef.current.value = token;
    }
  }, []);

  return (
    <>
      <Alert
        status="info"
        textColor="gray.900"
        marginBottom="5"
        borderRadius="5"
      >
        <AlertIcon />
        <Box>
          <AlertTitle>Get your StreamElements Token</AlertTitle>
          <AlertDescription>
            Access your:
            <Link
              href="https://streamelements.com/dashboard/account/channels"
              textColor="cyan.900"
              isExternal
            >
              {" "}
              StreamElements Dashboard{" "}
            </Link>
            then toggle on "Show Secrets", copy the JWT Token and paste here
            below.
          </AlertDescription>
        </Box>
      </Alert>
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap="5"
      >
        <InputGroup size="lg">
          <Input
            ref={inputRef}
            name="token"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="StreamElements Token"
            size="lg"
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="purple"
              height="1.75rem"
              size="sm"
              onClick={() => setShow((state) => !state)}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit" colorScheme="purple">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default User;
