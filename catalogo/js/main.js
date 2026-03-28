import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {

    // Recupera o perfil ativo do localStorage
    const perfilAtivo = localStorage.getItem('perfilAtivo');
    if (perfilAtivo) {
        try {
            const { nome, imagem } = JSON.parse(perfilAtivo);
            const kidsLink = document.querySelector('.kids-link');
            const profileIcon = document.querySelector('.profile-icon');
            if (kidsLink) kidsLink.textContent = nome;
            if (profileIcon) profileIcon.src = imagem;
        } catch (e) {
            // Se der erro, remove o perfil inválido
            localStorage.removeItem('perfilAtivo');
        }
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
