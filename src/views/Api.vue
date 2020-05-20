<template>
<div class="map_content">
    <div id="myMap">
        <h1> 地図で見る世界史〜ナポレオン戦争編〜</h1>
    </div>
</div>
</template>


<script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ama93ddPQW1FH78kAF1k3EN3qWBOHRGc8L1s5PHTkdK7U_ExYOwiUEWfy6wzkE3o' async defer></script>
<script src="./src/asesets/BmapQuery.js"></script>
<script>
//****************************************************************************************
// BingMaps&BmapQuery
//****************************************************************************************
//Init
function GetMap(){
    //------------------------------------------------------------------------
    //1. Instance
    //------------------------------------------------------------------------
    const map = new Bmap("#myMap");
    //------------------------------------------------------------------------
    //2. Display Map
    //------------------------------------------------------------------------
    map.startMap(48.5112, 2.2055, "aerial", 5); //The place is Bellevue.
    //----------------------------------------------------
    //3. Add Pushpin-Text
    // pinText(lat, lon, "title", "subtitle", "text");
    //----------------------------------------------------
    let pin_1 = map.pinText(31.1256, 29.5718, "エジプト遠征","1798~99/1801","マルタ島経由でアレクサンドリアに上陸");
    let pin_2 = map.pinText(48.5112, 2.2055, "ナポレオン戦争","ヴィジュアルで理解！","首都パリ");
    let pin_3 = map.pinText(55.457, 37.3656, "ロシア遠征","1802","モスクワまで行ったのね。。");
    let pin_4 = map.pinText(48.8590, 2.3074, "アウステルリッツの戦い","1805","第三回対仏大同盟を粉砕");
    let pin_5 = map.pinText(51.2022, 12.2216, "ライプツィヒの戦い","1813","仏軍大敗");
    let pin_6 = map.pinText(42.47, 10.17, "エルバ島に配流","1814","ナポレオンの島流し①");
    let pin_7 = map.pinText(50.715, 4.399, "ワーテルローの戦い","1815","100日天下");
    let pin_8 = map.pinText(-14.0833, -4.3, "セントヘレナ島に配流","1815","ナポレオンの島流し②");   
}
</script>


<style>
/* html,body{height:100%;}body{padding:0;margin:0;}h1{padding:0;margin:0;font-size:50%;} */

.map_content h1 {
    font-size: 50px; 
    font-weight: bold; 
    color: brown;
}

#myMap {
    width:100% ;
    height:80%;
    float:left;
}
</style>