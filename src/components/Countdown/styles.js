
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        textAlign: 'center'
    },
    inner: {
        fontSize: 26,
        minWidth: 80,
        fontWeight: 600,
        position: 'relative',
        padding: '0 8px',
        '&:after': {
            content: '":"',
            position: 'absolute',
            left: '100%',
            top: 1,
            transform: 'translateX(-50%)'
        },

        '&:last-of-type:after': {
            content: 'none'
        }
    },
    number: {
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 5,
        padding: '2px 6px',
        display: 'inline-block',
    },
    text: {
        display: 'block',
        fontSize: 14,
        margin: '3px 0 0'
    }
}));