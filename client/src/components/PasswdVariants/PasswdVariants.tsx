import { styled } from "@mui/material/styles";
import { Paper, Snackbar, SnackbarOrigin } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { useGenerate } from "@/services/generate";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  border: "solid 1px black",
  color: theme.palette.text.primary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  ":hover": {
    cursor: "pointer",
    transition: "all .2s ease-out",
    boxShadow: "-5px 5px 3px grey",
  },
}));

interface State extends SnackbarOrigin {
  open: boolean;
}

export const PasswdVariants = () => {
  const { data } = useGenerate();

  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.data.data.map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item
              onClick={handleClick({ vertical: "top", horizontal: "right" })}
            >
              {index + 1}
            </Item>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={500}
        open={open}
        onClose={handleClose}
        message="Copied"
        key={vertical + horizontal}
      />
    </>
  );
};
