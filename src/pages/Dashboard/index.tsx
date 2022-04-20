import React, { FormEvent, useRef, useState } from "react";
import api from "../../services/api";

interface User {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { data } = await api.post("/points/add", {
      tweetId: inputRef.current?.value,
      amount: 20,
    });

    setUsers(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input ref={inputRef} name="tweetId" placeholder="Tweet ID" />
        </fieldset>
        <button style={{ width: "100%" }} type="submit">
          Submit
        </button>
      </form>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
