// ==UserScript==
// @name        Redmineデザイン（CSS外出し）
// @description RedmineのWikiやチケットの見づらさを解消するスクリプトです。
// @version     0.1
// @copyright   Takayuki Yamaguchi
// @namespace   https://www.rakus.co.jp/
// @match       https://my.redmine.jp/demo/projects/demo/wiki/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @resource    design https://github.com/GoriGoripon/Business/blob/master/css/designRedmine.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText('design'));

$("pre").wrap("<div class=\"boxNote\"></div>");
$("pre").before("<span class=\"boxTitle\">Note</span>");
