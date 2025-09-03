document.addEventListener('DOMContentLoaded', () => {
    // --- Seletores do DOM ---
    const body = document.body;
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const nameContainer = document.getElementById('name-container');
    const subtitleContainer = document.getElementById('subtitle-container');
    const oabContainer = document.getElementById('oab-container');
    const loadingBar = document.getElementById('loading-bar');

    // --- Textos para Animação ---
    const name = "Andreia Alves dos Santos";
    const subtitle = "Advocacia";
    const oab = "OAB/SP 320.400";

    // Adiciona classe para desativar scroll durante o splash
    body.classList.add('splash-active');

    // Limpa os containers para garantir que estão vazios
    nameContainer.innerHTML = '';
    subtitleContainer.innerHTML = '';
    oabContainer.innerHTML = '';

    // Função reutilizável para animar texto letra por letra
    const animateText = (element, text, initialDelay) => {
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('letter');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.style.animationDelay = `${initialDelay + index * 40}ms`;
            element.appendChild(span);
        });
        return initialDelay + text.length * 50;
    };

    // --- Inicia a Sequência de Animação ---
    const logoAnimationTime = 1200; // 1s de animação + 0.2s de delay
    const nameAnimationStartTime = 800;
    const nameAnimationEndTime = animateText(nameContainer, name, nameAnimationStartTime);
    const subtitleAnimationEndTime = animateText(subtitleContainer, subtitle, nameAnimationEndTime + 100);
    const oabAnimationEndTime = animateText(oabContainer, oab, subtitleAnimationEndTime + 100);

    // Calcula o tempo total das animações de texto e logo
    const totalAnimationTime = Math.max(logoAnimationTime, oabAnimationEndTime);

    // Duração total da splash = tempo das animações + 1s de espera
    const splashDuration = totalAnimationTime + 1000; 

    // Define a duração da animação da barra de carregamento
    loadingBar.style.animation = `loading-animation ${splashDuration}ms linear forwards`;
    
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        body.classList.remove('splash-active');
        mainContent.style.display = 'block';

        // Remove o splash da árvore do DOM após a transição para otimizar
        setTimeout(() => {
            splashScreen.remove();
        }, 500); // Tempo da transição de opacidade do CSS
    }, splashDuration);

    // --- Lógica da Navegação Mobile ---
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
});