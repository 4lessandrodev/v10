function showImage({target}) {
 const modalImage = document.getElementById('modal-image');
 modalImage.src = target.src;
 $('#modal-galery-image').modal('show')
}
const images = document.querySelectorAll('#galery .galery-image img');
images.forEach((image)=> image.addEventListener('click', showImage));