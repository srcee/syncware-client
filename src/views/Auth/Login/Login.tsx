import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { useForm, type FieldValues } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import * as yup from "yup";
import { useAuth } from "../../../contexts/AuthContext";
import { useLoginMutation } from "../../../graphql/generated";
import { useLoginTheme } from "./useLoginTheme";

const schema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const Login: React.FC = () => {
  const { setAccessToken } = useAuth();
  const loginTheme = useLoginTheme();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation({
    onSuccess: (data) => {
      const accessToken = data.login.access_token;
      setAccessToken(accessToken);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleLogin = ({ email, password }: FieldValues) => {
    const input = { username: email, password };
    loginMutation.mutate({ input });
  };

  return (
    <ThemeProvider theme={loginTheme}>
      <Typography>Login</Typography>

      <form onSubmit={handleSubmit(handleLogin)}>
        <TextFieldElement
          name="email"
          control={control}
          slotProps={{
            htmlInput: {
              "data-testid": "login-form-email",
              placeholder: "E-mail",
              autoFocus: true,
            },
          }}
        />

        <TextFieldElement
          name="password"
          type="password"
          control={control}
          slotProps={{
            htmlInput: {
              "data-testid": "login-form-password",
              placeholder: "Password",
            },
          }}
        />

        <Button type="submit">Login</Button>
      </form>
    </ThemeProvider>
  );
};
