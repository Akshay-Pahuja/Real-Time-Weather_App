import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherSummary = ({ summary }) => {
  if (!summary.avgTemp) return null;

  return (
    <Card sx={{ mb: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Daily Weather Summary
        </Typography>
        <Typography variant="body1">Average Temperature: {summary.avgTemp.toFixed(2)}°C</Typography>
        <Typography variant="body1">Maximum Temperature: {summary.maxTemp.toFixed(2)}°C</Typography>
        <Typography variant="body1">Minimum Temperature: {summary.minTemp.toFixed(2)}°C</Typography>
        <Typography variant="body1">Dominant Condition: {summary.dominantCondition}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherSummary;
