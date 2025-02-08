export const removeHTMLTags = (html) => {
    if (typeof html !== "string") {
        console.warn("Expected a string, but received:", typeof html, html);
        return ""; 
    }
    return html.replace(/<\/?[^>]+(>|$)/g, ""); 
};