export default function Index() {
	return (
		<div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
			<Item  {...{id: "1"}} key={"1"}/>

		</div>
	);
}

function Item<T extends { id: string }>({id}: T) {
	return <span>{id}</span>
}