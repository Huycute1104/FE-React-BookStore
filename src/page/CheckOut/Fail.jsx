import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Fail = () => {
  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f8d7da' }}
    >
      <Box
        component={motion.div}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ textAlign: 'center', padding: 4, borderRadius: 2, boxShadow: 3, backgroundColor: '#ffffff' }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#dc3545' }}>
          Payment Failed
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
          Unfortunately, your transaction could not be completed. Please try again later.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Retry
        </Button>
      </Box>
    </Container>
  );
};

export default Fail;
