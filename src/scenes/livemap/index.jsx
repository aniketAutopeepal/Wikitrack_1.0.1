import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import VehicleSettingsHeader from '../../components/VehicleSettingsHeader';
import Map from '../../components/Map';
import Topbar from '../global/Topbar';

const LiveMap = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    
    <Box m='0px'>
    <Topbar title="Live Map"/>
   
    <Map></Map>
    </Box>
  )
}

export default LiveMap;
