const getReadListBooksId = () => {
    const storeBookId = localStorage.getItem("readList")
    if(storeBookId){
        const storeId = JSON.parse(storeBookId)
        return storeId
    } else {
        return []
    }
}

const setReadBooksId = (id) => {
    const storeBooksId = getReadListBooksId()
    if(storeBooksId.includes(id)){
        alert("This id already exist")
    } else{
        storeBooksId.push(id)
        const convertedBooksId = JSON.stringify(storeBooksId)
        localStorage.setItem("readList", convertedBooksId)
    }
}

export {setReadBooksId, getReadListBooksId}