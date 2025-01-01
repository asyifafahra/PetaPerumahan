var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_tanah_2 = new ol.format.GeoJSON();
var features_tanah_2 = format_tanah_2.readFeatures(json_tanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tanah_2.addFeatures(features_tanah_2);
var lyr_tanah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tanah_2, 
                style: style_tanah_2,
                popuplayertitle: 'tanah',
                interactive: true,
                title: '<img src="styles/legend/tanah_2.png" /> tanah'
            });
var format_areahijau_3 = new ol.format.GeoJSON();
var features_areahijau_3 = format_areahijau_3.readFeatures(json_areahijau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areahijau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areahijau_3.addFeatures(features_areahijau_3);
var lyr_areahijau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areahijau_3, 
                style: style_areahijau_3,
                popuplayertitle: 'area hijau',
                interactive: true,
                title: '<img src="styles/legend/areahijau_3.png" /> area hijau'
            });
var format_fasilitas_4 = new ol.format.GeoJSON();
var features_fasilitas_4 = format_fasilitas_4.readFeatures(json_fasilitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_4.addFeatures(features_fasilitas_4);
var lyr_fasilitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_4, 
                style: style_fasilitas_4,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_4.png" /> fasilitas'
            });
var format_jalan_5 = new ol.format.GeoJSON();
var features_jalan_5 = format_jalan_5.readFeatures(json_jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_5.addFeatures(features_jalan_5);
var lyr_jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_5, 
                style: style_jalan_5,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_5.png" /> jalan'
            });
var format_rumah_6 = new ol.format.GeoJSON();
var features_rumah_6 = format_rumah_6.readFeatures(json_rumah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_6.addFeatures(features_rumah_6);
var lyr_rumah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_6, 
                style: style_rumah_6,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_6.png" /> rumah'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_tanah_2.setVisible(true);lyr_areahijau_3.setVisible(true);lyr_fasilitas_4.setVisible(true);lyr_jalan_5.setVisible(true);lyr_rumah_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_tanah_2,lyr_areahijau_3,lyr_fasilitas_4,lyr_jalan_5,lyr_rumah_6];
lyr_tanah_2.set('fieldAliases', {'id': 'id', });
lyr_areahijau_3.set('fieldAliases', {'id': 'id', });
lyr_fasilitas_4.set('fieldAliases', {'id': 'id', 'fasilitas': 'fasilitas', });
lyr_jalan_5.set('fieldAliases', {'id': 'id', });
lyr_rumah_6.set('fieldAliases', {'id': 'id', 'Luas_m2': 'Luas_m2', 'kode rumah': 'kode rumah', 'status': 'status', 'type rumah': 'type rumah', });
lyr_tanah_2.set('fieldImages', {'id': '', });
lyr_areahijau_3.set('fieldImages', {'id': 'TextEdit', });
lyr_fasilitas_4.set('fieldImages', {'id': 'TextEdit', 'fasilitas': 'TextEdit', });
lyr_jalan_5.set('fieldImages', {'id': 'TextEdit', });
lyr_rumah_6.set('fieldImages', {'id': 'TextEdit', 'Luas_m2': 'TextEdit', 'kode rumah': 'TextEdit', 'status': '', 'type rumah': '', });
lyr_tanah_2.set('fieldLabels', {'id': 'hidden field', });
lyr_areahijau_3.set('fieldLabels', {'id': 'hidden field', });
lyr_fasilitas_4.set('fieldLabels', {'id': 'hidden field', 'fasilitas': 'header label - visible with data', });
lyr_jalan_5.set('fieldLabels', {'id': 'hidden field', });
lyr_rumah_6.set('fieldLabels', {'id': 'hidden field', 'Luas_m2': 'inline label - always visible', 'kode rumah': 'inline label - always visible', 'status': 'inline label - always visible', 'type rumah': 'inline label - always visible', });
lyr_rumah_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});