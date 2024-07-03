import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/base";
import { AuthContext } from "../../AuthContext";

const style = {
  position: "absolute",
  top: "25%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 12,
  borderRadius: "8px",
  p: 4,
};

export default function AccountModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  const {user} = React.useContext(AuthContext);
  console.log("user from modal",user);
  const {logout} = React.useContext(AuthContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        style: { backgroundColor: "transparent" },
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>
            <AccountCircleIcon
              sx={{ width: "40px", height: "40px", mt: "10px" }}
            />
          </Box>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {user.name}
            </Typography>
            <Typography>{user.email}</Typography>
          </Box>
        </Box>
        <Box sx={{textAlign:"center" ,mt:"20px"}}>
          <Button onClick={logout} ><Typography sx={{backgroundColor:"#182A59",color:"#fff",paddingLeft:'10px',paddingRight:"10px",borderRadius:"3px"}}>Log Out</Typography></Button>
        </Box>
      </Box>
    </Modal>
  );
}
