'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Box, Button, Grid, Stack, Typography } from '@mui/material';
import { z } from 'zod';
import KeyIcon from '@mui/icons-material/Key';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import CheckIcon from '@mui/icons-material/Check';
import FormWrapper from '@/components/sections/FormWrapper';
import InputWrapper from '@/components/sections/InputWrapper';

const validationSchema = z.object({
    email: z.string().email('Please enter a valid email address!'),
});

const ForgotPassword = () => {
    const onSubmit = async (values: FieldValues) => {
        try {

        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Stack
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                height: { sm: '100vh' },
            }}
        >
            <Box
                sx={{
                    px: 4,
                    py: 2,
                    maxWidth: 600,
                    width: '100%',
                    boxShadow: 1,
                    borderRadius: 1,
                }}
            >
                <Stack alignItems='center' justifyContent='center'>
                    <Box
                        sx={{
                            '& svg': {
                                width: 100,
                                height: 100,
                            },
                        }}
                    >
                        <KeyIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Typography variant='h5' fontWeight={600} sx={{ mb: 2 }}>
                        Forgot password
                    </Typography>
                </Stack>

                <FormWrapper
                    onSubmit={onSubmit}
                    defaultValues={{ email: '' }}
                    resolver={zodResolver(validationSchema)}
                >
                    <Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <InputWrapper
                                name='email'
                                type='email'
                                label='Your email'
                                sx={{ mb: 2 }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Button type='submit' sx={{ width: '100%', my: 2 }}>
                        forgot Password
                    </Button>
                </FormWrapper>
            </Box>
        </Stack>
    );
};

export default ForgotPassword;
