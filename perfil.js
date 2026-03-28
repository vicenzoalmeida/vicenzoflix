// Script para armazenar o perfil ativo no localStorage ao clicar em um perfil

document.addEventListener('DOMContentLoaded', function () {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(function (profile) {
        profile.addEventListener('click', function (e) {
            const img = profile.querySelector('img');
            const name = profile.querySelector('.profile__name').textContent;
            const image = img.getAttribute('src');
            // Salva o perfil ativo no localStorage
            localStorage.setItem('perfilAtivo', JSON.stringify({ nome: name, imagem: image }));
        });
    });
});
