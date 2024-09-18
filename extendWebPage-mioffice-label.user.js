// ==UserScript==
// @name         mioffice-label-Extend
// @version      1.0.3
// @description  mioffice-label 扩展程序
// @author       Timeic
// @license      MIT
// @run-at       document-body
// @match        *://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/*
// @require      https://cdn.timeic.top/extendWebPage-dep-global.js
// @require      https://cdn.timeic.top/extendWebPage.js
// ==/UserScript==

(function (gloabl) {
    const routeMashupAts = {
        routes: '*://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/ssr/annotation-task-start*',
        style: `body{background: #282c33}#record-0 > div:nth-child(2){filter: invert(1);background: bisque;}`,
        startExec() {
            mdui.snackbar({message: `脚本已被作者关闭，如需开启请联系作者。。。`})
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
        }
    }
    gloabl.extendApp = extendWebPage([routeMashupAts, routeMashupTools])
})(window)
