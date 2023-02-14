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
while (articles.hasNext() && i < scriptVariables.limit) {
    var childNode = articles.nextNode(); // Iterate
    var title = childNode.getProperty("SV.Title").getString();

    var ingress = childNode.getProperty("SV.Description").getString();
    ingress = strTrunc(ingress, maxLenIngress);

    var content = childNode.getProperty("SV.Content").getString();
    content = strTrunc(content, maxLenArticle);

    var imageId = childNode.getProperty("SV.Image").getString();
    var imageNode = jcrSession.getNodeByIdentifier(imageId);
    var imageUrl = imageNode.getProperty("URL").getString();
    var imageAlt = imageNode.getProperty("alt").getString();
 
    var articleUrl = childNode.getProperty("URL").getString();
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
