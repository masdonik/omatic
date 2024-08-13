function autoRelated(data) {
    var out = data[1];		    
    var dom = ''; // Initialize dom to avoid undefined

    for (var i = 0; i < out.length; i++) {
        var kw = out[i];
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" />
                <small>Title: <i>${kw}</i></small>
                <h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3>
                <p align="justify"><strong>${kw}</strong> is a highly relevant result for <em>${postTitle}</em>. The content provided here is intended for informational purposes. Feel free to bookmark <strong>${kw}</strong> for future reference.</p>
                </aside>`;
    }

    return dom; // Return the generated HTML content
}
