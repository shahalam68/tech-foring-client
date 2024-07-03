
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import Header from "../Header/Header";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../../assets/banner.jpg"; // Ensure the path is correct
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div className="bg-[rgba(0, 0, 0, 0.87)]">
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 120px)", // Adjust the height according to your header
        //   mt: 2, // Add some margin-top for spacing
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: 500,
            bgcolor: "background.paper",
            borderRadius: 1,
            
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Jobs/>
    </div>
  );
};

export default Home;
