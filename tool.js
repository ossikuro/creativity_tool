// Начальные списки слов на русском языке
const adjectives = [
    'красивый',
    'быстрый',
    'яркий',
    'загадочный',
    'сияющий',
    'мягкий',
    'громкий',
    'весёлый',
    'сильный',
    'честный',
    'скромный',
    'умный',
    'забавный',
    'милый',
    'дружелюбный',
    'ленивый',
    'трудолюбивый',
    'грустный',
    'смешной',
    'добрый',
    'нежный',
    'дерзкий',
    'пушистый',
    'жаркий',
    'холодный',
    'прохладный',
    'теплый',
    'шумный',
    'тихий',
    'сладкий',
    'горький',
    'солёный',
    'светлый',
    'тёмный',
    'яростный',
    'спокойный',
    'радостный',
    'удивительный',
    'захватывающий',
    'творческий',
    'обычный',
    'уникальный',
    'необычный',
    'легкий',
    'тяжелый',
    'живой',
    'искренний',
    'отважный',
    'неловкий',
    'приятный',
]

const nouns = [
    'дракон',
    'замок',
    'цветок',
    'робот',
    'корабль',
    'мост',
    'дерево',
    'луна',
    'солнце',
    'звезда',
    'гитара',
    'машина',
    'собака',
    'кот',
    'птица',
    'лодка',
    'река',
    'гора',
    'дом',
    'город',
    'книга',
    'компьютер',
    'мяч',
    'чайник',
    'часы',
    'яблоко',
    'картина',
    'зонт',
    'стул',
    'шляпа',
    'телефон',
    'планета',
    'торт',
    'паровоз',
    'огонь',
    'реактор',
    'экран',
    'камень',
    'меч',
    'доска',
    'клавиатура',
    'календарь',
    'шарф',
    'карта',
    'медведь',
    'облако',
    'зеркало',
    'ворона',
    'ваза',
    'танк',
]

// DOM элементы
const output = document.getElementById('output')
const generateButton = document.getElementById('generate')
const addButton = document.getElementById('add')
const adjectiveTextarea = document.getElementById('adjective')
const nounTextarea = document.getElementById('noun')

// Функция согласования прилагательных и существительных
function agreeAdjectiveWithNoun(adjective, noun) {
    const feminineNouns = [
        'лодка',
        'река',
        'гора',
        'звезда',
        'гитара',
        'собака',
        'картина',
        'шляпа',
        'планета',
        'ваза',
        'карта',
    ]
    const neuterNouns = [
        'яблоко',
        'солнце',
        'дерево',
        'место',
        'зеркало',
        'облако',
        'камень',
        'молоко',
    ]

    if (feminineNouns.includes(noun)) {
        return adjective.replace(/ый|ий$/, 'ая')
    } else if (neuterNouns.includes(noun)) {
        return adjective.replace(/ый|ий$/, 'ое')
    }
    return adjective
}

// Генерация случайных слов
generateButton.addEventListener('click', () => {
    const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
    const agreedAdjective = agreeAdjectiveWithNoun(randomAdjective, randomNoun)
    output.textContent = `${agreedAdjective} ${randomNoun}`
})

// Добавление слов из текстового поля
addButton.addEventListener('click', () => {
    const newAdjectives = adjectiveTextarea.value
        .split(',')
        .map((word) => word.trim())
        .filter((word) => word)
    const newNouns = nounTextarea.value
        .split(',')
        .map((word) => word.trim())
        .filter((word) => word)

    adjectives.push(...newAdjectives)
    nouns.push(...newNouns)

    adjectiveTextarea.value = ''
    nounTextarea.value = ''

    alert('Слова успешно добавлены!')
})
