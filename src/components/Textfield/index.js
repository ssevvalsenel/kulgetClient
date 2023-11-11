import { Box, TextField } from "@mui/material";

const Index = (props) => {
  //props üzerinden gelen değerler
  const {
    required,
    type,
    label,
    width,
    sx,
    value,
    onChange,
    onBlur,
    helperText,
    error,
    name,
    rows,
  } = props;

  return (
    <Box
      sx={{
        // paddingTop: "1vh",
        paddingBottom: "1vh",
      }}
    >
      <TextField
        multiline
        required={required}
        // id="outlined-basic"
        type={type}
        label={label}
        variant="outlined"
        sx={{ width: { width }, ...sx }}
        size="small"
        value={value}
        onChange={onChange}
        // autoFocus
        onBlur={onBlur}
        helperText={helperText}
        error={error}
        name={name}
        rows={rows}
      />
    </Box>
  );
};

export default Index;
