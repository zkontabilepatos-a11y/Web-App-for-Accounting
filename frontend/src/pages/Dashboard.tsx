import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard: FC = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Account Balance</Typography>
          <Typography variant="h4">$12,345.67</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          {/* Placeholder: render list/table of transactions */}
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Cash Flow</Typography>
          {/* Placeholder: chart component goes here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
