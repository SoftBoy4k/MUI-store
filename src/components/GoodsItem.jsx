import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { goods } from "../data/goods";


export default function GoodsItem({name, poster, price, addNumberOfGoods, selectProduct}) {
    return (
        <Grid item xs={8} md={4}>
            <Card sx={{maxWidth: 500, height: 630, display: "flex", flexWrap: "wrap"}}>
                <CardMedia
                    sx={{height: 400, width: 490}}
                    image={poster}
                    title={name}
                />
                <CardContent>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions sx={{width: "100%", display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Button size="small" onClick={(e) => {
                        const productName = e.target.parentElement.parentElement.parentElement.firstChild.children[1].textContent
                        const product = goods.filter(el => el.name.includes(productName))
                        selectProduct(product)
                        addNumberOfGoods()
                        }}>Купить</Button>
                    <Typography>
                        {price} руб.
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );    
}