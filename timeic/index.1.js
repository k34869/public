$(document.body).append(`<span class="image-size" title="指的是图片中包含的像素数量"></span><br>
<span class="image-size" title="指的是图片占据显示屏幕的大小"></span><br>
<mdui-text-field id="image-url-input" clearable variant="filled" label="请粘贴图片链接"></mdui-text-field>
<div class="menu-button-after" title="你要找的都在菜单里面🤭">👉</div>
<div class="container">
    <div class="image-container">
        <img id="main-image" src="https://cdn.jsdmirror.com/gh/k34869/public@main/timeic/test.jpg" alt="❌图片无法加载">
    </div>
    <div class="grid" id="grid"></div>
</div>

<mdui-button class="menu-button">📋菜单</mdui-button>

<div class="menu-warp" style="display: none;">
    <h2 class="option">👉图片</h2>
    <div class="option-list">
        <mdui-text-field class="image-rotate-input mr" variant="outlined" label="旋转角度" value="0"></mdui-text-field>
    </div>
    <h2 class="option">👉选框</h2>
    <div class="option-list">
        <mdui-text-field class="box-line-width-input mr" variant="outlined" label="线宽" value="2"></mdui-text-field>
        <span style="color: rgb(74, 74, 74);margin-right: 2px;">对角线</span><mdui-switch class="diagonal-switch" checked></mdui-switch>
        <mdui-button class="create-box-button mr" onclick="createBoxSelection()" title="快捷键 Q">创建选框(Q)</mdui-button>
    </div>
    <div class="option-list">
        <mdui-button class="copy-all-box-size-button mr" onclick="copyAllBoxSize()" title="快捷键 E">复制所有选框尺寸(E)</mdui-button>
        <mdui-button class="clear-all-box-button mr" onclick="clearAllBox()" title="快捷键 W">清除选框(W)</mdui-button>
    </div>
    <h2 class="option">👉网格</h2>
    <div class="option-list">
        <mdui-text-field class="rows-input mr" variant="outlined" label="行数" value="3"></mdui-text-field>
        <mdui-text-field class="cols-input mr" variant="outlined" label="列数" value="3"></mdui-text-field>
    </div>
    <h2 class="option">👉文案字数统计</h2>
    <div class="option-list">
        <mdui-button class="ocr-button mr" onclick="imageOcr()" title="基于 OCR，仅供参考">OCR 识别</mdui-button>
    </div>
    <div class="option-list">
        <mdui-card class="wc-length"></mdui-card>
        <mdui-card class="wc-length"></mdui-card>
        <mdui-card class="wc-length"></mdui-card>
    </div>
    <div class="option-list">
        <p class="ocr-result" contenteditable="true"></p>
    </div>
</div>`)

const $image = $('#main-image')
const $imageSize = $('.image-size')
const $menuButton = $('.menu-button')
const $menuWarp = $('.menu-warp')
const $imageUrlInput = $('#image-url-input')
const rowsEle = $('.rows-input')[0]
const colsEle = $('.cols-input')[0]
const $imageRotateInput = $('.image-rotate-input')
const $boxLineWidthInput = $('.box-line-width-input')
const $diagonalSwitch = $('.diagonal-switch')
const $createBoxButton = $('.create-box-button')
const $ocrResult = $('.ocr-result')
const $wcText = $('.wc-length')
const $rowsInput = $('.rows-input')
const $colsInput = $('.cols-input')
const $container = $('.container')
const $reCss = $('head #re-css')

function getPhysicalDimensions(element) {
    const rect = element[0].getBoundingClientRect()
    const width = parseInt(rect.width * window.devicePixelRatio)
    const height = parseInt(rect.height * window.devicePixelRatio)
    return {
        width,
        height
    }
}

function updateImageSize(execType) {
    if (execType === 'load') $imageSize.eq(0).html(`图片分辨率: <span>${$image[0].naturalWidth}*${$image[0].naturalHeight}</span>`)
    const d = getPhysicalDimensions($image)
    $imageSize.eq(1).html(`物理尺寸: <span>${d.width}*${d.height}</span>`)
}

function updateGrid() {
    const cols = parseInt(colsEle.value);
    const rows = parseInt(rowsEle.value);
    const grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    grid.innerHTML = '';
    for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
    }
}

function imageOcr() {
    mdui.snackbar({ message: '🔥文字识别中···' })
    $ocrResult.text('🔥识别中···')
    $wcText.text('')
    $.ajax({
        type: 'GET',
        url: `https://luckycola.com.cn/tools/urlocr?ColaKey=XNPZ2jf6DXL4fl1748684780650O9TXElAPXS&imgurl=${$imageUrlInput[0].value}`
    }).then(d => {
        mdui.snackbar({ message: d.msg })
        const text = d.data.ParsedResults[0].ParsedText
        const chsText = text.match(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g).join('')
        const eText = text.match(/[a-zA-Z0-9]/g).join('')
        
        $wcText.eq(0).text(`英文与数字: ${eText.length} (${eText.length / 2})`)
        $wcText.eq(1).text(`中文: ${chsText.length}`)
        $wcText.eq(2).text(`总计: ${eText.length + chsText.length} (${(eText.length / 2) + chsText.length})`)
        $ocrResult.html(text.replace(/\r\n/g, '<br>'))
    })
}

