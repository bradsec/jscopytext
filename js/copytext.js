function copyText(e) {
    // Check element is a button and has correct class
    const isButton = e.target.nodeName === 'BUTTON';
    const isClass = e.target.classList.value === 'copy-btn';
    if (!isButton) { return; }
    if (!isClass) { return; }

    // Fetch unique dataset ID for identifying element ID to copy
    let dataID = e.target.dataset.id
    // Fetch element to copy from using dataID
    let copyEl = document.querySelector(dataID);

    // Select text value to copy from copyEl
    copyEl.select();
    copyEl.setSelectionRange(0, 99999);
    // Add animation effect to show copied
    e.target.classList.add( 'copied' );
    setTimeout(function() { e.target.classList.remove( 'copied' ); }, 800)
    // Copy text to clipboard
    copyTextToClipboard(copyEl.value);
    async function copyTextToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch(err) {
            console.log('Error in copying text: ', err);
        }
    }
}

window.addEventListener("click", copyText)