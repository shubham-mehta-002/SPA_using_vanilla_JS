export function Products(){
    return `<h1>This is child products page </h1>
                      <nav>
                        <my-link data-route="product1" data-route-type="private">product1</my-link>
                        <my-link data-route="product2">product2</my-link>
                    </nav>
    <button data-btn-type="navigate" data-route="/contact-us">Navigate Contact-us</button>

                    <div class="outlet"></div>`
}