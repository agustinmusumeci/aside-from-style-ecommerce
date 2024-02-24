function useReset(nameRef, descRef, priceRef, stockRef, categoryRef) {
    nameRef.current.value = nameRef.current.name
    descRef.current.value = descRef.current.name
    priceRef.current.value = priceRef.current.name
    stockRef.current.value = stockRef.current.name
    categoryRef.current.value = categoryRef.current.name
}

export default useReset