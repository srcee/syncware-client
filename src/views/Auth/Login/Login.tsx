import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Paper, ThemeProvider } from "@mui/material";
import { useForm, type FieldValues } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import * as yup from "yup";
import { useAuth } from "../../../contexts/AuthContext";
import { useLoginMutation } from "../../../graphql/generated";
import { useLoginTheme } from "./useLoginTheme";
import { ReactComponent as SyncwareLogo } from "../../../assets/syncware.svg";
import "./Login.scss";
import { ColorsPalette } from "../../../styles/colors";

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
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <SyncwareLogo />
          </Box>

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

            <Button
              type="submit"
              sx={{
                color: ColorsPalette.BrightWhite,
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};
