const DeleteMarkdown = (function() {
    'use strict';

    const elfUtils = require('isit-code-vu').elfUtils;

    function DeleteMarkdown() { }

    DeleteMarkdown.prototype.delete = function(makeReport) {
        return new Promise(function(resolve, reject) {
            try {
                makeReport.forEach(function(report) {
                    elfUtils.deleteFile(report.markdownFileWithImages);
                });
                resolve(makeReport);
            } catch (err) {
                reject(err);
            }
        });
    };


    return DeleteMarkdown;
})();

module.exports = new DeleteMarkdown();