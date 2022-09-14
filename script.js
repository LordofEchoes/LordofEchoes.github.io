function openLayer(event, layerName)
{
  var layer, tabs;
  // Get all elements with class="tabcontent" and hide them
  layer = document.getElementsByClassName("layer");
  for (var i = 0; i < layer.length; i++) {
    layer[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(layerName).style.display = "block";
  event.currentTarget.className += " active";
}