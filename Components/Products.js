export function Products(){
    return `<h1>This is child products page </h1>
                      <nav>
                        <my-link data-route="product1">product1</my-link>
                        <my-link data-route="product2">product2</my-link>
                    </nav>
    <button data-type="navigate" data-route="/about">Navigate to About page</button>

                    <div id="d1.1" class="outlet"></div>`
}