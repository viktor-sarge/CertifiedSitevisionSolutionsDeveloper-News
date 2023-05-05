function strTrunc(string, limit) {
    if(string.length < limit) {
        return string;
    } else {
        return string.slice(0,limit) + "...";
    }
}
var maxLenIngress = 100;
var maxLenArticle = 300;

var jcrSession = require('Session');
var properties = require('Properties');

// Get the source archive selected by user
var pageId = properties.get(scriptVariables.source);
var archive = jcrSession.getNodeByIdentifier(pageId);
var articles = archive.getNodes();
var result = [];

var i = 0;
while (i < scriptVariables.limit && articles.hasNext()) {
    var imageUrl = null;
    var title = '';
    var imageAlt = '';
    var ingress = '';
    var content = '';
    var articleUrl = '';

    var childNode = articles.nextNode(); // Iterate
    if(childNode) {
        title = properties.get(childNode, 'SV.Title'); 
        ingress = properties.get(childNode, 'SV.Description');
        ingress = strTrunc(ingress, maxLenIngress);
        content = properties.get(childNode, 'SV.Content');
        content = strTrunc(content, maxLenArticle);
        articleUrl = properties.get(childNode, 'URL');

        var imageId = properties.get(childNode, 'SV.Image');
        if(imageId) {
            imageNode = jcrSession.getNodeByIdentifier(imageId);
            imageUrl = properties.get(imageNode, 'URL');
            imageAlt = properties.get(imageNode, 'alt');
        }
    }
    result.push({
        title: title,
        ingress: ingress,
        content: content,
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        articleUrl: articleUrl,
    });
    i++;
}
