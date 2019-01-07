/* global $ */
$(document).ready(function() {
    $("button").click(function() {
        console.log("Clicked")
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("input[name=question1]:checked").val();
        var q2Result = $("#question2").val();
        var q3Result = $("input[name=question3]:checked").val();
        var totalScore = 0;
        if(name.length <4) {
            totalScore = totalScore + 0
        } else if(name.length >=4 && name.length <= 6) {
            totalScore = totalScore + 100
        } else if(name.length >=7) {
            totalScore = totalScore + 200
        }
        if(q1Result == 1) {
            
        } else if(q1Result == 2) {
            totalScore = totalScore + 500
        }
        if(q2Result >= 0 && q2Result <= 2) {
            totalScore = totalScore + 50
        } else if(q2Result >= 3 && q2Result <= 5) {
            totalScore = totalScore + 100
        } else if(q2Result >= 6) {
            totalScore = totalScore + 200
        }
        if(q3Result == 1) {
            totalScore = totalScore + 0
        } else if(q3Result == 2) {
            totalScore = totalScore + 100
        }
    });

});
