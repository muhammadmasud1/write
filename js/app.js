var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1);-webkit-animation:love " +
      r_time +
      "s ease;-moz-animation:love " +
      r_time +
      "s ease;-ms-animation:love " +
      r_time +
      "s ease;animation:love " +
      r_time +
      "s ease'></div>"
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1);-webkit-animation:love " +
      (r_time + 5) +
      "s ease;-moz-animation:love " +
      (r_time + 5) +
      "s ease;-ms-animation:love " +
      (r_time + 5) +
      "s ease;animation:love " +
      (r_time + 5) +
      "s ease'></div>"
  );
}, 500);

var i = 0;
var txt1 =
  "Hi Nadia.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!  << When I saw you for the first time, you became something special to me. As the days passed, you drew closer to my heart .....! >><< and I found myself captivated by your presence....! >> <<Your thoughts always resonate within my mind>> << and everything about you is endlessly interesting to me...! >>                   << I am somewhat nervous Because I haven't said these words to anyone >> << and I won't say to anyone in future... << I must admit...! >> << expressing these feelings makes me somewhat nervous because...!>>I<<'ve never shared these words with anyone before,and I don't plan to do so in the future....!>> You hold a unique place in my heart, and I cherish you deeply .....! >>!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....! >>  <<<I love my parents more than anything else in this world...!>> << and now, you are the only person whom I love equally with them...>><< You've become a significant part of my life...>> bringing joy and warmth that I never knew was missing....!>>>  <<Nadia, I love you, sweetheart. Give me one chance to prove my love and to make you ...>> <<as happy as you've made me.> < I'm ready to embark on this journey with you...! >>                                                        >I Love U <Nadia.....! |                  <<<< Give me One chance to Prove my Love ...!";
var speed = 120;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css(
        "background-image",
        "url('https://i.ibb.co/M2YDZJ8/503785-couple-love.jpg')"
      );
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
