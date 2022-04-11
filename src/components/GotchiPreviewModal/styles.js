import { makeStyles } from '@mui/styles';

const styles = makeStyles(theme => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'calc(100vw - 64px)',
        height: 'calc(100vh - 64px)',
        background: theme.palette.background.paper,
        padding: 18,
        borderRadius: 4
    },
    modalTitle: {
        marginBottom: 24
    }
}));

export default styles
