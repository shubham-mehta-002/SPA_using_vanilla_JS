import { Home, About, Products,Profile } from "./Components/index.js";
import { createRouter, navigate } from "./router.js";

const routes = [
  {
    path: "/home",
    content: Home(),
    children: [
      {
        path: "products",
        content: Products(),
        children: [
          {
            path: "product1",
            content: `<h6>This is product 1</h6>
            <my-link data-route="buy-me">buy-me</my-link>
                      <my-link data-route="add-to-cart">add to cart</my-link>
                      <div id="d1.1.1" class="outlet"></div>`,
            children: [
              {
                path: "buy-me",
                content: "<h5>BUY ME</h5>",
              },
              {
                path: "add-to-cart",
                content: "<h5>ADD ME TO CART</h5>",
              },
            ],
          },
          {
            path: "product2",
            content: `<h6>This is product 2</h6>`,
          },
        ],
      },
    ],
  },
  {
    path:'/profile',
    content:Profile()
  },
  {
    path: "/about",
    content: About(),
    children: [
      {
        path: "about1",
        content: "This is about 1",
      },
      {
        path: "about2",
        content: "This is about 2",
      },
    ],
  },
  {
    path: "/products",
    content: "<h1>This is parent product page....</h1>",
  },
];

createRouter(routes);

// document.getElementById('navigateToAbout').addEventListener('click',()=>{
//   navigate('/about')
//   renderContent()
// })

// document.getElementById('navigateToContactUs').addEventListener('click',()=>{
//   navigate('/about')
//   renderContent()
// })
