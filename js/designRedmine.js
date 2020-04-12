// ==UserScript==
// @name        Redmineデザイン
// @description RedmineのWikiやチケットの見づらさを解消するスクリプトです。
// @version     0.1
// @copyright   Takayuki Yamaguchi
// @namespace   https://www.rakus.co.jp/
// @match       https://my.redmine.jp/demo/projects/demo/wiki/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

//  太字
//  強調
//  取り消し線
//  脚注・注釈
//  引用
//  フォント

//  共通設定
$("#content").css({
  "background":"#e8e8e7",
});

// Markdown記法（開始）：目次
$("div.wiki ul.toc").wrap("<div class=\"boxToc\"></div>");
$("div.wiki ul.toc").before("<span class=\"boxTocTitle\">目次</span>");
$("div.wiki ul.toc > li:first").remove();
$("div.wiki div.boxToc").css({
  "position":"relative",
  "display":"inline-block",
  "min-width":"60%",
  "margin":"10px 0",
  "padding":"40px 24px 24px 24px",
  "background":"#dedddb",
});
$("div.wiki ul.toc").css({
  "background":"transparent",
  "border":"initial"
});
$("div.wiki span.boxTocTitle").css({
  "position":"absolute",
  "top":"0px",
  "left":"0px",
  "color":"#ffffff",
  "padding":"2px 12px",
  "letter-spacing":".03125rem",
  "font-family":"'Poppins',sans-serif",
  "font-size":".875rem",
  "background":"#61b1c8",
});
$("div.wiki div.boxToc li").css({
  "padding-top":"10px",
});
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
$("#content h1,#sidebar h1").css({
  // "counter-reset":"Chapter",
  "font-size":"1.2rem",
  "padding":"0.45em",
  "color":"#010101",
  "border-left":"solid 4px #c9c8c7",
});
$("#content h2,#sidebar h2").css({
  // "counter-reset":"Clause",
  "font-size":"1.1rem",
  "width":"80%",
  "padding":"0.2em 0.2em 0.2em 0",
  "color":"#010101",
  "border-bottom":"solid 2px #c9c8c7"
});
$("#content h3,#sidebar h3").css({
  // "counter-reset":"Section",
  "font-size":"1.0rem",
  "width":"60%",
  "padding":"0.2em 0.2em 0.2em 0",
  "color":"#010101",
  "border-bottom":"dashed 2px #c9c8c7"
});
$("#content h4, #sidebar h4").css({
  "font-size":"0.9rem",
  "width":"40%",
  "padding":"0.2em 0.2em 0.2em 0",
  "color":"#010101",
  "border-bottom":"dotted 3px #c9c8c7"
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
var array;
var str;
var res;
$("div .boxNote > pre").each(function(){
  if($(this).has("code").length){
    if($(this).children("code").attr("class") == "java syntaxhl"){
      $(this).before("<span class=\"boxNoteTitle boxNoteTitleRed\">Java</span>");
    } else if ($(this).children("code").attr("class") == "sql syntaxhl") {
      $(this).before("<span class=\"boxNoteTitle boxNoteTitleRed\">SQL</span>");
    } else {
      $(this).before("<span class=\"boxNoteTitle boxNoteTitleRed\">Others</span>");
    }
  }else{
    $(this).before("<span class=\"boxNoteTitle boxNoteTitleBlue\">Memo</span>");
    array = $(this).text().split(/\r\n|\r|\n/);
    str = array[0];
    if(str.substr(0,3) == "■■■"){
      $(this).prev().text(str.substr(3));
      array.shift();
      res = array.join('\n');
      $(this).text(res);
    }
  }
});
$("div.boxNote").css({
  "position":"relative",
  "overflow-x":"auto",
  "overflow-y":"hidden",
  // "min-width":"60%",
  "margin":"10px 0",
  "padding":"40px 24px 24px 24px",
  "background":"#dedddb",
});
$("span.boxNoteTitle").css({
  "position":"absolute",
  "top":"0px",
  "left":"0px",
  "color":"#ffffff",
  "padding":"2px 12px",
  "letter-spacing":".03125rem",
  "font-family":"'Poppins',sans-serif",
  "font-size":".875rem",
});
$("div.wiki div.boxNote pre").css({
  "background-color":"initial",
  "border":"initial",
  "border-radius":"initial",
  "width":"initial",
  "overflow-x":"initial",
  "overflow-y":"initial",
});
$(".boxNoteTitleRed").css({
  "background":"#f76d91",
});
$(".boxNoteTitleBlue").css({
  "background":"#6D90F7",
});
$("pre").css({
  "margin":"0",
  "padding":"0",
});
$(".syntaxhl").css({
  "background":"transparent",
});
// Markdown記法（終了）：```

// Markdown記法（開始）：テーブル
// $("div.wiki table").css({
//   "border-collapse":"collapse",
//   "border-spacing":"0px",
//   "-webkit-border-horizontal-spacing":"0px",
//   "-webkit-border-vertical-spacing":"0px",
// });
$("table tbody tr:first").attr("class","firstRow")
$("table tr:even").css({
  "background-color":"#dedddb",
});
$("table tr.firstRow").css({
  "background-color":"#FF9863",
  "color":"#FFFFFF",
});
// $("").css({
// });
// $("").css({
// });
// Markdown記法（終了）：テーブル

// Markdown記法（開始）：---
$("hr").css({
  "display":"none"
});
// Markdown記法（終了）：---

// Markdown記法（開始）：リンク
$("#content a,#sidebar a").css({
  "color":"#3893a8",
  "text-decoration":"underline"
});
$("#content ul.toc a").css({
  "font-size":"14px",
});
// Markdown記法（終了）：リンク
