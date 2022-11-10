Reproduction of setting `key` after spread on jsx

## Remix Package
Remix Express v1.7.5

```typescript jsx
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
```

### Error
>Unexpected Server Error
>
>Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
