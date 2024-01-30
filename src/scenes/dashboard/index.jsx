import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import VehicleAnalysisTable from "../../components/VehicleAnalysisTable";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import ProgressCircle from "../../components/ProgressCircle";
import { Icon } from '@iconify/react';
import Topbar from "../global/Topbar";
import PieChart from "../../components/PieChart";
import { Pie } from "@nivo/pie";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0px">
      <Topbar title="Dashboard"/>
    

      {/* CARDS  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          display='flex'
          gridColumn="span 8"
          // justifyContent='space-around'
          gridRow="span 2"
       >
         
         <PieChart></PieChart>
         </Box>
        <Box
            gridColumn="span 4"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridRow="span 2"
            m='20px'
         >
        
    
          <StatBox
           
            title="1,325,134"
            subtitle="Idle Vehicle"
            progress="0.80"
            increase="+43%" 
            icon={
              <CarCrashIcon  sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
            
          />

         </Box>
        

       
       <Box gridColumn="span 12">
        <VehicleAnalysisTable></VehicleAnalysisTable>
       </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
