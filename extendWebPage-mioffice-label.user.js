// ==UserScript==
// @name         mioffice-label-Extend
// @version      1.0.5
// @description  mioffice-label 扩展程序
// @author       Timeic
// @license      MIT
// @run-at       document-body
// @match        *://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/*
// @require      https://cdn.timeic.top/extendWebPage-dep-global.js
// ==/UserScript==

;(function (global) {
    /**
     * urlMatch, URL 通配符模式匹配
     * @param {String} pattern 模式, 支持使用通配符
     * @param {String} url 要匹配的URL
     * @returns {Boolean} 匹配结果
     * */
    function urlMatch(pattern, url) {
        pattern = pattern.replace(/\*/g, '.*?')
        pattern = '^' + pattern + '$'
        const regex = new RegExp(pattern)
        return regex.test(url)
    }

    /**
     * copyToClipboard, 文本拷贝到剪贴板
     * @param {String} text 文本
     * @returns {void}
    */
    function copyToClipboard(text) {
        const input = document.createElement('input')
        input.value = text
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
    }

    /**
     * saveTextFile, 保存文本到文件
     * @param {String} 文本
     * @param {String} 文件名
     * @returns {void}
    */
    function saveTextFile(text, fileName) {
        const blob = new Blob([text], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    /**
     * parseUrlParams, 解析URL参数
     * @param {String} url 完整的URL
     * @returns {Object} 解析结果
    */
    function parseUrlParams(url) {
        let query, res = {}
        const urls = new URL(url)
        if (urls.search === '') {
            query = urls.hash.substring(3)
        } else {
            query = urls.search.substring(1)
        }
        let vars = query.split("&")
        for (var i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=")
            res[pair[0]] = pair[1]
        }
        return res
    }

    /**
     * extendWebPage, 扩展Web页面
     * @param {Array} options 配置项
     * @returns {Proxy}
     * */
    function extendWebPage(options) {
        let target = {}
        for (let i = 0; i < options.length; i++) {
            let { routes, style, startExec, bodyExec, loadExec, extend } = options[i]
            Object.assign(target, extend instanceof Object === false ? {} : extend)
            if (typeof routes === 'string')
                routes = new Array(routes)
            for (let i = 0; i < routes.length; i++) {
                if (urlMatch(routes[i], location.href)) {
                    $(document.head)
                        .append(`<style>${style}</style>`)
                    if (typeof startExec === 'function')
                        startExec.call(target)
                    if (typeof bodyExec === 'function') {
                        bodyExec = bodyExec.bind(target)
                        $(document)
                            .on('DOMContentLoaded', e.bodyExec)
                    }
                    if (typeof loadExec === 'function') {
                        loadExec = loadExec.bind(target)
                        $(window)
                            .on('load', loadExec)
                    }
                }
            }
        }
        return new Proxy(target, {
            get(target, key) {
                return target[key]
            },
            set(target, key, value) {
                target[key] = value
            }
        })
    }

    Object.getPrototypeOf(extendWebPage).urlMatch = urlMatch
    Object.getPrototypeOf(extendWebPage).copyToClipboard = copyToClipboard
    Object.getPrototypeOf(extendWebPage).saveTextFile = saveTextFile
    Object.getPrototypeOf(extendWebPage).parseUrlParams = parseUrlParams

    global.extendWebPage = extendWebPage
})(window);


;(function (gloabl) {
    const routeMashupAts = {
        routes: '*://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/ssr/annotation-task-start*',
        style: `body{background: #282c33}#record-0 > div:nth-child(2){filter: invert(1);background: bisque;}`,
        startExec() {
            gloabl.urlParams = extendWebPage.parseUrlParams(location.href)
            mdui.snackbar({message: `🔔${decodeURIComponent(this.urlParams.title)}`})
        }
    }

    const routeMashupTools = {
        routes: '*://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/ssr/tools*',
        style: `.init-btn{position: fixed;right: 100px;bottom: 50px}`,
        extend: {
            nMap: {
                '实线-白': 0,
                '实线-黄': 1,
                '虚线段-白': 2,
                '虚线段-黄': 3,
                '停止线': 4,
                '箭头': 5,
                '斑马线': 6,
                'T形路口': 7,
                'Y形路口': 8,
                '十字路口': 9,
                '其他路口': 10,
                '禁停区域': 11
            },
            dispatchMenu(index) {
                const t1 = $('.video-tracking-app .sidebar-category-instance__label:not(.hidden).selected')
                const t2 = $('.video-tracking-app .sidebar-category-instance__item:not(.hidden).selected')
                const inFrameSelected = t1.length === 0 ? t2 : t1
                inFrameSelected[0].dispatchEvent(
                    new MouseEvent('contextmenu', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': false
                    })
                )
                $('.shape-menu .shape-menu-item')[index].click()
            },
            draw(target, index) {
                if (target.nodeName !== 'INPUT' || target.nodeName !== 'TEXTAREA') {
                    const sct = $('.video-tracking-app .sidebar-category-title')[index]
                    mdui.snackbar({message: `🔔绘制 '${sct.textContent.replace(/[0-9]+/g, '')}'`})
                    sct.click()
                    $('.video-tracking-app .create-tool-selector').click()
                }
            },
            move(target, index) {
                if (target.nodeName !== 'INPUT' || target.nodeName !== 'TEXTAREA') {
                    this.dispatchMenu(0)
                    $('.ant-select-selector')[0].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    const t1 = $('.video-tracking-app .sidebar-category-instance__label:not(.hidden).selected')
                    const t2 = $('.video-tracking-app .sidebar-category-instance__item:not(.hidden).selected')
                    const inFrameSelected = t1.length === 0 ? t2 : t1
                    const t = inFrameSelected.parent().parent().find('.sidebar-category-instance__label div').text()
                    const objName = t.replace(/禁停区域[禁停区域\w ]+/g, '禁停区域')
                        .replace(/实线-白[实线\-白\w ]+/g, '实线-白')
                        .replace(/实线-黄[实线\-黄\w ]+/g, '实线-黄')
                        .replace(/虚线段-白[虚线段\-白\w ]+/g, '虚线段-白')
                        .replace(/虚线段-黄[虚线段\-黄\w ]+/g, '虚线段-黄')
                        .replace(/箭头[箭头\w ]+/g, '箭头')
                        .replace(/停止线[停止线\w ]+/g, '停止线')
                        .replace(/T形路口[T形路口\w ]+/g, 'T形路口')
                        .replace(/Y形路口[Y形路口\w ]+/g, 'Y形路口')
                        .replace(/十字路口[十字路口\w ]+/g, '十字路口')
                        .replace(/斑马线[斑马线\w ]+/g, '斑马线')
                        .replace(/其他路口[其他路口\w ]+/g, '其他路口')
                    console.log(t, objName, this.nMap, this.nMap[objName], $($('.rc-virtual-list')[0]).find('.ant-select-item.ant-select-item-option'));
                    $($('.rc-virtual-list')[0]).find('.ant-select-item.ant-select-item-option')[index === undefined ? this.nMap[objName] : index].click()
                    $('.ant-select-selector')[1].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[1]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.ant-select-selector')[2].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[2]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.ant-select-selector')[3].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[3]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.annotation-tools-modal .content button').click()
                    mdui.snackbar({message: `🔔创建物体: ${objName}`})
                }
            },
            dataLoad(callback) {
                const timer = setInterval(() => {
                    if ($('.video-tracking-app .attributes-panel .value-item .value-item-value')[0].textContent !== '') {
                        clearInterval(timer)
                        callback()
                    }
                }, 500)
            }
        },
        startExec() {
            this.dataLoad(() => {
                $($('.video-tracking-app .tab-header > div')[1]).on('click', () => {
                    setTimeout(() => {
                        $('.video-tracking-app .sidebar-validation-content .ant-collapse>.ant-collapse-item>.ant-collapse-header').click()    
                    }, 20)
                })
                const toolbarBtns = $('.video-tracking-app .toolbar .icon-button')
                toolbarBtns[toolbarBtns.length - 4].click()
                toolbarBtns[toolbarBtns.length - 5].click()
                $('.toolbar .dropdown-button .dropdown-menu-item')[3].click()
                $(document).on('keydown', e => {
                    if (e.code === 'KeyX') {
                        if (e.target.nodeName !== 'INPUT') 
                            this.dispatchMenu(1)
                    } else if (e.code === 'KeyR') {
                        if (e.target.nodeName !== 'INPUT') 
                            document.dispatchEvent(new KeyboardEvent('keypress', {
                                key: 'o',
                                code: 'KeyO',
                                charCode: 0,
                                keyCode: 79,
                                bubbles: true,
                                cancelable: true
                            }))
                    } else if (e.code === 'KeyE') {
                        if (e.target.nodeName !== 'INPUT') 
                            $('.video-tracking-app .frame-control .frame-action-icon')[3].click()
                    } else if (e.code === 'KeyW') 
                        this.move(e.target)
                    else if (e.code === 'KeyQ') {
                        if (e.target.nodeName !== 'INPUT') 
                            $('.video-tracking-app .frame-control .frame-action-icon')[1].click()
                    } else if (e.code === 'KeyZ') {
                        if (e.ctrlKey === false) {
                            toolbarBtns[toolbarBtns.length - 7].click()
                            mdui.snackbar({message: `🔔隐藏选中`})
                        }
                    } else if (e.code === 'KeyA') {
                        toolbarBtns[toolbarBtns.length - 6].click()
                        mdui.snackbar({message: `🔔隐藏全部`})
                    } else if (e.code === 'Digit1') 
                        this.draw(e.target, 0)
                    else if (e.code === 'Digit2')
                        this.draw(e.target, 1)
                    else if (e.code === 'Digit3')
                        this.draw(e.target, 2)
                    else if (e.code === 'Digit4')
                        this.draw(e.target, 3)
                    else if (e.code === 'Digit5')
                        this.draw(e.target, 4)
                    else if (e.code === 'Digit6')
                        this.draw(e.target, 5)
                    else if (e.code === 'Digit7')
                        this.draw(e.target, 6)
                    else if (e.code === 'Digit8')
                        this.draw(e.target, 7)
                    else if (e.code === 'Digit9')
                        this.draw(e.target, 8)
                    else if (e.code === 'Digit0')
                        this.draw(e.target, 9)
                    else if (e.code === 'Minus')
                        this.draw(e.target, 10)
                    else if (e.code === 'Equal')
                        this.draw(e.target, 11)
                    else if (e.code === 'Numpad0') 
                        this.move(e.target, 9)
                    else if (e.code === 'Numpad1') 
                        this.move(e.target, 0)
                    else if (e.code === 'Numpad2') 
                        this.move(e.target, 1)
                    else if (e.code === 'Numpad3') 
                        this.move(e.target, 2)
                    else if (e.code === 'Numpad4') 
                        this.move(e.target, 3)
                    else if (e.code === 'Numpad5') 
                        this.move(e.target, 4)
                    else if (e.code === 'Numpad6') 
                        this.move(e.target, 5)
                    else if (e.code === 'Numpad7') 
                        this.move(e.target, 6)
                    else if (e.code === 'Numpad8') 
                        this.move(e.target, 7)
                    else if (e.code === 'Numpad9') 
                        this.move(e.target, 8)
                    else if (e.keyCode === 109) 
                        this.move(e.target, 10)
                    else if (e.keyCode === 107) 
                        this.move(e.target, 11)
                })
                $(document).on('mousedown', e => {
                    if (e.button === 2) {
                        this.pageX = e.pageX
                        this.pageY = e.pageY
                    } else if (e.button === 1) 
                        this.dispatchMenu(1)
                })
                $(document).on('mouseup', e => {
                    if (this.pageX === e.pageX && this.pageY === e.pageY && e.button === 2) {
                        document.dispatchEvent(
                            new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter' })
                        )
                        $('.video-tracking-app .operation-navigator .pointer').click()
                    }
                })
            })
            $(document).on('keydown', e => {
                if (e.code === 'KeyF') {
                    const toolbarBtns = $('.video-tracking-app .toolbar .icon-button')
                    toolbarBtns[toolbarBtns.length - 1].click()
                }
            })
        }
    }
    gloabl.extendApp = extendWebPage([routeMashupAts, routeMashupTools])
})(window)
