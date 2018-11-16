import $ from 'jquery'

$(function(){
    $('ul>li:odd').css('backgroundColor','green')
    $('ul>li:even').css('backgroundColor','pink')
})