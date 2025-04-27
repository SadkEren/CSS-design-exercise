function toggleCollaps(id, button) {
    // Tüm collapsible elementlerini ve butonları seç
    const collapsibles = document.querySelectorAll('.collaps-portfolio');
    const buttons = document.querySelectorAll('.button');

    // Tüm collapsible elementlerini kapat ve butonların rengini sıfırla
    collapsibles.forEach((collapsible) => {
        if (collapsible.id !== id) {
            collapsible.style.display = 'none'; // Diğer collapsible öğelerini kapat
        }
    });

    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.style.backgroundColor = ''; // Diğer butonları renksiz yap
        }
    });

    // Tıklanan collapse'ı aç/kapat
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block'; // Aç
        button.style.backgroundColor = 'rgb(225, 225, 225)'; // Tıklanan butonu renkli yap
    } else {
        element.style.display = 'none'; // Kapat
        button.style.backgroundColor = ''; // Butonu varsayılan renge döndür
    }
}
