export function navigate(route){
    history.pushState(null,null,route)
    renderContent()
  }
  