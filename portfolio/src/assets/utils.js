export function debounce(fn, ms) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn(...args)
        }, ms)
    };
}

export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) newWindow.opener = null
}