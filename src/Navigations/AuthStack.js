import React from "react";
import { Login, Register } from "../screen";

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </>
  );
}
