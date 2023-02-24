import { Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const LoginGithub = () => {
  return (
    <div className="mt-3">
      <Button style={{backgroundColor:'#292b29', color:'#cfcfcf'}} variant="contained" color="primary" aria-label="Login with Github" startIcon={<GitHubIcon />}>
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default LoginGithub;
