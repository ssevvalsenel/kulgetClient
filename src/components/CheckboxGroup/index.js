import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const CheckboxGroup = (props) => {
  const { liste } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <FormGroup>
        {liste?.map((item) => (
          <FormControlLabel
            key={item.title}
            control={
              <Checkbox sx={{ color: colors.orangeAccent[400] }} />
            }
            label={item.title}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckboxGroup;
