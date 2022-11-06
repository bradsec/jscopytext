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
    
    // Copy text to clipboard using navigator fallback to execCommand copy
    copyTextToClipboard(copyEl.value);
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }
}

window.addEventListener("click", copyText)