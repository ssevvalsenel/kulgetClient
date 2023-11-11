import React from "react";
import { Button, Box } from "@mui/material";

import ButtonStyles from "./ButtonStyles";

const Index = (props) => {
  const { title, onClick, endIcon, type, sxButton, disabled } = props;

  const styles = ButtonStyles();

  return (
    <Box sx={styles.container}>
      <Button
        disabled={disabled}
        sx={sxButton}
        variant="contained"
        size="large"
        // endIcon={<SaveAltIcon />}
        endIcon={endIcon}
        onClick={onClick}
        // type="submit"
        type={type ?? "button"}
      >
        {title}
      </Button>
    </Box>
  );
};

export default Index;