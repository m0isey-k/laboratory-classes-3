const { STATUS_CODE } = require("../constants/statusCode");

const express = require("express");

const router = express.Router();

const { MENU_LINKS } = require("../constants/navigation");

const productSlice = require("../store/products");

router.get("/add", (_request, response) => {
    response.render("add-product", {headTitle: "Shop - Add product", menuLinks: MENU_LINKS, activeLinkPath: "/products/add"})
});

router.post("/add", (request, response) => {
    const { name, description } = request.body;
    productSlice.newestProduct = {name: name, description: description}
    productSlice.products.push({name: name, description: description})
    response.status(STATUS_CODE.FOUND).redirect("/products/new");
});

router.get("/new", (_request, response) => {
    data = productSlice.newestProduct.name ? `Name - ${productSlice.newestProduct.name}, Description - ${productSlice.newestProduct.description}` : null 
    response.render("new-product", {headTitle: "Shop - Newest product", menuLinks: MENU_LINKS, activeLinkPath: "/products/new", data: data})
});

router.get("/", (_request, response) => {
    response.render("products", {headTitle: "Shop - Products", path: "/", menuLinks: MENU_LINKS, activeLinkPath: "/products", products: productSlice.products})
});

module.exports = router;