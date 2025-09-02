document.addEventListener('DOMContentLoaded', () => {
    const name = "Andréia Alves";
    const subtitle = "Advocacia";
    const nameContainer = document.getElementById('name-container');
    const subtitleContainer = document.getElementById('subtitle-container');

    // Limpa os containers para garantir que estão vazios
    nameContainer.innerHTML = '';
    subtitleContainer.innerHTML = '';

    // Função reutilizável para animar texto letra por letra
    const animateText = (element, text, initialDelay) => {
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('letter');
            // Se for um espaço, usa um non-breaking space para manter o espaçamento
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            // Aplica um delay para cada letra aparecer em sequência
            span.style.animationDelay = `${initialDelay + index * 100}ms`;
            element.appendChild(span);
        });
        // Retorna o tempo total da animação para este texto
        return initialDelay + text.length * 100;
    };

    // Anima "Andréia Alves" após um breve atraso para o fade-in do logo
    const nameAnimationEndTime = animateText(nameContainer, name, 800);

    // Anima "Advocacia" logo após o nome terminar de aparecer
    animateText(subtitleContainer, subtitle, nameAnimationEndTime + 100);
});