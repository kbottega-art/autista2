// Aguarda o DOM carregar completamente para garantir que todos os elementos existam
document.addEventListener('DOMContentLoaded', function() {

    // ===== SISTEMA DE ABAS (roteiro) =====
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões e conteúdos
            tabs.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Adiciona 'active' no botão clicado
            this.classList.add('active');
            const target = document.getElementById(this.dataset.tab);
            if (target) {
                target.classList.add('active');
            }

            // Atualiza atributos de acessibilidade ARIA
            tabs.forEach(b => b.setAttribute('aria-selected', 'false'));
            this.setAttribute('aria-selected', 'true');
        });
    });

    // Inicializa o estado ARIA do primeiro botão
    if (tabs.length > 0) {
        tabs[0].setAttribute('aria-selected', 'true');
    }

    // ===== MODO REDUZIDO (menos estímulos) =====
    const switchBtn = document.getElementById('modoSwitch');
    if (switchBtn) {
        switchBtn.addEventListener('click', function() {
            // Alterna a classe no body
            document.body.classList.toggle('modo-reduzido');
            // Alterna a classe 'active' no botão switch
            const isActive = this.classList.toggle('active');
            // Atualiza o atributo ARIA
            this.setAttribute('aria-checked', isActive);
        });
    }

    // ===== BOTÃO DEMO (simulação) =====
    const demoBtn = document.getElementById('demoBtn');
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            alert('🧩 Demo conceitual: aqui seria aberta a tela inicial do app com vídeos recomendados, interface calma e opções de acessibilidade.');

            // Feedback visual temporário no botão
            this.textContent = '✅ Simulado!';
            this.style.background = '#2a7a4a';
            setTimeout(() => {
                this.textContent = '▶️ Simular navegação';
                this.style.background = '#1f4b74';
            }, 2000);
        });
    }

});