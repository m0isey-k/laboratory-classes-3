const express = require("express");

const router = express.Router();
const { MENU_LINKS } = require("../constants/navigation")

// 🔄 Refactoro the Changer
// Funkcja "response.sendFile" nie jest odpowiednia do zwracania widoków generowanych przez
// większość silników szablonów. Należy ją zastąpić, inną odpowiednią metodą.
router.get("/", (_request, response) => {
    response.render("home", {headTitle: "Home", menuLinks: MENU_LINKS, activeLinkPath: "/"})
});

module.exports = router;