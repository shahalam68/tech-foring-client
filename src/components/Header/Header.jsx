import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import AccountModal from "../Modals/AccountModal";
import CreateJobModal from "../Modals/CreateJobModal";

const Header = () => {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [createJobModalOpen, setCreateJobModalOpen] = useState(false);

  const handleAccountModalOpen = () => {
    setAccountModalOpen(true);
  };

  const handleCreateJobModalOpen = () => {
    setCreateJobModalOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#182A59",
          padding: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <img src={logo} alt="" width="40" />
          <Box>
            <Typography
              sx={{ color: "#fff", fontSize: "1.25rem", fontWeight: "700" }}
            >
              TechForing
            </Typography>
            <Typography
              sx={{ color: "#fff", fontSize: "11px", fontWeight: "400" }}
            >
              Shaping Tomorrows Cybersecurity
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{ backgroundColor: "#fff" }}
            onClick={handleCreateJobModalOpen}
          >
            <Typography>Create Job</Typography>
          </Button>
          <Button onClick={handleAccountModalOpen}>
            <AccountCircleIcon sx={{ width: "40px", height: "40px" }} />
          </Button>
        </Box>
      </Box>
      <AccountModal open={accountModalOpen} setOpen={setAccountModalOpen} />
      <CreateJobModal open={createJobModalOpen} setOpen={setCreateJobModalOpen} />
    </>
  );
};

export default Header;
