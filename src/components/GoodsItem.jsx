import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";


export default function GoodsItem({name, poster, price}) {
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
                    <Button size="small">Купить</Button>
                    <Typography>
                        {price} byn
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );    
}