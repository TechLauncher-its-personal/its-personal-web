module.exports = {
    pages: {
        'index': {
            entry: './src/pages/home/main.js',
            template: 'public/index.html',
            title: 'home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'about': {
            entry: './src/pages/about/main.js',
            template: 'public/index.html',
            filename: 'about',
            title: 'about',
            chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
        },
        'login': {
            entry: './src/pages/login/main.js',
            template: 'public/index.html',
            filename: 'login',
            title: 'login',
            chunks: [ 'chunk-vendors', 'chunk-common', 'login' ]
        }
    }
}