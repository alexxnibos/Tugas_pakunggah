function toggleIdentity(identityId, buttonId) {
    var identityDiv = document.getElementById(identityId);
    var button = document.getElementById(buttonId);
    
    if (identityDiv.style.display === 'none' || identityDiv.style.display === '') {
        identityDiv.style.display = 'block';
        button.textContent = 'Tutup Identitas';
    } else {
        identityDiv.style.display = 'none';
        button.textContent = 'Tampilkan Identitas';
    }
}