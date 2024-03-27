var map = L.map('map').setView([33.75731160009038, -96.54358983096523], 17);

                    var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoiZGVwdGhzdGFyIiwiYSI6ImNrejZpYzR5MDExMG0ycG16OGowbGw1MmcifQ.DuhgPhM_uUYZLwejXuUaVA'
                    }).addTo(map);

                    var marker = L.marker([33.75731160009038, -96.54358983096523]).addTo(map);
                    marker.bindPopup("<b>Downtown Denison <br>Farmer's Market</b><br>701 W Main St<br> Denison, TX 75020").openPopup();