var current_link = "this stream link";
    var id = "this video id :3";
    var path = new URLSearchParams(window.location.search).get('path');
    var d = "? empty";
    var start_url = "https://streaming-m3u.blogspot.com/?path=";
   


    function download() {
      var appWindow = window.open("https://freenetmyanmarth.blogspot.com/?link=" + current_link, "blank");
      setTimeout(function () {
        if (appWindow) {
          appWindow.location = "https://freenetmyanmarth.blogspot.com/";
        }
      }, 1000);
    }




    function copy() {
      var url = window.location.href
      document.getElementById('copy').innerHTML = "<div class='div col-5 mt-2'>" + url + "</div>";
    }
   
    function bulid_grid(url,image,title,length,date){


      let tmp = `<div class="post-outer">` +
  `<article class="post hentry" itemscope="itemscope" itemtype="http://schema.org/BlogPosting">` +
  `<div class="post-body entry-content" id="post-body-8370939328811301277"><div class="post-thumbnail"><span class="invert-shade"><i class="shade-icon">` +
  `<a href="` + 
  url +
  `"><img width="300" height="180" src="` +
  image +
  `" alt="we are amp" title="we are amp"></a>` +
  `</div><h2 class="" itemprop="name headline" title="we are amp">` +
  title +
  `</h2><span class="label-info">` +
  `</span><div itemprop="description articleBody">` +
  `<div><div id="summary8370939328811301277"><div class="snippets">Empty caption </div></div></div>` +
  `</div>` +
  `<div class="post-info"><span class="post-author vcard"></span>` +
  `<span class="post-timestamp">`+
    length +
  `<abbr class="published updated" itemprop="datePublished" title="2024-03-27T09:57:00-07:00">March 27, 2024</abbr></a>` +
  `</span>` +
  `<span class="comment-info"><a href="https://streaming-m3u.blogspot.com/2024/03/we-are-amp.html#comment-form" onclick="">Komentar </a>` +
  `</span></div><div class="clear"></div></div></article></div>`;
   return tmp;


      

    }

     function setReleated(_list){
           let temp_string_list = "";
           let i = 0;
            
            while (i < _list.length) {


             

              temp_string_list =  temp_string_list + bulid_grid(start_url+_list[i].u,_list[i].ip,_list[i].tf,_list[i].d);

              i++;
               
            }
          return temp_string_list;
     }




 function startDk(){

  let encode_url = encodeURI("https://www.xvideos.com"+path);
    



    var url = "https://api.allorigins.win/get?url=" + encode_url;

    fetch(url)
      .then((res) => {

        return res.json();

      })

      .then((gen1) => {

        var data = gen1.contents;
        current_link = data.split("html5player.setVideoUrlLow('")[1].split("'")[0];
        let video_related_string = data.split("var video_related=")[1].split("}];")[0]+"}]";
        let releated = JSON.parse(video_related_string);
        let releated_result =  setReleated(releated);
          
        
        

      
        var format = `<video src="`
          + current_link + `"`
          + ` id="my-video"`
          + ` controls`
          + ` preload="auto"`
          + ` width="100%"`
          + ` type="mp4"`
          + ` data-setup="{}" ></video>`+releated_result;




  document.getElementById("main").innerHTML = format;

});
  

 }    


 if (path != null && path != undefined){

  startDk();

 }
   

 /*
  var appWindow = window.open("https://freenetmyanmarth.blogspot.com/"+id,"blank");
  setTimeout( function () {
  if (appWindow) {
  appWindow.location ="https://freenetmyanmarth.blogspot.com"; } },1000); */



