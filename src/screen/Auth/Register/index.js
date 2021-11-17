// import React from "react";
// import { Input, FormControl, Icon, Select, CheckIcon } from "native-base";
// import { MaterialIcons } from "@expo/vector-icons";
// import { View, StyleSheet, Text } from "react-native";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { AuthContext } from "../../../context/AuthContex";
// import AuthContainer from "../components";
// import ButtonComp from "../components/Btn";
// import Error from "../../error/Error";
// import SocialLogin from "../../../components/utils/SocialLogin";

// export default function RegisterScreen({ navigation }) {
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState(false);
//   const [showPassword, setShowPassword] = React.useState(true);

//   return (
//     <Formik
//       initialValues={initValues}
//       onSubmit={async ({ email, password }) => {
//         try {
//           setLoading(true);
//           await login(email, password);
//           setLoading(false);
//           // navigation.pop();
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       }}
//       validateOnMount={true}
//       validationSchema={registerYupValidation}
//     >
//       {({
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         values,
//         touched,
//         errors,
//         isValid,
//       }) => (
//

//           <ButtonComp
//             content="Register"
//             onPress={handleSubmit}
//             disabled={!isValid}
//             style={{
//               backgroundColor: isValid ? "#22374c" : "#efefef",
//               justifyContent: "center",
//               borderRadius: 20,
//               height: 50,
//               marginTop: 20,
//             }}
//           />
//           <SocialLogin content="Register with" />
//         </AuthContainer>
//       )}
//     </Formik>
//   );
// }

import React from "react";
import { AuthContext } from "../../../context/AuthContex";
import { StyleSheet, View, Text, Dimensions, Alert } from "react-native";
import { CheckIcon, FormControl, Icon, Input, Select } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../../error/Error";
import ButtonComp from "../components/Btn";

import SocialLogin from "../../../components/utils/SocialLogin";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContainer } from "../components";

// Yup validation
const registerYupValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, ({ min }) => `Name must be at least ${min} character long`)
    .required("Name is reuired field"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password Must be ${min} character`)
    .required("Password is Required"),
  number: Yup.number()
    .min(10, ({ min }) => `Password Must be ${min} character`)
    .required("Number is required Filed"),
  role: Yup.string().required("Role is required"),
});
export default function RegisterScreen({ navigation }) {
  // States values

  const [showPassword, setShowPassword] = React.useState(true);
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const initValues = {
    name: "",
    email: "",
    password: "",
    number: "",
    role: "",
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={async ({ email, password }) => {
        try {
          setLoading(true);
          await login(email, password);
          setLoading(false);
          // navigation.pop();
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }}
      validateOnMount={true}
      validationSchema={registerYupValidation}
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
          nextStackOptionText="Already Have an Account ? "
          loading={loading}
          loadingMessage="Sign in...."
          onPress={() => navigation.push("loginScreen")}
        >
          <Error error={error} />
          {/* from */}
          <View style={style.inputContainer}>
            <Error error={error} />
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                isRequired
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name"
                variant="rounded"
                InputRightElement={
                  <Icon
                    as={
                      <MaterialIcons
                        name={errors.name ? "close" : "check-circle"}
                      />
                    }
                    size={5}
                    mr="2"
                    color={errors.name ? "red" : "#4632A2"}
                  />
                }
              />
              {errors.name && touched.name && (
                <Text style={style.errors}>{errors.name}</Text>
              )}
              <View style={style.inputContainer}>
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
                  keyboardType="email-address"
                  isRequired
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email"
                  variant="rounded"
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
                />
              </View>
              {errors.email && touched.email && (
                <Text style={style.errors}>{errors.email}</Text>
              )}
              <View style={style.inputContainer}>
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
                  isRequired
                  keyboardType="phone-pad"
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  value={values.number}
                  placeholder="Phone Number"
                  variant="rounded"
                  InputRightElement={
                    <Icon
                      as={
                        <MaterialIcons
                          name={errors.number ? "close" : "check-circle"}
                        />
                      }
                      size={5}
                      mr="2"
                      color={errors.number ? "red" : "#4632A2"}
                    />
                  }
                />
              </View>
              {errors.number && touched.number && (
                <Text style={style.errors}>{errors.number}</Text>
              )}
              <View style={style.inputContainer}>
                <FormControl.Label>Passworddddd</FormControl.Label>
                <Input
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="lock" />}
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
              <View style={style.inputContainer}>
                <FormControl.Label>Role</FormControl.Label>
                <Select
                  variant="rounded"
                  selectedValue={values.role}
                  placeholder="Choose Your Role"
                  _selectedItem={{
                    endIcon: <CheckIcon size="5" />,
                  }}
                  onValueChange={handleChange("role")}
                >
                  <Select.Item label="Creator" value="creator" />
                  <Select.Item label="Student" value="student" />
                </Select>
              </View>
            </FormControl>
          </View>
          {errors.role && touched.role && (
            <Text style={style.errors}>{errors.role}</Text>
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

  inputContainer: {
    marginTop: 10,
  },
});
