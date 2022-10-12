let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .css('resources/css/field.css', 'css')
    .nova('waynestate/nova-text-copy-field')
