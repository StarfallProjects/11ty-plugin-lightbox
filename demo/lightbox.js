module.exports = function(lightbox){
    return(`
    <div class="sp-lightbox-container">
      <h2 style="text-align:center">${lightbox.title}</h2>
      <div class="sp-lightbox-row">
        ${lightbox.imgPath.map((path, index) => `<div class="sp-lightbox-column">
        <img src="${path}" style="width:100%" onclick="openModal();currentSlide(${index + 1})" class="hover-shadow cursor"><div class="caption-container">
        <p id="caption">${lightbox.caption[index]}</p>
      </div>
        </div>`).join('')}
      </div>
      <div id="myModal" class="modal">
        <button class="sp-lightbox-close cursor" onclick="closeModal()">&times;</button>
        <div class="modal-content">
          ${lightbox.imgPath.map((path, index, array) => `<div class="mySlides"><div class="numbertext">${index + 1} / ${array.length} </div>            
          <img src="${path}" style="max-width:100%; object-fit: cover;"><div class="caption-container">
          <p id="caption">${lightbox.caption[index]}</p>
        </div>
          </div>`).join('')}
          <button class="prev" onclick="plusSlides(-1)">&#10094;</button>
          <button class="next" onclick="plusSlides(1)">&#10095;</button>   

        </div>
      </div>
    </div>
<script>
 function openModal() {
   document.getElementById("myModal").style.display = "block";
 }

 function closeModal() {
   document.getElementById("myModal").style.display = "none";
 }

 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";
 }
 </script>
 <style>
.sp-lightbox-container {
   box-sizing: border-box;
   max-width: 100%;
}

.sp-lightbox-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sp-lightbox-column {
  margin: 0 0.5vw 2vw 0.5vw;
  width: 18vw;
}

.modal {
   display: none;
   position: fixed;
   z-index: 1;
   padding-top: 50px;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   background-color: rgba(0,0,0,0.5);
}

.modal-content {
   position: relative;
   margin: auto;
   padding: 0;
   max-width: 800px;
}
 .sp-lightbox-close {
   background-color: black;
   border: none;
   border-radius: 3px;
   color: white;
   position: absolute;
   top: 10px;
   right: 25px;
   font-size: 35px;
   font-weight: bold;
}

.sp-lightbox-close:hover,
 .sp-lightbox-close:focus {
   color: #999;
   text-decoration: none;
   cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
}
.prev,
.next {
  background-color: black;
  border:none;
  border-radius: 0 3px 3px 0;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: -50px;
  padding: 16px;
  position: absolute;
  top: 50%;
  transition: 0.6s ease;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

 }

 .next {
   right: 0;
   border-radius: 3px 0 0 3px;
 }

 .prev:hover,
 .next:hover {
   background-color: rgba(0, 0, 0, 0.8);
}

.numbertext {
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -4px;
}

.caption-container {
   text-align: center;
   background-color: black;
   padding: 2px 16px;
   color: white;
 }

 .demo {
   opacity: 0.6;
 }

 .active,
 .demo:hover {
   opacity: 1;
 }

 img.hover-shadow {
   transition: 0.3s;
 }

 .hover-shadow:hover {
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 </style>    
`);
};





