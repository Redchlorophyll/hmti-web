var form = document.querySelector('#contactForm');
var formcontainer = document.querySelector('.form-grid');

$('#contactForm').submit(function(e){
    e.preventDefault();
    form.classList.add("hide");
    formcontainer.innerHTML = `
        <div class="success-container">
          <div class="svg-container">
            <lottie-player class="player" src="https://assets4.lottiefiles.com/packages/lf20_QKHsU2.json"  background="transparent"  speed="1" autoplay></lottie-player>
          </div>
          <div class="detail-container">
            <h3>Pesan Anda telah terkirim. kami akan menghubungi anda via Email segera setelah membaca pesan anda. Terimakasih~</h3>
          </div>
        </div>
    `

});
