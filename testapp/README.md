# nodejs-api-gyakorlas
1. express application generator használata

    ```express --view=pug myapp```

2. ```.gitignore``` használata

    [https://www.toptal.com/developers/gitignore/api/node](https://www.toptal.com/developers/gitignore/api/node)

3. route paraméterek:
Ha a route a következő: localhost:3000/products/10/clothes/1234
akkor a 10-és 1234 értékeket paraméterekbe foglalhatjuk:
/products/:productId/clothes/:clothesId