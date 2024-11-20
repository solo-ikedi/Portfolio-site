
        var myString="I'm a versatile professional web-site developer with experience in various programming languages,frameworks, and digital marketing tools. My goal is to continuously improve my skills and stay updated with the latest industry trends. I enjoy tackling challenging problems, delivering high-quality results, and helping businesses grow through strategic marketing efforts.I'm a front-end developer with experience in building responsive websites using HTML, CSS,JavaScript and some JavaScript Frameworks like React. I have a passion for creating intuitive user interfaces.";
        var myArray=myString.split("");
        var loopTimer;

        function frameLooper() {

            if(
                myArray.length > 0){
                    document.getElementById("About-me").innerHTML +=myArray.shift();
                }else{
                    clklearTimeout(loopTimer);
                }
                loopTimer=setTimeout('frameLooper()',50);
            
        }
        frameLooper();


        function backToNormal(){
                document. getElementById('para').style.backgroundColor="red";
            }
            function newPicture(){
            document.getElementById('image').src= "picss.jpg";
            }
            
            function oldPicture(){
                document.getElementById('image').src= "mine e.jpg";
                }
        
var wss_i = 0;
var wss_array =[" Portfolio", " Personal site", " Page"];
var wss_elem;
function wssNext(){
    wss_i++;
    wss_elem.style.opacity = 0;
    wss_elem.style.color = "red";
    
    if (wss_i > (wss_array.length- 1)) {
        wss_i = 0;
    }
    setTimeout('wssSlide()', 1000);
} 



function wssSlide (){
    wss_elem.innerHTML = wss_array[wss_i];
    wss_elem.style.opacity = 1;
    setTimeout('wssNext()', 2000);

}
wss_elem = document.getElementById("wss"); wssSlide();


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slides img");
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 3 seconds
}

function prevSlide() {
    slideIndex = slideIndex - 2;
    showSlides();
}