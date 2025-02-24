function tambahkanKeHasil(nilai) {
	document.getElementById('result').value += nilai;
}

function bersihkanHasil (){
	 document.getElementById('result').value = '';
}

function hitungHasil() {
    const kolomHasil = document.getElementById('result');
    try {
        kolomHasil.value = eval(kolomHasil.value); 
    } catch (error) {
        kolomHasil.value = 'Error';
    }
}