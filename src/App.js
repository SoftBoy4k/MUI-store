import { Container } from "@mui/material";
import { useState } from "react";
import GoodsList from "./components/GoodsList";
import Header from "./components/Header";
import Search from "./components/Search";
import { goods } from "./data/goods";


export default function App() {

	let [searchValue, setSearchValue] = useState("");

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

	return (
		<>
			<Header/>
			<Container maxWidth="md">
				<Search onChange={changeSearchValue} value={searchValue}/>
				<GoodsList goods = {getSearchElements()}/>
			</Container>
		</>
	);
}
