(function (global) {
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
     * setWebApp, 设置WebApp
     * @param {Object} options 配置项
     * @returns {void}
    */
    function setWebApp(options) {
        const { appName, appIcon, statusBarColor } = options
        if (appName) {
            $(document.head).find('meta[name=apple-mobile-web-app-title], meta[name=application-name]').remove()
            $(document.head).append(`<meta name="apple-mobile-web-app-title" content="${appName}"><meta name="application-name" content="${appName}">`)
        } else if (statusBarColor) {
            $(document.head).find('meta[name=apple-mobile-web-app-status-bar-style]').remove()
            $(document.head).append(`<meta name="apple-mobile-web-app-status-bar-style" content="${statusBarColor}">`)
        } else if (appIcon) {
            $(document.head).find('link[rel=shortcut\\ icon]').remove()
            $(document.head).append(`<link rel="shortcut icon" href="${appIcon}" type="image/png">`)
        }
        $(document.head).append(
            `${$(document.head).find('meta[name=referrer]').attr('content') === 'no-referrer' ? '' : '<meta name="referrer" content="no-referrer">'}
            ${$(document.head).find('meta[name=mobile-web-app-capable]').length > 0 ? '' : `<meta name="mobile-web-app-capable" content="yes">`}
            ${$(document.head).find('meta[name=apple-mobile-web-app-capable]').length > 0 ? '' : `<meta name="apple-mobile-web-app-capable" content="yes">`}`
        )
    }

    /**
     * importCss, 导入css
     * @param {String} url css-file-url
     * @returns {void}
    */
    function importCss(url) {
        $(document.head).append(`<link href="${url}" rel="stylesheet">`)
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
    Object.getPrototypeOf(extendWebPage).setWebApp = setWebApp
    Object.getPrototypeOf(extendWebPage).importCss = importCss

    global.extendWebPage = extendWebPage
})(window)
