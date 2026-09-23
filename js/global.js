function getGlobalLang() {
    return localStorage.getItem('oxy_idioma') || 'pt';
}

function setGlobalLang(lang) {
    localStorage.setItem('oxy_idioma', lang);
    window.dispatchEvent(new Event('idiomaMudou'));
}
