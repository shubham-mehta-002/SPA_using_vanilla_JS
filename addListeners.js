export function addListeners(parentElement, parentRoute = "/") {
    // Add listeners to all "my-link" elements
    Array.from(parentElement.getElementsByTagName("my-link")).forEach((link) => {
      let linkRoute = link.getAttribute("data-route");
  
      // Construct the full route path for the link
      let updatedRoutePath = linkRoute.startsWith("/")
        ? linkRoute
        : parentRoute.startsWith("/")
        ? `${parentRoute}/${linkRoute}`
        : `/${parentRoute}/${linkRoute}`;
  
      link.setAttribute("data-route", updatedRoutePath);
  
      link.addEventListener("click", (e) => {
        const loginState = checkLoginState()
        console.log({loginState},loginState === true)
        e.preventDefault();
        const routeType = link.getAttribute('data-route-type')
        console.log({routeType})
        if(routeType && routeType.toLowerCase()==='private' && !loginState){
          document.getElementById('root').innerHTML = '<h3>Unauthorized !! Login to access this route </h3>'
          return;
        }
        const routePath = link.getAttribute("data-route");
  
        if (window.location.pathname === routePath) {
          return;
        }
  
        history.pushState(null, null, routePath);
        renderContent();
      });
    });
  
    // Add listeners to all buttons with data-type="navigate"
    parentElement
      .querySelectorAll('button[data-btn-type="navigate"]')
      .forEach((link) => {
        let linkRoute = link.getAttribute("data-route");
  
        let updatedRoutePath = linkRoute.startsWith("/")
          ? linkRoute
          : parentRoute.startsWith("/")
          ? `${parentRoute}/${linkRoute}`
          : `/${parentRoute}/${linkRoute}`;
  
        link.setAttribute("data-route", updatedRoutePath);
  
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const routePath = link.getAttribute("data-route");
  
          if (window.location.pathname === routePath) {
            return;
          }
  
          history.pushState(null, null, routePath);
          renderContent();
        });
      });
  }