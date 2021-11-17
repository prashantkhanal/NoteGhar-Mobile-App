import React from "react";
import { StyleSheet, View, Text, Dimensions, Alert } from "react-native";
import { FormControl, Icon, Input } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../error/Error";
import ButtonComp from "../components/Btn";
import SocialLogin from "../../../components/utils/SocialLogin";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContainer } from "../components";
import { loginAction } from "../../../redux/actions";

// Yup validation
const loginYupValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password Must be ${min} character`)
    .required("Password is Required"),
});

export default function LoginScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  // States values
  const [showPassword, setShowPassword] = React.useState(true);
  const dispatch = useDispatch();
  const initState = {
    email: "admin@admin.com",
    password: "admin123",
  };
  return (
    <Formik
      initialValues={initState}
      onSubmit={(val) => {
        dispatch(loginAction(val));
      }}
      validateOnMount={true}
      validationSchema={loginYupValidation}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <AuthContainer
          nextStackOption="Register"
          nextStackOptionText="Don't Have account ? "
          loading={auth.authenticating}
          loadingMessage="Login in...."
          onPress={() => navigation.push("Register")}
        >
          {auth.error && alert(auth.error)}
          <Error error={auth.error} />
          <View style={{ marginTop: 13 }}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={errors.email ? "close" : "check-circle"}
                    />
                  }
                  size={5}
                  mr="2"
                  color={errors.email ? "red" : "#4632A2"}
                />
              }
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              placeholder="Email"
              variant="rounded"
            />
          </View>
          {errors.email && touched.email && (
            <Text style={style.errors}>{errors.email}</Text>
          )}
          <View style={{ marginTop: 13 }}>
            <FormControl.Label>Phone</FormControl.Label>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={!showPassword ? "visibility" : "visibility-off"}
                    />
                  }
                  onPress={() => setShowPassword(!showPassword)}
                  size={5}
                  p={2}
                  color="#4632A2"
                  style={{ width: 40, height: 40 }}
                />
              }
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              variant="rounded"
              secureTextEntry={showPassword}
            />
          </View>
          {errors.password && touched.password && (
            <Text style={style.errors}>{errors.password}</Text>
          )}
          <ButtonComp
            content="Login"
            onPress={handleSubmit}
            disabled={!isValid}
            style={{
              backgroundColor: isValid ? "#22374c" : "#efefef",
              justifyContent: "center",
              borderRadius: 20,
              height: 50,
              marginTop: 20,
            }}
          />
          <SocialLogin content="Login in with" />
        </AuthContainer>
      )}
    </Formik>
  );
}

const style = StyleSheet.create({
  errors: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    color: "red",
  },
});
