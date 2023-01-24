import { IconButton, ListItem, ListItemText } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';



const BasketItem = ({name, price, removeFromBasket, id, removeNumberOfGoods}) => {
    return (
        <ListItem>
            <ListItemText 
            primary={name}
            secondary={price + " руб."}
            />
            <IconButton
            sx={{flexFlow: 1}}
            onClick={() => {
                removeFromBasket(id) 
                removeNumberOfGoods()
            }}
            >
                <CloseIcon/>
            </IconButton>
        </ListItem>
    )
}

export default BasketItem