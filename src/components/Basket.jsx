import { ShoppingBasket } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import React from 'react'
import BasketItem from './BasketItem';

const Basket = ({closeDrawer, isOpen, selectedProducts, removeFromBasket, removeNumberOfGoods}) => {
	return (
    	<Drawer
			anchor='right'
			open={isOpen}
			onClose={closeDrawer} 
		>
			<List sx={{width: "400px"}}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket/>
					</ListItemIcon>
					<ListItemText primary="Корзина"/>
				</ListItem>
			</List>
			<Divider/>
			{!selectedProducts[0] ? (
				<Typography sx={{margin: "1.5rem auto"}}>Корзина пуста</Typography>
			) : (
				selectedProducts.map((el, i) => <BasketItem key={el.id + i} removeFromBasket={removeFromBasket} removeNumberOfGoods={removeNumberOfGoods} {...el}/>)
			)
			}
    	</Drawer>
  	)
}

export default Basket