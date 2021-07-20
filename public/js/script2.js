function initMap() {
    const lat = parseInt(document.getElementById('lat').textContent);
    const lng = parseInt(document.getElementById('lng').textContent);
    const coords = {lat, lng}
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom : 10,
        center : coords
    })
    const marker = new google.maps.Marker({
        position: coords,
        map : map
    })
}