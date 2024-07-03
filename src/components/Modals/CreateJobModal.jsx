
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useCreateJob } from "../../modules/createJob.hooks";
// import { useCreateJob } from "../../hooks/Jobs.hooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CreateJobModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [category, setCategory] = useState("");
  const [role, setRole] = useState("");
  const { mutate: createJob, isLoading, isError, isSuccess } = useCreateJob();

  const handleSubmit = (event) => {
    event.preventDefault();
    createJob({ category, role });
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{ fontWeight: "600" }}
        >
          Please Add A Job
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "rgb(24, 42, 89)",
              "&:hover": {
                backgroundColor: "rgb(24, 42, 89)",
                opacity: 0.9,
              },
            }}
          >
            {isLoading ? "Creating..." : "Create Job"}
          </Button>
          {isError && <Typography color="error">Error creating job.</Typography>}
          {isSuccess && (
            <Typography color="primary">Job created successfully!</Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateJobModal;
