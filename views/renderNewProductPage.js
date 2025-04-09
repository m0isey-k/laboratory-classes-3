const renderNewProductPage = (data) => {
  return `
    <html>
        <body>
            <head><title>Shop - Newest product</title></head>
            <nav>
                <a href='/'>Home</a>
                <br /><a href='/product/add'>Add product</a>
                <br /><a href='/logout'>Logout</a>
            </nav>
            <h1>Newest product</h1>
            ${
              data
                ? `<br /><div>New product data - ${data}</div>`
                : "<br /><div>No new products available.</div>"
            }
        </body>
    </html>
    `;
};

module.exports = renderNewProductPage;