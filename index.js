import { Home, About, Products,Profile , Services ,Login,Logout } from "./Components/index.js";
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
            content: `<h2>This is product 1</h2>
                        <my-link data-route="buy-me">buy-me</my-link>
                        <my-link data-route="add-to-cart">add to cart</my-link>
                      <div id="d1.1.1" class="outlet"></div>`,
            children: [
              {
                path: "buy-me",
                content: "<h2>BUY ME</h2>",
              },
              {
                path: "add-to-cart",
                content: "<h2>ADD ME TO CART</h2>",
              },
            ],
          },
          {
            path: "product2",
            content: `<h2>This is product 2</h2>`,
          },
        ],
      },
      {
        path:"services",
        content:Services()
      }
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
        content: "<h2>This is about 1</h2>",
      },
      {
        path: "about2",
        content: "<h2>This is about 2</h2>",
      },
    ],
  },
  {
    path: "/login",
    content: Login(),
  },
  {
    path: "/logout",
    content: Logout(),
  }
];

createRouter(routes);




const authBtn = document.querySelector('button[data-btn-type="auth"]')

authBtn?.addEventListener('click',()=>{

  const loginState = localStorage.getItem('login')
  if(loginState){
    navigate("/logout")
    localStorage.removeItem('login')
    authBtn.innerText = "Login"
  }else{
    navigate("/login")
    localStorage.setItem('login','true')
    authBtn.innerText = "Logout"
  }
})


navigate('/home')
