import React, { useState } from "react";
import {
  Box,
  TextField,
  useTheme,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Textfield from "../../components/Textfield";
import ContentButtonGroup from "../../components/ContentButtonGroup";
import CheckboxGroup from "../../components/CheckboxGroup";
import Button from "../../components/Button";

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  //   #101624
  const [compBg, setCompBg] = useState("#f2f0f0");
  //   if(theme.palette.mode === "dark"){
  //     setCompBg("#101624")
  //   }

  const liste = [
    {
      title: "Pozitif Bilimeler Makale Okumaları",
    },
    {
      title: "Sosyal Bilimeler Makale Okumaları",
    },
    {
      title: "Panorama Sunumları",
    },
    {
      title: "Tarih Araştırmaları",
    },
    {
      title: "Kitap Tavsiyeleri",
    },
    {
      title: "Film Tavsiyeleri",
    },
    {
      title: "Etimoloji Araştırmaları",
    },
    {
      title: "Tıbbi Olgu Sunumları",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.sidebarAccent[500],
        borderRadius: "10px",
        height: "88vh",
        padding: "3vh",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ paddingLeft: "1vh" }}>
        <Header title={"İçerik Oluşturma Ekranı"} />
      </Box>
      <Grid
        container
        // sx={{
        //  // backgroundColor: colors.sidebarAccent[500],
        //   borderRadius: "10px",
        //   height: "88vh",
        //   padding: "3vh",
        // }}
      >
        <Grid item xs={12} md={8} sx={{ padding: "1vh" }}>
          <Box>
            <Textfield
              required={true}
              label={"İçerik başlığını giriniz."}
              width={"100%"}
              sx={{
                "& fieldset": {
                  borderColor: `${colors.indigoAccent[500]} !important`, //kutu border rengi
                },
                "& label.Mui-focused": {
                  color: `${colors.indigoAccent[700]}`, //Focus yazı rengi
                  fontSize: "1.6vh",
                },
              }}
            />
          </Box>
          <Box sx={{ paddingTop: "1vh" }}>
            <Textfield
              required={true}
              label={"İçeriğin liste açıklamasını giriniz."}
              width={"100%"}
              rows={3}
              sx={{
                "& fieldset": {
                  borderColor: `${colors.indigoAccent[500]} !important`, //kutu border rengi
                },
                "& label.Mui-focused": {
                  color: `${colors.indigoAccent[700]}`, //Focus yazı rengi
                  fontSize: "1.6vh",
                },
              }}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <ContentButtonGroup
              alignment={alignment}
              handleAlignment={handleAlignment}
              formats={formats}
              handleFormat={handleFormat}
            />
            <Textfield
              required={true}
              // label={"İçeriğin liste açıklamasını giriniz."}
              width={"100%"}
              rows={25}
              sx={{
                "& fieldset": {
                  borderColor: `${colors.indigoAccent[500]} !important`, //kutu border rengi
                },
                "& label.Mui-focused": {
                  color: `${colors.indigoAccent[700]}`, //Focus yazı rengi
                  fontSize: "1.6vh",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "1vh", paddingLeft: "10vh" }}>
          <Box
            sx={{
              padding: "2vh",
              backgroundColor: colors.compBg[500],
              borderRadius: "10px",
              margin: "2vh",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ paddingBottom: "2vh" }}
            >
              Yazı türünü giriniz.
            </Typography>
            <CheckboxGroup liste={liste} />
          </Box>
          <Box
            sx={{
              padding: "2vh",
              backgroundColor: colors.compBg[500],
              borderRadius: "10px",
              margin: "2vh",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Textfield
              required={true}
              label={"İçerik hashtaglerini giriniz."}
              width={"100%"}
              rows={7}
              sx={{
                "& fieldset": {
                  borderColor: `${colors.indigoAccent[500]} !important`, //kutu border rengi
                },
                "& label.Mui-focused": {
                  color: `${colors.indigoAccent[700]}`, //Focus yazı rengi
                  fontSize: "1.6vh",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              //   alignItems: "center",
              justifyContent: "space-between",
              paddingX: "2vh",
            }}
          >
            <Button
              sxButton={{
                backgroundColor: colors.greenAccent[400],
                width: "100%",
                fontWeight: "bold",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              }}
              title={"Taslak Olarak Kaydet"}
            />
            <Button
              sxButton={{
                backgroundColor: colors.indigoAccent[400],
                width: "9vw",
                fontWeight: "bold",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              }}
              title={"Kaydet"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
