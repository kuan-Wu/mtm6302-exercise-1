function showSymbols() {
    const msg = document.getElementById('msg');
   for (let i = 128100; i <= 128200; i++) {
       msg.innerHTML = msg.innerHTML + '<div class="col-lg-2 col-md-4 col-xs-6"><p class="p-3 border" style="text-align: center;"><span style="font-size: 5rem;">' +' &#' + i+'</span><br><code>'+i+'</code></p></div>';
   }
}