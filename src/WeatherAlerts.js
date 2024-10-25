import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherAlerts = ({ alerts }) => {
  if (!alerts.length) return <p>No alerts triggered yet.</p>;

  return (
    <Card sx={{ mb: 4}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weather Alerts
        </Typography>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              {alert.city}: {alert.temp}°C ({alert.condition}) exceeded the threshold!
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WeatherAlerts;
