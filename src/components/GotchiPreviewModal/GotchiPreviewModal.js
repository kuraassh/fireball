import React from 'react';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';

import styles from './styles';
import GotchiPreview from 'components/GotchiPreview/GotchiPreview';

export default function GotchiPreviewModal({ gotchi, isModalOpen, setIsModalOpen }) {
    const classes = styles();

    return (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} BackdropProps={{sx: {backdropFilter: 'blur(3px)'}}}>
            <Box className={classes.modal}>
                <Typography variant='h6' textAlign='center' className={classes.modalTitle}>
                    Gotchi Preview Modal
                </Typography>

                { gotchi && <GotchiPreview gotchi={gotchi} /> }
            </Box>
        </Modal>
    );
}
