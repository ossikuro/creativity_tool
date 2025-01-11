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
    'упрямый',
    'аккустический',
    'несгибаемый',
    'вражеский',
]

const nouns = [
    'дракон',
    'замок',
    'цветок',
    'робот',
    'корабль',
    'мост',
    'кот',
    'дом',
    'город',
    'компьютер',
    'мяч',
    'чайник',
    'часы',
    'зонт',
    'стул',
    'телефон',
    'торт',
    'паровоз',
    'огонь',
    'реактор',
    'экран',
    'камень',
    'меч',
    'календарь',
    'шарф',
    'медведь',
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
        'ваза',
        'ворона',
        'карта',
        'клавиатура',
        'доска',
        'книга',
        'птица',
        'гитара',
        'машина',
        'луна',
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

const { Illustration, Group, Anchor, Rect, TAU, Ellipse } = Zdog
const element = document.querySelector('canvas')
const illustration = new Illustration({
    element,
    dragRotate: true,
})

// anchor point used for the rotation
const dice = new Anchor({
    addTo: illustration,
})

// group describing the faces through rounded rectangles
const faces = new Group({
    addTo: dice,
})
// due to the considerable stroke, it is possible to fake the dice using four faces only
const face = new Rect({
    addTo: faces,
    stroke: 10,
    width: 10,
    height: 10,
    color: '#fff',
    translate: {
        z: -5,
    },
})

// rotate the faces around the center
face.copy({
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: 5,
    },
})

face.copy({
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: -5,
    },
})

face.copy({
    translate: {
        z: 5,
    },
})

// include the dots repeating as many shapes/groups as possible
// ! when copying an element be sure to reset the rotation/translation of the copied shape
const one = new Ellipse({
    addTo: dice,
    diameter: 3,
    stroke: false,
    fill: true,
    color: '#000',
    translate: {
        z: 10,
    },
})

const two = new Group({
    addTo: dice,
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: 10,
    },
})

one.copy({
    addTo: two,
    translate: {
        y: 4,
    },
})

one.copy({
    addTo: two,
    translate: {
        y: -4,
    },
})

const three = new Group({
    addTo: dice,
    rotate: {
        y: TAU / 4,
    },
    translate: {
        x: 10,
    },
})

one.copy({
    addTo: three,
    translate: {
        z: 0,
    },
})

one.copy({
    addTo: three,
    translate: {
        x: 4,
        y: -4,
        z: 0,
    },
})

one.copy({
    addTo: three,
    translate: {
        x: -4,
        y: 4,
        z: 0,
    },
})

const four = new Group({
    addTo: dice,
    rotate: {
        y: TAU / 4,
    },
    translate: {
        x: -10,
    },
})

two.copyGraph({
    addTo: four,
    rotate: {
        x: 0,
    },
    translate: {
        x: 4,
        y: 0,
    },
})

two.copyGraph({
    addTo: four,
    rotate: {
        x: 0,
    },
    translate: {
        x: -4,
        y: 0,
    },
})

const five = new Group({
    addTo: dice,
    rotate: {
        x: TAU / 4,
    },
    translate: {
        y: -10,
    },
})

four.copyGraph({
    addTo: five,
    rotate: {
        y: 0,
    },
    translate: {
        x: 0,
    },
})

one.copy({
    addTo: five,
    translate: {
        z: 0,
    },
})

const six = new Group({
    addTo: dice,
    translate: {
        z: -10,
    },
})

two.copyGraph({
    addTo: six,
    rotate: {
        x: 0,
        z: TAU / 4,
    },
    translate: {
        x: 0,
        y: 0,
    },
})

four.copyGraph({
    addTo: six,
    rotate: {
        y: 0,
    },
    translate: {
        x: 0,
    },
})

// animate the dice to endlessly rotate around its center
function animate() {
    illustration.updateRenderGraph()
    dice.rotate.x += 0.01
    dice.rotate.y -= 0.01
    requestAnimationFrame(animate)
}
animate()
