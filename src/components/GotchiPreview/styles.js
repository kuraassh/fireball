import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
    previewWrapper: {
        display: 'flex',
        padding: '18px 12px',
        '& > div': {
            flex: '1 1 33%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    }
}));

export default styles;
