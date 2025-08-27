import { FC, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Login: FC = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("");

  const handleLogin = () =>
    loginWithRedirect({
      authorizationParams: { login_hint: email }
    });

  return (
    <Box
      sx={{
        mt: 8,
        mx: "auto",
        width: 360,
        p: 4,
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }} align="center">
        Sign In
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
        sx={{ mb: 2 }}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleLogin}
      >
        Continue with Auth0
      </Button>
    </Box>
  );
};

export default Login;
