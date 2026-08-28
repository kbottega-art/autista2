// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // ===== MENU MOBILE =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ===== SISTEMA DE ABAS (roteiro) =====
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active de todos
                tabs.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Ativa o clicado
                this.classList.add('active');
                const target = document.getElementById(this.dataset.tab);
                if (target) {
                    target.classList.add('active');
                }

                // Atualiza ARIA
                tabs.forEach(b => b.setAttribute('aria-selected', 'false'));
                this.setAttribute('aria-selected', 'true');
            });
        });

        // Inicializa ARIA
        tabs[0].setAttribute('aria-selected', 'true');
    }

    // ===== FORMULÁRIO DE CONTATO =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simula envio
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = '✅ Enviado com sucesso!';
            btn.style.background = '#2a7a4a';
            btn.disabled = true;

            // Limpa o formulário
            this.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#1f4b74';
                btn.disabled = false;
            }, 3000);
        });
    }

    // ===== NAVEGAÇÃO SUAVE PARA LINKS INTERNOS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== FECHA MENU MOBILE AO CLICAR EM UM LINK =====
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    console.log('🧩 IncluVid — Projeto de inclusão digital para autistas');
    console.log('📖 Versão completa com múltiplas páginas');
});