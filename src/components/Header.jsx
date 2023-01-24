import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>
                    MUI store
                </Typography>
                <IconButton
                    size='large'
                    edge="start"
                    color='inherit'
                >
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}