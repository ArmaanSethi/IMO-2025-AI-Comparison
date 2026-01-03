import problems from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    marked.setOptions({
        gfm: true,
        breaks: false,
        headerIds: false,
        mangle: false
    });

    // KaTeX Options
    const katexOptions = {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        trust: true,
        strict: false
    };

    // --- DOM Elements ---
    const navContainer = document.getElementById('problem-nav');
    const problemTextEl = document.getElementById('problem-text');
    const openaiContentEl = document.getElementById('openai-content');
    const gdmContentEl = document.getElementById('gdm-content');

    // --- State ---
    let currentProblemId = null;

    // --- Functions ---

    // safeMarkdown: Parses MD and ensures standard element styling
    const renderMarkdown = (text) => {
        if (!text) return '<p class="text-muted">No content available.</p>';
        return marked.parse(text);
    };

    const renderMath = () => {
        if (window.renderMathInElement) {
            renderMathInElement(document.body, katexOptions);
        }
    };

    const loadProblem = (id) => {
        // Update State
        currentProblemId = id;

        // Find Data
        const data = problems.find(p => p.id == id);
        if (!data) return;

        // Render Content
        problemTextEl.innerHTML = renderMarkdown(data.content); // "content" in data.js is the problem statement
        openaiContentEl.innerHTML = renderMarkdown(data.openai);
        gdmContentEl.innerHTML = renderMarkdown(data.gdm);

        // Render Math
        // We use a slight delay or requestAnimationFrame to ensure DOM is ready? 
        // Sync is fine here since innerHTML is blocking.
        renderMath();

        // Update Nav UI
        updateNavState(id);
    };

    const updateNavState = (activeId) => {
        const buttons = navContainer.querySelectorAll('.nav-btn');
        buttons.forEach(btn => {
            if (btn.dataset.id == activeId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    const initNav = () => {
        // Clear existing
        navContainer.innerHTML = '';

        problems.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.textContent = p.title || `Problem ${p.id}`; // Use title from data if avail
            btn.dataset.id = p.id;

            btn.addEventListener('click', () => {
                if (currentProblemId !== p.id) {
                    loadProblem(p.id);
                }
            });

            navContainer.appendChild(btn);
        });
    };

    // --- Initialization ---
    initNav();

    // Load first problem by default
    if (problems.length > 0) {
        loadProblem(problems[0].id);
    }
});
