export function Home() {
  return `<h1>This is home page....</h1>
                    <nav>
                        <my-link data-route="products">Products</my-link>
                        <my-link data-route="about">About</my-link>
                        <my-link data-route="contact-us" data-route-type="private">Contact-us</my-link>
                    </nav>
                    <div class="outlet"></div>`;
}
