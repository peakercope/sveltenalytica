export function getPath(version) {
    switch (version) {
        case '1':
            return 'https://mc.yandex.ru/metrika/watch.js';
        case '2':
            return 'https://mc.yandex.ru/metrika/tag.js';
        default:
            throw new Error('Invalid version');
    }
}