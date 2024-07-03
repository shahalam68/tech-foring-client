import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useGetAllJobs } from "../../modules/Jobs.hooks";
import axios from "axios";

export default function JobsAccordion() {
  const { data, isLoading, isError, error, refetch } = useGetAllJobs();
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [oldRole, setOldRole] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleEditRole = async () => {
    try {
      await axios.put(
        `https://tech-foring-test-server.vercel.app/update/job/role/${selectedJob._id}`,
        {
          oldRole,
          newRole,
        }
      );
      refetch();
      handleClose();
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  const handleClickOpen = (job, role) => {
    setSelectedJob(job);
    setOldRole(role);
    setNewRole(role);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
    setOldRole("");
    setNewRole("");
  };

  const handleDeleteRole = async (categoryId, role) => {
    try {
      await axios.delete(
        `https://tech-foring-test-server.vercel.app/delete/job/role/${categoryId}`,
        {
          data: { role },
        }
      );
      refetch();
    } catch (err) {
      console.error("Error deleting role:", err);
    }
  };

  if (isLoading) {
    return <p>Loading jobs...</p>;
  }

  if (isError) {
    return <p>Error fetching jobs: {error.message}</p>;
  }

  return (
    <div>
      {data.length === 0 ? (
        <Box>
          <Typography variant="h6">No jobs available now.</Typography>
          <Button
            onClick={() => {
              // Handle create job button click action here
              console.log("Create job button clicked");
            }}
            variant="outlined"
            sx={{ mt: 2 }}
          >
            Create Job
          </Button>
        </Box>
      ) : (
        data.map((job, index) => (
          <Accordion
            key={index}
            className="mb-4 mt-4"
            sx={{
              border: "2px solid rgba(0,0,0,.2)",
              boxShadow: "none",
              backgroundColor: "rgb(239, 243, 246)",
              borderRadius: "8px",
              "&:first-of-type": {
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              },
              "&:last-of-type": {
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="text-xl"
            >
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontWeight: "600",
                  fontSize: "19px",
                }}
              >
                {job.category} {/* Show job category */}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {job.roles.map((role, roleIndex) => (
                <Box
                  key={roleIndex}
                  sx={{
                    margin: "12px 0",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>{role}</Typography> {/* Show job role */}
                  <Box>
                    <Button
                      onClick={() => handleClickOpen(job, role)}
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #f5f5f5",
                        marginRight: "15px",
                        borderRadius: "5px",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#182f59",
                          color: "#fff",
                        },
                      }}
                    >
                      <Typography sx={{ padding: "5px" }}>Edit Job</Typography>
                    </Button>
                    <Button
                      onClick={() => handleDeleteRole(job._id, role)}
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #f5f5f5",
                        borderRadius: "5px",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#182f59",
                          color: "#fff",
                        },
                      }}
                    >
                      <Typography sx={{ padding: "5px" }}>Delete Job</Typography>
                    </Button>
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Job Role</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mt: "10px", mb: "10px" }}>
            <Typography>Please enter the new role name.</Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="New Role Name"
            fullWidth
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #f5f5f5",
              borderRadius: "5px",
              color: "#000",
              "&:hover": {
                backgroundColor: "#182f59",
                color: "#fff",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleEditRole}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #f5f5f5",
              borderRadius: "5px",
              color: "#000",
              "&:hover": {
                backgroundColor: "#182f59",
                color: "#fff",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
