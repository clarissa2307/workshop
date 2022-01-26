/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 const baseUrl = "https://platzi-avo.vercel.app";
 const appNode = document.querySelector('#app')
 const formatPrice = (price) => {
   const newPrice = new window.Intl.NumberFormat('en-En', {
        style: "currency",
        currency: "USD",
     }).format(price)
     
     return newPrice;
 };


//web  api
//conectarnos al servidor
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en json
.then(respuesta => respuesta.json())

//json -> Data -> renderizar info
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
        //crear imagen
        const imagen = document.createElement('img');
        imagen.className = "h-25 w-25 md:h-25 md:w-25 rounded-full mx-auto md:mx-0 md:mr-6";
        imagen.src = `${baseUrl}${item.image}`;
        //craer titulo
         const title = document.createElement('h2');
         title.className = "text-lg text-pink-800 hover:text-blue-300 text-2xl";
         title.textContent = item.name;
         
         //crear precio
         const price = document.createElement("div");
         price.className = "text-gray-600 text-xl";
         price.textContent = formatPrice(item.price);
         
          //unir price y title
          const priceAndTitle = document.createElement('div');
          priceAndTitle.className = "text-center md:text-left";
          priceAndTitle.appendChild(title);
          priceAndTitle.appendChild(price);

          //unir imagen con priceAndTitle 
          const card = document.createElement('div');
          card.className = "md:flex bg-white rounded-lg p-6";
          card.appendChild(imagen);
          card.appendChild(priceAndTitle);

         todosLosItems.push(card);
 
    });
    appNode.append(...todosLosItems);
});

