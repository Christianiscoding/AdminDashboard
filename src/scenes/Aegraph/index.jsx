import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import BarChartAE from "../../components/BarChartAE";

const Aegraph = () => {
  return (
    <Box m="20px">
      <Header title="AE Chart" subtitle="Erster Chart" />
      <Box height="75vh">
        <BarChartAE />
      </Box>
    </Box>
  );
};

export default Aegraph;