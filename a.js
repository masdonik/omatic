function autoRelated(data) {
    // Validasi data
    if (!Array.isArray(data) || data.length < 2 || !Array.isArray(data[1])) {
        console.error('Invalid data structure');
        return;
    }

    const out = data[1];
    let dom = '';

    for (let i = 0; i < out.length; i++) {
        const kw = out[i];
        dom += `<aside itemscope itemtype="https://schema.org/Article">
                    <h2 itemprop="headline">${kw} - Related Content</h2>
                    <img alt="${kw} image" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" 
                         width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" 
                         loading="lazy" itemprop="image" />
                    <small>Title: <i itemprop="name">${kw}</i></small>
                    <h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}" itemprop="url">${kw}</a></h3>
                    <p align="justify" itemprop="description"><strong>${kw}</strong> is an excellent resource for learning about <strong>${postTitle}</strong>. 
                    This reference material provides comprehensive insights on <em>${kw}</em>. Save and bookmark this page to explore more about <strong>${kw}</strong>.</p>
                </aside>`;
    }
    
    return dom;
}
