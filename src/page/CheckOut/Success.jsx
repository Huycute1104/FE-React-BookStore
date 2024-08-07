import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/my-orders'); 
  };

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8' }}
    >
      <Box
        component={motion.div}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ textAlign: 'center', padding: 4, borderRadius: 2, boxShadow: 3, backgroundColor: '#ffffff' }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#4caf50' }}>
          Payment Successful!
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
          Thank you for your purchase. Your transaction has been completed successfully.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Success;
