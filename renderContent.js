import { addListeners } from "./addListeners";
export function renderContent() {
    // Clearing previous content from root
    document.getElementById("root").innerHTML = "";
  
    // Adding event listeners for initial content
    addListeners(document, "/");
  
    // spliting current url into path segments
    const pathArray = window.location.pathname.split("/").filter(Boolean);
  
    let availableRoutes = routes; // starting with top level routes
  
    if (pathArray.length === 0) {
      return;
    }
  
    pathArray.forEach((path, index) => {
      let view = findRouteBasedOnPath(availableRoutes, path);
  
      const allOutletDivs = Array.from(document.getElementsByClassName("outlet"));
  
      // Select the last outlet div or the root element, if not found
      let outletDivToRender =
        allOutletDivs.length > 0
          ? allOutletDivs[allOutletDivs.length - 1]
          : document.getElementById("root");
  
      if (!view) {
        outletDivToRender.innerHTML = "Page Not Found";
  
        return;
      } else {
        outletDivToRender.innerHTML = view.content;
      }
  
      // Add event listeners for the newly rendered content
      addListeners(
        outletDivToRender,
        [...pathArray].splice(0, index + 1).join("/")
      );
  
      // Updating availableRoutes to children if available for next path
      availableRoutes = view.children ? view.children : [];
    });
  }
  