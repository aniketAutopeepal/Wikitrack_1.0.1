import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomSelectBar from './CustomSelectBar'
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const VehicleSettingsHeader = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Accordion style={{position:"absolute",zIndex:999,width:"100%"}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        Vehicle Settings
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box
       display={'flex'}
      >
        <CustomSelectBar label={'Select Vehicle Group'}></CustomSelectBar>
        <CustomSelectBar label={'Select Vehicle'}></CustomSelectBar>
        <CustomSelectBar label={'Select Parameter'}></CustomSelectBar>
      </Box>
    </AccordionDetails>
  </Accordion>
  )
}

export default VehicleSettingsHeader
