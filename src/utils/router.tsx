export const navigateTo = (path:string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
}

export const getCurrentPath = () => {
    return window.location.pathname;
}