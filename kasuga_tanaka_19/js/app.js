
// オーディオの反映
function soundbell(n) {
  // 以下略
  // 対象となるID名
  var id = 'sound-'+n ;
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;
}


$(document).ready(function(){
  $( '#slider1' ).sliderPro({
width: "600px",
centerImage:true,
slideDistance:10,
visibleSize:"100%",
buttons: true,//ナビゲーションボタン
breakpoints: {
480: {//表示方法を変えるサイズ
width: "100%",
autoHeight:true,
visibleSize:"100%",
slideDistance:10,
arrows:false,
}
}
});
});

$(function() {
  $('#pagepiling').pagepiling({
      menu: '#nav',
      sectionSelector: '.section',
      sectionsColor: ['#fff', '#eee', '#ddd', '#ccc'],
      anchors: ['page1', 'page2', 'page3', 'page4'],
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['page1', 'page2', 'page3', 'page4']
      },
  });
});

