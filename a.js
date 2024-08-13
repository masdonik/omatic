function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify"><b>${kw}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kw}</p></aside>`;
    }
}
