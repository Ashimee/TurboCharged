
// WIP //

function restoreEvents() {
    function waitForElm(selector) {
        //https://stackoverflow.com/a/61511955
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
    const styleString = 'background-image: url(/static/assets/9d7acb2e5784a9a1d52e564af3d8469b.svg);';
    window.hasIcon = document.head.innerHTML.includes(styleString);
    waitForElm('.scratchCategoryId-events .scratchCategoryItemBubble').then((elm) => {
        console.log(hasIcon);
        if (hasIcon) {
            var iconStyle = document.createElement("style");
            iconStyle.innerHTML = `.scratchCategoryId-events .scratchCategoryItemBubble::after { background-image: url(/static/assets/9d7acb2e5784a9a1d52e564af3d8469b.svg); }`;
            document.head.appendChild(iconStyle);
        }
        hasIcon = undefined;
    });
}
restoreEvents();