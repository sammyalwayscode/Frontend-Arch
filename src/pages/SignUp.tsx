import { useMutation } from "@tanstack/react-query";
import React from "react";
import { createUser } from "../utils/api/api";

const SignUp = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => createUser(data),
  });

  const onSubmit = () => {
    mutate();
  };

  return <div>SignUp</div>;
};

export default SignUp;
