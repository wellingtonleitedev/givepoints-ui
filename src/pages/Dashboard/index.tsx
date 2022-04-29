import React, { FormEvent, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  List,
  ListItem,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import api from "../../services/api";

interface User {
  id: string;
  name: string;
  twitchUsername: string;
  message: string;
  newAmount: number;
}

const Dashboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { data } = await api.post("/points/add", {
      tweetId: inputRef.current?.value,
      amount: amountRef.current?.value,
    });

    setUsers(data.users);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl as="fieldset">
          <FormLabel>Tweet ID</FormLabel>
          <Input
            ref={inputRef}
            name="tweetId"
            placeholder="ex. 1516226928692588545"
          />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel>Amount</FormLabel>
          <Input ref={amountRef} name="amount" placeholder="ex. 20 ou -20" />
        </FormControl>
        <Button
          colorScheme="purple"
          marginTop={10}
          style={{ width: "100%" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <List display="flex" flexDirection="column" gap={5} marginTop="10">
        {!!users.length &&
          users.map((user) => (
            <ListItem
              key={user.id}
              alignItems="center"
              borderRadius="md"
              bgColor="whiteAlpha.900"
              textColor="gray.900"
              display="flex"
              justifyContent="space-between"
              padding="1rem"
            >
              <Flex flexDirection="column">
                <Box display="flex" alignItems="center" marginBottom="1.5">
                  <Text
                    as="p"
                    fontSize="1.5rem"
                    fontWeight="bold"
                    marginRight="1"
                  >
                    {user.name}
                  </Text>
                  <Text as="span" fontWeight="semibold">
                    {" - "}
                    {user.twitchUsername}
                  </Text>
                </Box>
                <Text as="span">
                  {user.message.replace(`to user ${user.twitchUsername}`, "")}
                </Text>
              </Flex>
              <Text
                as="span"
                fontSize="lg"
                fontWeight="700"
                textColor="green.600"
              >
                {`${user.newAmount} points`}
              </Text>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default Dashboard;
