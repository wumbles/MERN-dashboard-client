import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={600} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[65, 35]}
          colors={["#475ae8", "#e88547"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[45, 55]}
          colors={["#475ae8", "#e88547"]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          series={[10, 90]}
          colors={["#475ae8", "#e88547"]}
        />
        <PieChart
          title="Total Cities"
          value={555}
          series={[70, 30]}
          colors={["#475ae8", "#e88547"]}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row" }}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;
