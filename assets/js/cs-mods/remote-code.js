hljs.addPlugin({
    'after:highlightElement': ({ el, result }) => {
        const badge = el.closest('.remote-code-details')?.querySelector('.remote-code-lang');
        if (badge && !badge.textContent) {
            badge.textContent = result.language;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.remote-code-block[data-src]').forEach(async (el) => {
        try {
            const res = await fetch(el.dataset.src);
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
            el.textContent = await res.text();
            hljs.highlightElement(el);
        } catch (err) {
            el.textContent = `File loading error: ${err.message}`;
            el.style.color = '#ff6b6b';
        }
    });
});
