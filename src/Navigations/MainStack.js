import React from "react";
import { Home, Profile, Search } from "../screen";
import BottomTab from "./BottomTab";

export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name="Main" component={BottomTab} />
    </>
  );
}
