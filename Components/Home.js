export function Home() {
  return `<h2>This is home page....</h2>
                    <div>
                        <my-link data-route="products">Products</my-link>
                        <my-link data-route="services">Services</my-link>
                        <my-link data-route="faq">FAQ</my-link>
                    </div>
                    <div class="outlet"></div>`;
}
