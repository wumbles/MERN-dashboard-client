import { useOne } from "@pankod/refine-core";
import { useParams } from "react-router-dom";
import { Typography } from "@pankod/refine-mui";

import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  console.log(data);

  const myProfile = data?.data ?? [];

  if (isLoading)
    return (
      <Typography
        sx={{
          color: "#11142d",
        }}
      >
        Loading...
      </Typography>
    );
  if (isError)
    return (
      <Typography
        sx={{
          color: "#11142d",
        }}
      >
        Error...
      </Typography>
    );

  return (
    <Profile
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default AgentProfile;
