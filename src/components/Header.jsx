import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';

export default function Header({count, openDrawer}) {
    return (
        <AppBar position='sticky' sx={{top: 0}}>
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>
                    MUI store
                </Typography>
                <IconButton
                    size='large'
                    edge="start"
                    color='inherit'
                    onClick={() => openDrawer()}
                >   
                    <Badge badgeContent={count} color="secondary">
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}