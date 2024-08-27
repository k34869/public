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
})(window)
