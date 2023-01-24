import { Container } from "@mui/material";
import { useState } from "react";
import Basket from "./components/Basket";
import GoodsList from "./components/GoodsList";
import Header from "./components/Header";
import Search from "./components/Search";
import { goods } from "./data/goods";


export default function App() {

	const [searchValue, setSearchValue] = useState("");
	const [numberOfGoods, setNumberOfGoods] = useState(0);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [isOpen, setIsOpen] = useState(false);


	const changeSearchValue = (e) => {
		setSearchValue(e.target.value);
	}

	const getSearchElements = () => {
		const value = searchValue.trim().toLowerCase()
		if (value.length > 0) {
			return goods.filter(el => el.name.toLowerCase().includes(value))
		} else {
			return goods
		}
	}

	const addNumberOfGoods = () => {
		setNumberOfGoods(prevCount => prevCount + 1)
	}

	const removeNumberOfGoods = () => {
		setNumberOfGoods(prevCount => prevCount - 1)
	}

	const selectProduct = (product) => {
		setSelectedProducts(prevProducts => [...prevProducts, ...product])
	}

	const removeProduct = (id) => {
		setSelectedProducts(prevProducts => prevProducts.filter(el => el.id !== id))
	}

	return (
		<> 
			<Header count={numberOfGoods} openDrawer={() => setIsOpen(true)}/>
			<Container maxWidth="md">
				<Search onChange={changeSearchValue} value={searchValue}/>
				<GoodsList goods={getSearchElements()} addNumberOfGoods={addNumberOfGoods} selectProduct={selectProduct}/>
			</Container>
			<Basket isOpen={isOpen} closeDrawer={() => setIsOpen(false)} removeNumberOfGoods={removeNumberOfGoods} selectedProducts={selectedProducts} removeFromBasket={removeProduct}/>
		</>
	);
}
