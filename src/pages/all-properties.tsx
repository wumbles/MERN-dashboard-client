import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
  } = useTable();

  const AllProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={600} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {AllProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AllProperties;
