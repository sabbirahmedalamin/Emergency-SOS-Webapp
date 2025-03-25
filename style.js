let map;

function initMap(lat, lon) {
  map = L.map('map').setView([lat, lon], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  const marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup('📍 You are here').openPopup();
}

function getLocationAndInitMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        initMap(lat, lon);
      },
      () => {
        alert('Location access denied or unavailable.');
      }
    );
  } else {
    alert('Geolocation not supported.');
  }
}

function sendEmergencyMail() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const mailLink = `mailto:?subject=Emergency Alert&body=I need help. Here's my location: https://www.google.com/maps?q=${latitude},${longitude}`;
      window.location.href = mailLink;
    },
    () => alert('Unable to get location.')
  );
}

function findNearby(type) {
  alert(`🔍 Feature coming soon: Search for nearby ${type.replace('_', ' ')}`);
}

window.onload = getLocationAndInitMap;