let index = 0
function createBoxSelection() {
    index++
    const $box = $(`<div class="box box${index}" style="border: ${$boxLineWidthInput[0].value}px solid yellow;"><span class="box-size"></span>${$diagonalSwitch[0].checked ? `<svg xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="100%" y2="100%" stroke="yellow" stroke-width="${$boxLineWidthInput[0].value}"/><line x1="100%" y1="0" x2="0" y2="100%" stroke="yellow" stroke-width="${$boxLineWidthInput[0].value}"/></svg>` : ''}</div>`)
    $(document.body).append($box)
    $box.find('.box-size').on('click', (e) => {
        const text = $(e.target).text()
        mdui.snackbar({ message: `复制 '${text}' 到剪贴板📋` })
        $.setClipboardText(text)
    })

    interact(`.box${index}`).draggable({
        inertia: true,
        // 惯性拖拽
        listeners: {
            move(event) {
                let x = (parseFloat($box[0].getAttribute('data-x')) || 0) + event.dx;
                let y = (parseFloat($box[0].getAttribute('data-y')) || 0) + event.dy;

                $box[0].style.transform = `translate(${x}px, ${y}px)`;
                $box[0].setAttribute('data-x', x);
                $box[0].setAttribute('data-y', y);
            }
        }
    });
    interact(`.box${index}`).resizable({
        edges: {
            right: true,
            bottom: true,
            left: false,
            top: false
        },
        // 只允许右下角调整大小
        modifiers: [interact.modifiers.restrictSize({
            min: {
                width: 10,
                height: 10
            }
        })// 限制最小尺寸
        ],
        inertia: true
    }).draggable({
        inertia: true
    }).on('resizemove', function(event) {
        let {width, height} = event.rect
        event.target.style.width = width + 'px'
        event.target.style.height = height + 'px'
        const d = getPhysicalDimensions($box)

        $box.find('.box-size').html(`${d.width}*${d.height}`)
    })
    mdui.snackbar({ message: `创建 '${index}' 号选框😄` })
}

function copyAllBoxSize() {
    let text = ''
    for (let i = 0; i < index; i++) {
        const s = $(`.box${i+1}`).find('.box-size').text()
        if (s !== '') text += `${s}+`
    }
    text = text.replace(/\+$/, '')
    mdui.snackbar({ message: `复制 '${text}' 到剪贴板📋` })
    $.setClipboardText(text)
}

function clearAllBox() {
    $('.box').remove()
    index = 0
    mdui.snackbar({ message: `已清除所有选框🚀` })
}

$image.on('load', () => {
    updateImageSize('load')
    if (window.isPrevImage) {
        localStorage.prevImageUrl = $imageUrlInput[0].value
    }
})

$(window).on('load', () => {
    let match;
    const params = {};
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    while (match = regex.exec(location.href)) {
        params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }
    if (params.mode === 'contain') 
        $reCss.html('.image-container {position: absolute;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;}.image-container img {width: 100%;max-width: 100%;max-height: 100%;object-fit: contain}')
    if (params.url) {
        $image[0].src = params.url;
        $imageUrlInput[0].value = params.url;
    } else {
        if (localStorage.prevImageUrl) {
            mdui.snackbar({message: `恢复上一次访问的图片: ${localStorage.prevImageUrl}`})
            $image[0].src = localStorage.prevImageUrl;
            $imageUrlInput[0].value = localStorage.prevImageUrl;
        }
    }
    if (params.cols)
        colsEle.value = params.cols;
    if (params.rows)
        rowsEle.value = params.rows;
    if (params.box) {
        for (let i = 0; i < Number(params.box); i++) {
            createBoxSelection()
        }
    }
    updateImageSize('load')
    updateGrid()
    $menuButton.on('click', () => {
        $menuWarp.toggle()
    })
    $imageSize.on('click', (e) => {
        const text = $(e.target).text().replace(/物理尺寸: |图片分辨率: /, '')
        mdui.snackbar({ message: `复制 '${text}' 到剪贴板📋` })
        $.setClipboardText(text)
    })
    $imageRotateInput.on('input', (e) => {
        const value = e.target.value === '' ? 0 : e.target.value
        $container.css('transform', `rotate(${value}deg)`)
    })
    $colsInput.on('input', () => {
        updateGrid()
    })
    $rowsInput.on('input', () => {
        updateGrid()
    })
    $imageUrlInput.on('input', (e) => {
        const value = e.target.value
        if (value.startsWith("http://") || value.startsWith("https://")) {
            $image[0].src = ''
            $image[0].src = value
            window.isPrevImage = true
        }
    })
Mousetrap.bind('q', () => {
    createBoxSelection()
})
Mousetrap.bind('w', () => {
    clearAllBox()
})
Mousetrap.bind('e', () => {
    copyAllBoxSize()
})
})
$(window).on('resize', () => {
    updateImageSize()
})
$menuButton.on('mousemove', () => {
    $(document.body).off('click')
})
$menuButton.on('mouseout', () => {
    $(document.body).one('click', () => {
        $menuWarp.hide()
    })
})
$menuWarp.on('mousemove', () => {
    $(document.body).off('click')
})
$menuWarp.on('mouseout', () => {
    $(document.body).one('click', () => {
        $menuWarp.hide()
    })
})