 // Global score
        let totalScore = 0;

        // Function to show different levels
        function showLevel(levelId, evt) {
            // Hide all sections
            document.querySelectorAll('.level-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(levelId).classList.add('active');
            
            // Update navigation buttons
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('active');
            });
            const targetButton = evt ? evt.target : document.querySelector(`nav button.active`);
            if (targetButton) {
                targetButton.classList.add('active');
            }
        }

        // Function to show lessons within each level
        function showLesson(level, lessonId, evt) {
            // Hide all lesson contents for this level
            document.querySelectorAll(`#${level} .lesson-content`).forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected lesson
            document.getElementById(`${level}-${lessonId}`).classList.add('active');
            
            // Update tab buttons
            const parentSection = document.getElementById(level);
            parentSection.querySelectorAll('.lesson-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            const targetTab = evt ? evt.target : parentSection.querySelector('.lesson-tab.active');
            if (targetTab) {
                targetTab.classList.add('active');
            }
        }

        // Beginner Exercise Check
        function checkBeginnerExercise() {
            const inputs = document.querySelectorAll('#beginner-grammar .blank-input');
            let correct = 0;
            let result = document.getElementById('beginnerResult');
            
            inputs.forEach(input => {
                if (input.value.toLowerCase().trim() === input.dataset.answer) {
                    correct++;
                    input.style.backgroundColor = '#d4edda';
                } else {
                    input.style.backgroundColor = '#f8d7da';
                }
            });
            
            if (correct === inputs.length) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Perfect! All ${correct} answers are correct!`;
                totalScore += 10;
                updateScore();
                document.getElementById('beginnerProgress').style.width = '100%';
                document.getElementById('beginnerProgress').innerText = '100%';
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `You got ${correct} out of ${inputs.length} correct. Try again!`;
            }
            result.style.display = 'block';
        }

        // Intermediate Exercise Check
        function checkIntermediateExercise() {
            const inputs = document.querySelectorAll('#intermediate-grammar .blank-input');
            let correct = 0;
            let result = document.getElementById('intermediateResult');
            
            inputs.forEach(input => {
                if (input.value.toLowerCase().trim() === input.dataset.answer) {
                    correct++;
                    input.style.backgroundColor = '#d4edda';
                } else {
                    input.style.backgroundColor = '#f8d7da';
                }
            });
            
            if (correct === inputs.length) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Excellent! All ${correct} answers are correct!`;
                totalScore += 15;
                updateScore();
                document.getElementById('intermediateProgress').style.width = '100%';
                document.getElementById('intermediateProgress').innerText = '100%';
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `You got ${correct} out of ${inputs.length} correct. Try again!`;
            }
            result.style.display = 'block';
        }

        // Advanced Exercise Check
        function checkAdvancedExercise() {
            const inputs = document.querySelectorAll('#advanced-grammar .blank-input');
            let correct = 0;
            let result = document.getElementById('advancedResult');
            
            inputs.forEach(input => {
                if (input.value.toLowerCase().trim() === input.dataset.answer) {
                    correct++;
                    input.style.backgroundColor = '#d4edda';
                } else {
                    input.style.backgroundColor = '#f8d7da';
                }
            });
            
            if (correct === inputs.length) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Outstanding! All ${correct} answers are correct!`;
                totalScore += 20;
                updateScore();
                document.getElementById('advancedProgress').style.width = '100%';
                document.getElementById('advancedProgress').innerText = '100%';
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `You got ${correct} out of ${inputs.length} correct. Try again!`;
            }
            result.style.display = 'block';
        }

        // Quiz Functions
        function checkQuiz() {
            let score = 0;
            const questions = ['q1', 'q2', 'q3'];
            let result = document.getElementById('quizResult');
            
            questions.forEach(q => {
                const selected = document.querySelector(`input[name="${q}"]:checked`);
                if (selected && selected.dataset.correct === 'true') {
                    score++;
                }
            });
            
            if (score === 3) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Beginner Quiz: ${score}/3 - Excellent!`;
                totalScore += 10;
                updateScore();
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `Beginner Quiz: ${score}/3 - Keep practicing!`;
            }
            result.style.display = 'block';
        }

        function checkQuiz2() {
            let score = 0;
            const questions = ['q4', 'q5', 'q6'];
            let result = document.getElementById('quizResult2');
            
            questions.forEach(q => {
                const selected = document.querySelector(`input[name="${q}"]:checked`);
                if (selected && selected.dataset.correct === 'true') {
                    score++;
                }
            });
            
            if (score === 3) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Intermediate Quiz: ${score}/3 - Excellent!`;
                totalScore += 15;
                updateScore();
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `Intermediate Quiz: ${score}/3 - Keep practicing!`;
            }
            result.style.display = 'block';
        }

        function checkQuiz3() {
            let score = 0;
            const questions = ['q7', 'q8', 'q9'];
            let result = document.getElementById('quizResult3');
            
            questions.forEach(q => {
                const selected = document.querySelector(`input[name="${q}"]:checked`);
                if (selected && selected.dataset.correct === 'true') {
                    score++;
                }
            });
            
            if (score === 3) {
                result.className = 'result correct';
                result.innerHTML = `🎉 Advanced Quiz: ${score}/3 - Outstanding!`;
                totalScore += 20;
                updateScore();
            } else {
                result.className = 'result incorrect';
                result.innerHTML = `Advanced Quiz: ${score}/3 - Keep practicing!`;
            }
            result.style.display = 'block';
        }

        // Update score display
        function updateScore() {
            document.getElementById('totalScore').innerText = totalScore;
        }

        // Form submission handling
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                showFormResult('Please complete all fields before sending.', 'error');
                return false;
            }

            if (!isValidEmail(email)) {
                showFormResult('Please enter a valid email address.', 'error');
                return false;
            }
            return true;
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function showFormResult(message, type) {
            const formResult = document.getElementById('formResult');
            formResult.textContent = message;
            formResult.className = type;
            formResult.style.display = 'block';
        }

        function handleSubmit(event) {
            event.preventDefault();

            if (!validateForm()) {
                return;
            }

            const payload = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            fetch('https://formspree.io/f/xaqldkvv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(response => {
                    if (response.ok) {
                        document.getElementById('contactForm').reset();
                        showFormResult('✅ Thank you! Your message has been sent.', 'success');
                    } else {
                        return response.json().then(data => {
                            const error = data?.error || 'Submission failed. Please try again.';
                            throw new Error(error);
                        });
                    }
                })
                .catch(error => {
                    showFormResult(error.message || '⚠️ There was a server error. Try again later.', 'error');
                });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', handleSubmit);
            }
        });

        // Register service worker for PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful');
                    })
                    .catch(err => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }

        // PWA Installation Code
        let deferredPrompt;

        document.addEventListener('DOMContentLoaded', () => {
            // Debug: log input values on change
            document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
                input.addEventListener('input', () => {
                    console.log('Input changed:', input.id || input.placeholder, '=', input.value);
                });
            });

            const installBtn = document.getElementById('installBtn');

            // Capture the beforeinstallprompt event
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                if (installBtn) {
                    installBtn.style.display = 'block';
                }
            });

            // Handle install button click
            if (installBtn) {
                installBtn.addEventListener('click', async () => {
                    if (deferredPrompt) {
                        deferredPrompt.prompt();
                        const { outcome } = await deferredPrompt.userChoice;
                        console.log(`User response to the install prompt: ${outcome}`);
                        deferredPrompt = null;
                        installBtn.style.display = 'none';
                    }
                });
            }

            // Hide install button once app is installed
            window.addEventListener('appinstalled', () => {
                console.log('App installed');
                if (installBtn) {
                    installBtn.style.display = 'none';
                }
            });
        });

