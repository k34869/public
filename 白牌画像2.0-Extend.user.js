// ==UserScript==
// @name         白牌画像2.0-Extend
// @version      1.0.0
// @description  白牌画像2.0-Extend
// @author       Timeic
// @license      MIT
// @run-at       document-body
// @require      https://cdn.timeic.top/extendWebPage.js
// @grant        none
// @match        *://detail.tmall.com/*
// @match        *://item.taobao.com/*
// @match        *://fbi.alibaba-inc.com/dashboard/view/*
// @match        *://xiaoer.alibaba-inc.com/bzb/tongkuanwb/biz-wb-mark/*
// ==/UserScript==

;(function () {
	function debounce(fn, wait) {
	    let timeout = null
	    return function() {
	        let context = this
	        let args = arguments
	        if (timeout) clearTimeout(timeout)
	        let callNow = !timeout
	        timeout = setTimeout(() => {
	            timeout = null
	        }, wait)
	        if (callNow) fn.apply(context, args)
	    }
	}
	
	function formatDate(date) {
	    const year = date.getFullYear();
	    const month = ('0' + (date.getMonth() + 1)).slice(-2);
	    const day = ('0' + date.getDate()).slice(-2);
	    return `${year}-${month}-${day}`;
	 }
	;(function () {
		
		const Window1 = ({
		        routes: [
		            '*://detail.tmall.com/*',
		            '*://item.taobao.com/*'
		        ],
		        extend: {
		            scrollPage(isRevo = false) {
		                let scrollHeight = $(document).height()
		                let windowHeight = $(window).height()
		                let currentScroll = $(window).scrollTop()
		                let newScrollPosition = isRevo ? currentScroll - windowHeight : currentScroll + windowHeight
		                $('html, body').animate({
		                    scrollTop: newScrollPosition
		                }, 100)
		            }
		        },
		        loadExec() {
		            Mousetrap.bind('a', () => {
		                $('body,html').animate({ scrollTop: 0 }, 150)
		            })
		            Mousetrap.bind('d', () => {
		                var docHeight = $(document).height()
		                $('html, body').animate({
		                    scrollTop: docHeight
		                }, 150)
		            })
		            Mousetrap.bind('s', () => {
		                this.scrollPage(true)
		            })
		            Mousetrap.bind('x', () => {
		                this.scrollPage()
		            })
		            Mousetrap.bind('z', () => {
		                $('.tabTitleWrap--gReQPhVU .tabTitleItem--z4AoobEz>span').eq(1).click()
		            })
		            Mousetrap.bind('c', () => {
		                $('.tabTitleWrap--gReQPhVU .tabTitleItem--z4AoobEz>span').eq(2).click()
		            })
		        }
		    });Window1.style = `.tabDetailWrap--UUPrzQbC .footerWrap--V4_qEE8T,.tb-footer .tb-footer-ft{height:0!important;overflow:hidden!important}`;
		
		const Window2 = ({
		        routes: '*://fbi.alibaba-inc.com/dashboard/view/*',
		        loadExec() {
		            const vAllInput = $('#mm17l9ftr_myj8g7 div[data-key=mm17la8g7_knglg2] input')
		            vAllInput.on('input', () => {
		                vAllInput[0].dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter' }))
		            })
		            $(document).on('keydown', (e) => {
		                if (e.code === 'Tab')
		                    vAllInput.focus()
		            })
		            $('#mm17l9ftr_myj8g7 .fbi-card-body .main-content .row').on('mousedown', function (e) {
		                this.pageX = e.pageX
		                this.pageY = e.pageY
		            })
		            $('#mm17l9ftr_myj8g7 .fbi-card-body .main-content .row').on('mouseup', function (e) {
		                if (this.pageX === e.pageX && this.pageY === e.pageY) {
		                    const $target = $(this)
		                    if ($target.css('background-color') === 'rgb(255, 237, 175)')
		                        $target.css('background-color', '')
		                    else 
		                        $target.css('background-color', 'rgb(255, 237, 175)')
		                }
		            })
		        }
		    });Window2.style = ``;
		
		const 白牌 = ({
		        routes: '*://xiaoer.alibaba-inc.com/bzb/tongkuanwb/biz-wb-mark/*',
		        extend: {
		            getMappingInfo() {
		                let update
		                try {
		                    const [ a, b ] = $('.next-tabs-content .next-box .ItemDetail--detailTag--Itns_28')
		                    const itemId = a.textContent.replace('item id ', ''), skuId = b.textContent.replace('sku id ', '')
		                    const mappingUrl = `https://item.taobao.com/item.htm?id=${itemId}&skuId=${skuId}`
		                    if (localStorage.mappingUrl === mappingUrl) 
		                        update = false
		                    else {
		                        update = true
		                        localStorage.mappingUrl = mappingUrl
		                    }
		                    return {
		                        update,
		                        itemId,
		                        skuId,
		                        mappingUrl
		                    }
		                } catch (error) {
		                    return {
		                        update: false,
		                        error
		                    }
		                }
		            },
		            spaceChack() {
		                const res = {status: true}
		                const pv = $('.next-form input')
		                pv.each((i, e) => {
		                    if (e.value.indexOf(' ') !== -1) {
		                        if (confirm(`'${e.id}': 有空格, 是否提交？`)) {
		                            res.status = true
		                        } else {
		                            $.toast({
		                                heading: 'Error',
		                                text: `'${e.id}': 有空格`,
		                                showHideTransition: 'fade',
		                                icon: 'error'
		                            })
		                            res.status = false
		                            res.el = e
		                        }
		                    }
		                })
		                return res
		            },
		            showHideWindow($window, URL) {
		                if (typeof $window === 'string') {
		                    extendApp[$window].attr('isShow', 'false')
		                        .removeClass('show')
		                        .addClass('hide')
		                    return
		                }
		                if ($window.attr('isFrist') === 'true') {
		                    $window.removeClass('hide')
		                        .addClass('show')
		                        .attr('isShow', 'true')
		                        .attr('isFrist', 'false')
		                        .find('iframe')
		                        .attr('src', URL)
		                    return
		                }
		                if ($window.attr('isShow') === 'true') {
		                    $window.attr('isShow', 'false')
		                        .removeClass('show')
		                        .addClass('hide')
		                } else {
		                    $window.attr('isShow', 'true')
		                        .removeClass('hide')
		                        .addClass('show')
		                }
		            }
		        },
		        loadExec() {
		            const f = debounce(function (e) {
		                const $target = $(this)
		                if ($target.css('background-color') === 'rgb(255, 237, 175)')
		                    $target.css('background-color', '')
		                else 
		                    $target.css('background-color', 'rgb(255, 237, 175)')
		            }, 10)
		            $(document.body).append(this.$window1, this.$window2)
		
		            Mousetrap.bind('w', () => {
		                $('.SpuInfo--property--tYIiC8i .next-form-item-label').on('click', f)
		                this.showHideWindow(this.$window1, this.getMappingInfo().mappingUrl)
		            })
		            Mousetrap.bind('q', () => {
		                this.showHideWindow(this.$window2, 'https://fbi.alibaba-inc.com/dashboard/view/page.htm?spm=a2o1z.8190076.0.0.3a45543f6AurPO&id=1537046')
		            })
		            Mousetrap.bind('ctrl+enter', () => {
		                const s = this.spaceChack()
		                if (s.status) {
		                    const inDate = formatDate(new Date())
		                    if (inDate === localStorage.inDate) {
		                        localStorage.inNum = Number(localStorage.inNum) + 1
		                    } else {
		                        localStorage.inDate = inDate
		                        localStorage.inNum = 1
		                    }
		                    $.toast({
		                        heading: 'Information',
		                        text: `提交中, 累计 ${localStorage.inNum} 簇`,
		                        showHideTransition: 'slide',
		                        icon: 'info'
		                    })
		                    const timer = setInterval(() => {
		                        const mi = this.getMappingInfo()
		                        if (mi.update) {
		                            this.$window1.attr('isFrist', 'true')
		                            this.showHideWindow(this.$window1, mi.mappingUrl)
		                            $('.SpuInfo--property--tYIiC8i .next-form-item-label').on('click', f)
		                            clearInterval(timer)
		                        }
		                    }, 3000)
		                    $('.BottomBar--bottom-bar--Jo73f6k .next-btn.next-btn-primary').click()
		                } else 
		                    s.el.focus()
		            })
		        }
		    });白牌.style = `body,html{overflow:hidden!important}.window1,.window2{z-index:9999}.window2,.window2 iframe{width:50vw;height:100%;position:fixed;top:0;left:0}.window1,.window1 iframe{width:50vw;height:100%;position:fixed;top:0;right:0}.window1.show,.window2.show{display:block}.window1.hide,.window2.hide{display:none}.window1 .close{width:30px;height:30px;position:absolute;left:0;font-size:19px;display:flex;justify-content:center;align-items:center;cursor:pointer;background:rgba(29,29,29,.829);color:#e9ffff;z-index:9999}.window2 .close{width:30px;height:30px;position:absolute;right:0;font-size:19px;display:flex;justify-content:center;align-items:center;cursor:pointer;background:rgba(29,29,29,.829);color:#e9ffff;z-index:9999}.window1 .close:hover,.window2 .close:hover{background:rgba(137,43,226,.705)}`;白牌.extend.$window1 = $(`<div class="window1 hide" isshow="false" isfrist="true"><div class="close" onclick="extendApp.showHideWindow('$window1')"><mdui-icon name="close"></mdui-icon></div><iframe src="" frameborder="0"></iframe></div>`);白牌.extend.$window2 = $(`<div class="window2 hide" isshow="false" isfrist="true"><div class="close" onclick="extendApp.showHideWindow('$window2')"><mdui-icon name="close"></mdui-icon></div><iframe src="" frameborder="0"></iframe></div>`);
	
		window.extendApp = extendWebPage([Window1, Window2, 白牌])
	})()
})()