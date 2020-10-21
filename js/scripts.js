

// define jQuery onClick handler for the menu icon
$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing'); //means that if nav element already hv showing, remove it or add it if it if otherwise
        $('.nav ul').toggleClass('showing');

    });


    //for the carousel slidder 
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
//add properties for custom next and prev icons 
        nextArrow: $('.next'),
        prevArrow: $('.prev'),

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

      });
                      



});


/*  
=====add project to github===============================================================
echo "# globalprayerwalkfrontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perfectephraim/globalprayerwalkfrontend.git
git push -u origin main
                
*/