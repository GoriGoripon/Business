// ==UserScript==
// @name        Redmineデザイン
// @description RedmineのWikiやチケットの見づらさを解消するスクリプトです。
// @version     0.1
// @copyright   Takayuki Yamaguchi
// @namespace   https://www.rakus.co.jp/
// @match       https://my.redmine.jp/demo/projects/demo/wiki/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

// Markdown記法（開始）：目次
// Markdown記法（終了）：目次

// Markdown記法（開始）：## ～ #####
$("body").css({
  "counter-reset":"chapter"
});
$("h1").css({
  "counter-reset":"sub-chapter"
});
$("h2").css({
  "counter-reset":"section"
});
$("h1::before").css({
  "counter-increment":"chapter",
  "content":"counter(chapter)"
});
$("h2::before").css({
  "counter-increment":"sub-chapter",
  "content":"counter(chapter) \"-\" counter(sub-chapter)"
});
$("h3::before").css({
  "counter-increment":"section",
  "content":"\"(\" counter(section) \")\""
});
// Markdown記法（終了）：## ～ #####

// Markdown記法（開始）：```
$("pre").wrap("<div class=\"boxNote\"></div>");
$("pre").before("<span class=\"boxTitle\">Note</span>");
$("div.wiki pre").css({
  "background-color":"initial",
  "border":"initial",
  "border-radius":"initial",
  "width":"initial",
  "overflow-x":"initial",
  "overflow-y":"initial",
});
$(".boxNote").css({
  "display":"inline-block",
  "min-width":"50%",
  "position":"relative",
  "margin":"2em 0",
  "padding":"0.5em 1em",
  "border":"solid 3px #62c1ce"
});
$(".boxNote .boxTitle").css({
  "position":"absolute",
  "display":"inline-block",
  "top":"-27px",
  "left":"-3px",
  "padding":"0 9px",
  "height":"25px",
  "line-height":"25px",
  "font-size":"17px",
  "background":"#62c1ce",
  "color":"#ffffff",
  "font-weight":"bold",
  "border-radius":"5px 5px 0 0"
});
$("pre").css({
  "margin":"0",
  "padding":"0"
});
// Markdown記法（終了）：```
