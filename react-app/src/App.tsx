function Item<T extends { id: string }>({id}: T) {
	return <span>{id}</span>
}

function App() {

	return (
		<div className="App">
			<Item  {...{id: "1"}} key={"1"}/>
		</div>
	)
}

export default App
