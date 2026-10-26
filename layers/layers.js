var wms_layers = [];

var lyr_TopographicWetnessIndex_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Topographic Wetness Index<br />\
    <img src="styles/legend/TopographicWetnessIndex_0_0.png" /> <= 6.8137<br />\
    <img src="styles/legend/TopographicWetnessIndex_0_1.png" /> 6.8137 - 11.0534<br />\
    <img src="styles/legend/TopographicWetnessIndex_0_2.png" /> 11.0534 - 15.2930<br />\
    <img src="styles/legend/TopographicWetnessIndex_0_3.png" /> 15.2930 - 19.5327<br />\
    <img src="styles/legend/TopographicWetnessIndex_0_4.png" /> > 19.5327<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TopographicWetnessIndex_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8439426.865765, 1223908.565422, 8508076.768445, 1253401.574780]
        })
    });
var format_RING_BUFFER_1 = new ol.format.GeoJSON();
var features_RING_BUFFER_1 = format_RING_BUFFER_1.readFeatures(json_RING_BUFFER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RING_BUFFER_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RING_BUFFER_1.addFeatures(features_RING_BUFFER_1);
var lyr_RING_BUFFER_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RING_BUFFER_1, 
                style: style_RING_BUFFER_1,
                popuplayertitle: 'RING_BUFFER',
                interactive: true,
                title: '<img src="styles/legend/RING_BUFFER_1.png" /> RING_BUFFER'
            });
var lyr_WDFR04_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'WDFR04<br />\
    <img src="styles/legend/WDFR04_2_0.png" /> 1<br />\
    <img src="styles/legend/WDFR04_2_1.png" /> 12.7<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/WDFR04_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8439426.896110, 1223919.738656, 8508114.658558, 1253408.511506]
        })
    });

lyr_TopographicWetnessIndex_0.setVisible(true);lyr_RING_BUFFER_1.setVisible(true);lyr_WDFR04_2.setVisible(true);
var layersList = [lyr_TopographicWetnessIndex_0,lyr_RING_BUFFER_1,lyr_WDFR04_2];
lyr_RING_BUFFER_1.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', 'ringId': 'ringId', 'distance': 'distance', });
lyr_RING_BUFFER_1.set('fieldImages', {'fid': '', 'ORDER1': '', 'ringId': '', 'distance': '', });
lyr_RING_BUFFER_1.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', 'ringId': 'no label', 'distance': 'no label', });
lyr_RING_BUFFER_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});