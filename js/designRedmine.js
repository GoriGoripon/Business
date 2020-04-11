  // ==UserScript==
  // @name        Redmineデザイン
  // @description RedmineのWikiやチケットの見づらさを解消するスクリプトです。
  // @version     0.1
  // @copyright   Takayuki Yamaguchi
  // @namespace   https://www.rakus.co.jp/
  // @match       https://my.redmine.jp/demo/projects/demo/wiki/*
  // @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
  // ==/UserScript==

  //  目次
  //  タイトル　フォントサイズ
  //  テーブル
  //  太字
  //  強調
  //  取り消し線
  //  脚注・注釈
  //  引用
  //  リンクの種類
  //  フォント

  // Markdown記法（開始）：目次
  // Markdown記法（終了）：目次

  // Markdown記法（開始）：## ～ #####
  //  疑似要素のStyleを埋め込む
  // var css = '#content h1:before{counter-increment:Part;   content:counter(Part) " ";}' +
  //           '#content h2:before{counter-increment:Chapter;content:counter(Part) "-" counter(Chapter) " ";}' +
  //           '#content h3:before{counter-increment:Clause; content:"（" counter(Clause) "）";}' +
  //           '#content h4:before{counter-increment:Section;content:"（" counter(Clause) "-" counter(Section) "）";}';
  //
  // var style = document.createElement('style');
  // style.appendChild(document.createTextNode(css));
  // document.getElementsByTagName('head')[0].appendChild(style);

  // $("#content").css({
  //   "counter-reset":"Part",
  // });
  $("#content").css({
    "background":"#e8e8e7",
  });
  $("#content h1,#sidebar h1").css({
    "padding":"0.5em",
    "color":"#010101",
    "border-top":"solid 2px #c9c8c7",
    "border-bottom":"solid 2px #c9c8c7"

    // "counter-reset":"Chapter",
    // "padding":"0.5em",
    // "color":"#010101",
    // "background":"#fffaf4",
    // "border-top":"solid 3px #ffaf58",
    // "border-bottom":"solid 3px #ffaf58"
  });
  $("#content h2").css({
    "width":"80%",
    "padding":"0.5em",
    "color":"#010101",
    "border-bottom":"solid 2px #c9c8c7"

    // "counter-reset":"Clause",
    // "padding":"0.5em",
    // "color":"#010101",
    // "background":"#fffaf4",
    // "border-bottom":"solid 3px #ffaf58"
  });
  $("#content h3").css({
    "width":"60%",
    "padding":"0.5em",
    "color":"#010101",
    "border-bottom":"dashed 2px #c9c8c7"

    // "counter-reset":"Section",
    // "padding":"0.5em",
    // "color":"#010101",
    // "border-bottom":"solid 3px #ffaf58"
  });
  $("#content h4").css({
    "width":"40%",
    "padding":"0.5em",
    "color":"#010101",
    "border-left":"solid 4px #c9c8c7",
    "border-bottom":"initial"

    // "padding":"0.5em",
    // "color":"#010101",
    // "border-left":"solid 3px #ffaf58"
  });
  //  疑似要素はDOMではないので、JavaScript内部では使用不可
  //  $("h1::before").css({
  //    "counter-increment":"Part",
  //    "content":"counter(Part)"
  //  });
  //  $("h2::before").css({
  //    "counter-increment":"Chapter",
  //    "content":"counter(Part) \"-\" counter(Chapter)"
  //  });
  //  $("h3::before").css({
  //    "counter-increment":"Clause",
  //    "content":"\"(\" counter(Clause) \")\""
  //  });
  // Markdown記法（終了）：## ～ #####

  // Markdown記法（開始）：```
  $("pre").wrap("<div class=\"boxNote\"></div>");
  $("div .boxNote > pre").each(function(){
    if($(this).has("code").length){
      if($(this).children("code").attr("class") == "java syntaxhl"){
        $(this).before("<span class=\"boxTitle boxTitleRed\">Java</span>");
      } else if ($(this).children("code").attr("class") == "sql syntaxhl") {
        $(this).before("<span class=\"boxTitle boxTitleRed\">SQL</span>");
      } else {
        $(this).before("<span class=\"boxTitle boxTitleRed\">Others</span>");
      }
    }else{
      $(this).before("<span class=\"boxTitle boxTitleBlue\">Memo</span>");
    }
  });
  $("div.wiki pre").css({
    "background-color":"initial",
    "border":"initial",
    "border-radius":"initial",
    "width":"initial",
    "overflow-x":"initial",
    "overflow-y":"initial",
  });
  $(".boxNote").css({
    "position":"relative",
    "display":"inline-block",
    "min-width":"60%",
    "margin":"10px 0",
    "padding":"40px 24px 24px 24px",
    "background":"#dedddb",
  });
  $(".boxTitle").css({
    "position":"absolute",
    "top":"0px",
    "left":"0px",
    "color":"#ffffff",
    "padding":"2px 12px",
    "letter-spacing":".03125rem",
    "font-family":"'Poppins',sans-serif",
    "font-size":".875rem",
  });
  $(".boxTitleRed").css({
    "background":"#f76d91",
  });
  $(".boxTitleBlue").css({
    "background":"#2491ca",
  });
  $("pre").css({
    "margin":"0",
    "padding":"0",
  });
  $(".syntaxhl").css({
    "background":"transparent",
  });

  // Markdown記法（終了）：```

  // Markdown記法（開始）：---
  $("hr").css({
    "display":"none"
  });
  // Markdown記法（終了）：---
