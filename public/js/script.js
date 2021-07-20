function initMap() {
  navigator.geolocation.getCurrentPosition(coords)
  const texts = document.querySelectorAll(".grid--item-contain");
  console.log(texts)
  texts.forEach((text) => {
    text.innerHTML = "Sin datos"
  })
}
const coords = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {lat, lng};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: coords
  });
  const marker = new google.maps.Marker({
    position: coords,
    map : map
  });
}
