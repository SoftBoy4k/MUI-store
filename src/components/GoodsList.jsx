import { Grid } from "@mui/material";
import GoodsItem from "./GoodsItem";


export default function GoodsList({goods}) {
    return(
        <Grid container spacing={2}>
            {goods.map(el => <GoodsItem key={el.id} {...el}/>)}
        </Grid>
    );
}