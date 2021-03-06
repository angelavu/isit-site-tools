module.exports = {
    browserMarkdownFileExists: function(fileName) {
        return {
            error: 'The destination file already exists',
            fileName: fileName,
            result: 'Doing nothing'
        }
    },
    markdownFileExists: function(fileName) {
        const divider = '\n***********************************\n';
        let fileExists = divider;
        fileExists += '\nThe destination file already exists:\n\n';
        fileExists += '\t' + fileName;
        fileExists += '\n\nDoing Nothing\n' + divider;
        return fileExists;
    }
};