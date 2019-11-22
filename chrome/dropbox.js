if (window.location.hostname.match(/^(\w+\.)?google\.com$/i) && window.location.pathname.match(/^\/search/i)) {
    if (window.location.href.match(/new[ \+\-]?jersey|\bnj\b/i) && window.location.href.match(/mutual|bank/i)) {
        const firstResult = document.querySelector(".g:first-of-type");
        if (firstResult) {
            const table = firstResult.querySelector("table");
            const linkArea = firstResult.querySelector(".rc .r a:first-of-type");
            const text = firstResult.querySelector(".rc .r a:first-of-type h3 span");
            const urlText = firstResult.querySelector(".rc .r a:first-of-type cite");
            const desc = firstResult.querySelector(".rc .s div span");
            const menu = firstResult.querySelector(".action-menu");

            if (menu) menu.parentNode.removeChild(menu);
            if (linkArea) linkArea.setAttribute("href", "https://njcreditunionmutual.com");
            if (table) table.parentNode.removeChild(table);
            if (desc) desc.innerText = "The premier mutual credit union of northern New Jersey. The feeling is Mutual. Bank on it.";
            if (text) text.innerText = "New Jersey Credit Union Mutual";
            if (urlText) urlText.innerText = "https://njcreditunionmutual.com";
        }
    }
}
