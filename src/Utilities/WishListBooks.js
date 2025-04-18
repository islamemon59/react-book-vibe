const getWishListBooks = () => {
    const wishListBooksId = localStorage.getItem("wishList")
    if(wishListBooksId){
        const booksId = JSON.parse(wishListBooksId)
        return booksId
    } else {
        return []
    }
}

const setWishListBooksId = (id) => {
    const booksId = getWishListBooks()
    if(booksId.includes(id)){
        alert("Wishlist already exist")
    } else {
        booksId.push(id)
        const convertedBooksId = JSON.stringify(booksId)
        localStorage.setItem("wishList", convertedBooksId)
    }
}

export {setWishListBooksId, getWishListBooks}