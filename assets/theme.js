// Alterna entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Aplica o tema salvo ou o preferido do sistema
(function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
})();

// Cria botão de alternância
window.addEventListener('DOMContentLoaded', function() {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Alternar entre modo claro e escuro');
    btn.style.position = 'fixed';
    btn.style.top = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '1000';
    btn.style.padding = '10px 14px';
    btn.style.background = 'var(--color-dark, #222)';
    btn.style.color = 'var(--color-text, #fff)';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.cursor = 'pointer';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    btn.style.fontSize = '1.5rem';
    btn.style.width = '44px';
    btn.style.height = '44px';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';

    function updateIcon() {
        const theme = document.body.getAttribute('data-theme');
        btn.innerHTML = theme === 'light'
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
    }
    updateIcon();
    btn.addEventListener('click', function() {
        toggleTheme();
        updateIcon();
    });
    // Atualiza ícone se o tema mudar por outro meio
    const observer = new MutationObserver(updateIcon);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    document.body.appendChild(btn);
});