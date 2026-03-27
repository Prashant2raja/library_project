
const giftTrigger = document.getElementById('gift-trigger');
        const entryScreen = document.getElementById('entry-screen');
        const mainContent = document.getElementById('main-content');
        const bgMusic = document.getElementById('bgMusic');
        const typewriterEl = document.getElementById('typewriter');
        const secretBtn = document.getElementById('secret-btn');
        const secretModal = document.getElementById('secret-modal');
        const closeModal = document.getElementById('close-modal');

        // Entry Logic
        giftTrigger.addEventListener('click', () => {
            entryScreen.style.opacity = '0';
            entryScreen.style.transform = 'scale(1.2) translateY(-20px)';
            
            setTimeout(() => {
                entryScreen.style.display = 'none';
                mainContent.style.display = 'block';
                setTimeout(() => mainContent.style.opacity = '1', 50);
                startBirthdayMagic();
            }, 800);

            bgMusic.volume = 0.3;
            bgMusic.play().catch(() => {});
        });

        function startBirthdayMagic() {
            startTypewriter();
            initSwipers();
            spawnHearts();
            triggerInitialConfetti();
        }

        function startTypewriter() {
            const text = "Hey Suggi... this is something special just for you ❤️";
            let i = 0;
            typewriterEl.classList.add('typewriter');
            function type() {
                if (i < text.length) {
                    typewriterEl.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 70);
                } else {
                    setTimeout(() => typewriterEl.classList.remove('typewriter'), 2000);
                }
            }
            type();
        }

        function spawnHearts() {
            const heartSymbols = ['❤️', '💖', '💗', '💕'];
            setInterval(() => {
                if (document.hidden) return;
                const heart = document.createElement('div');
                heart.className = 'heart-particle';
                heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '-10vh';
                heart.style.fontSize = (Math.random() * 12 + 12) + 'px';
                heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
                heart.style.animationDelay = (Math.random() * 0.8) + 's';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 8500);
            }, 450);
        }

        function initSwipers() {
            new Swiper(".gallerySwiper", {
                effect: "cards",
                grabCursor: true,
                loop: true,
                autoplay: { delay: 3000 },
                pagination: { el: ".swiper-pagination", clickable: true },
            });

            new Swiper(".shayariSwiper", {
                loop: true,
                effect: "fade",
                fadeEffect: { crossFade: true },
                autoplay: { delay: 4000 }
            });
        }

        function triggerInitialConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff4d6d', '#9d4edd', '#ffffff']
            });
        }

        secretBtn.addEventListener('click', () => {
            secretModal.classList.add('show-modal');
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.7 },
                colors: ['#ff4d6d', '#ffffff']
            });
        });

        closeModal.addEventListener('click', () => {
            secretModal.classList.remove('show-modal');
        });

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.8s ease-out';
            observer.observe(card);
        });

        // Helper Animations
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `;
        document.head.appendChild(style);

          // Cake Blowing Logic
        document.getElementById('cake-section').addEventListener('click', () => {
            const flame = document.getElementById('cake-flame');
            const hint = document.getElementById('blow-hint');
            
            if (flame.style.display !== 'none') {
                flame.style.display = 'none';
                hint.innerText = "WISH GRANTED! ❤️";
                hint.classList.remove('animate-bounce');
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.7 },
                    colors: ['#f48fb1', '#ff4d6d', '#ffffff']
                });
            }
        });

