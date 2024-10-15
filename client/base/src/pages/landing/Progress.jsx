import React, { useState, useEffect } from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1.25));
    }, 100); // 100ms * 1.25 progress = 8 seconds to reach 100%

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" sx={{height:2}} value={progress} />
    </Box>
  );
};

export default Progress;
