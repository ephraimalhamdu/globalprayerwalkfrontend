

// define jQuery onClick handler for the menu icon
$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing'); //means that if nav element already hv showing, remove it or add it if it if otherwise
        $('.nav ul').toggleClass('showing');

    });
});


/*  
=====add project to github
echo "# globalprayerwalkfrontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perfectephraim/globalprayerwalkfrontend.git
git push -u origin main
                
*/