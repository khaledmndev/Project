let $q = jQuery
$q(document).ready(function () {
	$('.branches .map ').css({
		height: $('.branches-area-height').outerHeight(),
	})
	$('body.home #map').css({
		height: $('.branches-area').outerHeight(),
	})
	mapboxgl.accessToken = jQuery('#hdnMapAPI').val()
	mapboxgl.setRTLTextPlugin(
		'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
	)
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v10',
		center: [35.630209803217, 34.04210727401376],
		zoom: 8,
	})

	var geojson = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.89174254112133, 33.82856139971191], //zahle
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.22008215017656, 33.28204575535104], //tyre
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.471700147194596, 33.776856487696165], //khalde
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.45171548808593, 33.714904588676944], //damour
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.63022956281139, 34.03977056479567], //safra, jbeil
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [36.1736860913086, 33.99307761347142], //baalbak
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [36.01532749045341, 33.91350435246329], //badnayel
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.896339085924104, 33.777681609089086], //Ber elyes
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [35.78342633616026, 34.40381616726226], //qalamoun
				},
			},
		],
	}

	geojson.features.forEach(function (marker) {
		var el = document.createElement('div')
		el.className = 'fa fa-location-dot fa-2x map-marker-color'
		new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map)
	})

	map.scrollZoom.disable()
	map.addControl(new mapboxgl.NavigationControl())
	var el = jQuery('<div>')
		.width(40)
		.height(40)
		.append(function () {
			return jQuery('<span>')
				.addClass('map-marker')
				.append(function () {
					return jQuery('<span>').addClass(
						'fa fa-location-dot fa-x map-marker-color'
					)
				})
		})


})
