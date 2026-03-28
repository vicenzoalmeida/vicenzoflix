import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // localStorage.removeItem('perfilAtivo'); // Removido para manter o perfil ativo

    // Recupera o perfil ativo do localStorage
    const perfilAtivo = localStorage.getItem('perfilAtivo');
    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');
    const defaultProfileImg = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
    if (perfilAtivo) {
        try {
            const { nome, imagem } = JSON.parse(perfilAtivo);
            if (kidsLink) kidsLink.textContent = nome;
            let imgPath = imagem;
            // Se for um caminho relativo de assets, ajusta para funcionar no catálogo
            if (imgPath && !imgPath.startsWith('http') && !imgPath.startsWith('..')) {
                imgPath = '../' + imgPath;
            }
            if (profileIcon) profileIcon.src = imgPath || defaultProfileImg;
        } catch (e) {
            // Se der erro, remove o perfil inválido
            localStorage.removeItem('perfilAtivo');
            if (profileIcon) profileIcon.src = defaultProfileImg;
        }
    } else {
        if (profileIcon) profileIcon.src = defaultProfileImg;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
