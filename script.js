// ===== NAVIGATION MANAGEMENT =====
class NavigationManager {
    constructor() {
        this.activeSection = 'intro';
        this.sections = [];
        this.init();
    }

    init() {
        this.sections = Array.from(document.querySelectorAll('.content-section, .hero'));
        this.bindEvents();
        this.updateActiveSection();
    }

    bindEvents() {
        // Smooth scrolling for nav links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    this.scrollToSection(target);
                }
            });
        });

        // Scroll spy
        window.addEventListener('scroll', () => {
            this.updateActiveSection();
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
            
                        // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }
    }

    scrollToSection(target) {
        const offset = 80; // Account for fixed navbar
        const targetPosition = target.offsetTop - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    updateActiveSection() {
        const scrollPos = window.scrollY + 100; // Offset for better detection

        this.sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos <= bottom) {
                this.activeSection = section.id;
                this.updateNavActive(section.id);
            }
        });
    }

    updateNavActive(sectionId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== CONTENT LOADER =====
class ContentLoader {
    constructor() {
        this.init();
    }

    init() {
        this.loadHardwareContent();
    }

    async loadHardwareContent() {
        try {
            const response = await fetch('hardware-software-testing.md');
            if (response.ok) {
                const markdownContent = await response.text();
                const htmlContent = this.parseMarkdown(markdownContent);
                const container = document.getElementById('hardware-content');
                if (container) {
                    container.innerHTML = htmlContent;
                }
            }
        } catch (error) {
            console.log('Loading static content fallback');
            this.loadStaticHardwareContent();
        }
    }

    loadStaticHardwareContent() {
        const container = document.getElementById('hardware-content');
        if (container) {
            container.innerHTML = `
                <div class="hardware-section">
                    <div class="content-card">
                        <h2>🔧 Hardware: Il Cuore Tecnologico della Guerra Automatizzata</h2>
                        
                        <h3>Processori Specializzati per AI Militare</h3>
                        <p>L'intelligenza artificiale militare richiede una potenza computazionale estrema, spesso in condizioni di campo ostili. I sistemi hardware utilizzati rappresentano il vertice della tecnologia:</p>
                        
                        <div class="feature-grid">
                            <div class="feature-item">
                                <h4>Tensor Processing Units (TPU)</h4>
                                <p>Chip specializzati sviluppati originariamente da Google, ora adattati per applicazioni militari. Processano matrici massive per reti neurali in tempo reale.</p>
                            </div>
                            <div class="feature-item">
                                <h4>Neural Processing Units (NPU)</h4>
                                <p>Processori dedicati all'inferenza AI, ottimizzati per basso consumo energetico nei sistemi portatili militari.</p>
                            </div>
                            <div class="feature-item">
                                <h4>FPGA</h4>
                                <p>Circuiti integrati riprogrammabili che permettono adattamento rapido agli algoritmi in evoluzione.</p>
                            </div>
                        </div>
                        
                        <div class="summary-box">
                            <h3>In 5 righe</h3>
                            <ul>
                                <li>I processori AI militari richiedono potenza computazionale estrema</li>
                                <li>TPU e NPU sono specializzati per operazioni di machine learning</li>
                                <li>FPGA permettono adattamento rapido alle nuove esigenze operative</li>
                                <li>La ruggedizzazione è essenziale per ambienti operativi ostili</li>
                                <li>L'efficienza energetica è critica per sistemi portatili autonomi</li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-card">
                        <h2>💻 Software: Gli Algoritmi della Guerra Digitale</h2>
                        
                        <div class="tech-stack">
                            <h3>Stack Tecnologico Tipico</h3>
                            <div class="stack-layers">
                                <div class="stack-layer">Livello Applicativo: Interfacce comando tattico</div>
                                <div class="stack-layer">Middleware: ROS (Robot Operating System) militare</div>
                                <div class="stack-layer">AI Framework: TensorFlow Military, PyTorch Defence</div>
                                <div class="stack-layer">Sistema Operativo: Linux hardened, Real-Time OS</div>
                                <div class="stack-layer">Hardware Abstraction Layer</div>
                            </div>
                        </div>
                        
                        <div class="summary-box">
                            <h3>In 5 righe</h3>
                            <ul>
                                <li>Computer vision per riconoscimento automatico target</li>
                                <li>Natural Language Processing per analisi intelligence</li>
                                <li>Sistemi di decisione autonoma con reinforcement learning</li>
                                <li>Architetture distribuite per elaborazione real-time</li>
                                <li>Crittografia avanzata per comunicazioni sicure</li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-card">
                        <h2>🧪 Testing: Validazione dei Sistemi AI Militari</h2>
                        <p>Il testing dell'AI militare presenta sfide uniche: i fallimenti possono costare vite umane e compromettere missioni vitali.</p>
                        
                        <div class="testing-pipeline">
                            <h3>Pipeline di Testing AI Militare</h3>
                            <div class="pipeline-steps">
                                <div class="pipeline-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h5>Unit Testing</h5>
                                        <p>Singoli moduli AI</p>
                                    </div>
                                </div>
                                <div class="pipeline-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h5>Integration Testing</h5>
                                        <p>Interazione sistemi</p>
                                    </div>
                                </div>
                                <div class="pipeline-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h5>Adversarial Testing</h5>
                                        <p>Resistenza ad attacchi</p>
                                    </div>
                                </div>
                                <div class="pipeline-step">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <h5>Field Testing</h5>
                                        <p>Condizioni operative reali</p>
                                    </div>
                                </div>
                                <div class="pipeline-step">
                                    <div class="step-number">5</div>
                                    <div class="step-content">
                                        <h5>Stress Testing</h5>
                                        <p>Limiti prestazionali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="summary-box">
                            <h3>In 5 righe</h3>
                            <ul>
                                <li>Testing adversarial contro attacchi informatici mirati</li>
                                <li>Simulazioni massive per validare scenari operativi</li>
                                <li>Verifica compliance con convenzioni internazionali</li>
                                <li>Metriche critiche: accuracy >99.9%, latency <100ms</li>
                                <li>Validazione continua in ambienti operativi reali</li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-card">
                        <h2>🔬 Casi Studio: Tecnologie in Azione</h2>
                        
                        <div class="case-studies">
                            <div class="case-study">
                                <h4>Progetto Maven (Google-Pentagon)</h4>
                                <div class="case-details">
                                    <p><strong>Obiettivo:</strong> Analisi automatica video footage da droni</p>
                                    <ul>
                                        <li>Hardware: Cluster TPU per elaborazione video in tempo reale</li>
                                        <li>Software: TensorFlow con modelli object detection custom</li>
                                        <li>Testing: Validazione su 38+ milioni di ore di video</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="case-study">
                                <h4>Sistema Iron Dome (Israele)</h4>
                                <div class="case-details">
                                    <p><strong>Tecnologia:</strong> Intercettazione automatica missili</p>
                                    <ul>
                                        <li>Hardware: Radar multi-banda + processori real-time</li>
                                        <li>Software: Algoritmi traiettoria + decision making &lt;4 secondi</li>
                                        <li>Efficacia: 90%+ successo intercettazione verificata</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-card">
                        <h2>🚀 Sfide Tecniche Attuali</h2>
                        
                        <div class="challenges-grid">
                            <div class="challenge-category">
                                <h4>Limitazioni Hardware</h4>
                                <ul>
                                    <li>Consumo energetico massivo</li>
                                    <li>Dissipazione termica in ambienti estremi</li>
                                    <li>Ruggedizzazione per condizioni operative</li>
                                    <li>Bilanciare potenza e portabilità</li>
                                </ul>
                            </div>
                            
                            <div class="challenge-category">
                                <h4>Sfide Software</h4>
                                <ul>
                                    <li>Real-time constraints</li>
                                    <li>Operare con informazioni incomplete</li>
                                    <li>Integrazione sistemi legacy</li>
                                    <li>Aggiornamenti sicuri in zone operative</li>
                                </ul>
                            </div>
                            
                            <div class="challenge-category">
                                <h4>Problemi di Testing</h4>
                                <ul>
                                    <li>Validazione scenari rari</li>
                                    <li>Test etici senza causare danni</li>
                                    <li>Environment gap simulazione vs realtà</li>
                                    <li>Adattamento nemici anti-AI</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="summary-box">
                            <h3>In 5 righe</h3>
                            <ul>
                                <li>L'hardware AI militare deve operare in condizioni estreme</li>
                                <li>Il software richiede decisioni real-time con informazioni incomplete</li>
                                <li>Il testing deve bilanciare realismo operativo e considerazioni etiche</li>
                                <li>L'evoluzione continua richiede sistemi adattabili e aggiornabili</li>
                                <li>La convergenza hardware-software-testing determina l'efficacia militare</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    parseMarkdown(markdown) {
        // Basic markdown to HTML conversion
        return markdown
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/\`(.*)\`/gim, '<code>$1</code>')
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(?!<[h|l|p])/gim, '<p>')
            .replace(/$/gim, '</p>');
    }
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    // Additional smooth scrolling enhancements
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new NavigationManager();
    new ContentLoader();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('%c🤖 AI in Guerra - Sito Minimal Caricato!', 'color: #2c5282; font-size: 16px; font-weight: bold;');
    console.log('%cProgetto di classe sviluppato con HTML, CSS e JavaScript minimal', 'color: #666666; font-size: 12px;');
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationManager,
        ContentLoader
    };
}