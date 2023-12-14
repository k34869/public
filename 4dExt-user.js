// ==UserScript==
// @name         driving-4D-trafficLight-extProgram
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  driving 4D trafficLight extProgram
// @author       Timeic
// @license      GPL-3.0 License
// @run-at       document-body
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @match        https://nc4-gawain-label.evad.mioffice.cn/*
// ==/UserScript==

(function () {
  let style = `
  .tip {
    width:100%;
    padding:10px 0;
    text-align:center;
    font-size:1.2rem;
    color:rgba(238,238,238,0.9);
    background:rgb(90,90,255,0.9);
    position:fixed;
    top:-60px;
    left:0;
    right:0;
    margin:auto;
    z-index:9999;
    transition:0.5s;
  }
  button.beikuang, button.zhengyou, button.zhengwu, button.zhengwei, button.ceayou, button.ceawu, button.ceawei, button.cebyou, button.cebwu, button.cebwei, button.tijiao {
    position: fixed;
    right: 10px;
    z-index: 9999999;
  }
  button.beikuang {
    bottom: 100px;
  }
  button.zhengyou {
    bottom: 150px;
  }
  button.zhengwu {
    bottom: 200px;
  }
  button.zhengwei {
    bottom: 250px;
  }
  button.ceayou {
    bottom: 300px;
  }
  button.ceawu {
    bottom: 350px;
  }
  button.ceawei {
    bottom: 400px;
  }
  button.cebyou {
    bottom: 450px;
  }
  button.cebwu {
    bottom: 500px;
  }
  button.cebwei {
    bottom: 550px;
  }
  button.tijiao {
    bottom: 600px;
  }
  `
  $(window).on('load', () => {
    $(document.head).append(`<style>${style}</style>`)
    window.extProgram = {
      $task: $(document.body).find('#root #task-form'),
      chaoxiang: {},
      liangmie: {},
      zhedang: {},
      hulue: {}
    }
    function initBox() {
      let formItem = $(iBody).find('.content form .easyform-form-item')
      let chaoxiangInput = $(formItem[0]).find('input')
      let liangmieInput = $(formItem[1]).find('input')
      let zhedangInput = $(formItem[2]).find('input')
      let hulueInput = $(formItem[3]).find('input')

      extProgram.chaoxiang.zhengxiang = chaoxiangInput[0]
      extProgram.chaoxiang.beixiang = chaoxiangInput[1]
      extProgram.chaoxiang.ceA = chaoxiangInput[2]
      extProgram.chaoxiang.unknown = chaoxiangInput[3]
      extProgram.chaoxiang.ceB = chaoxiangInput[4]

      extProgram.liangmie.you = liangmieInput[0]
      extProgram.liangmie.wu = liangmieInput[1]
      extProgram.liangmie.unknown = liangmieInput[2]

      extProgram.zhedang.wuz = zhedangInput[0]
      extProgram.zhedang.z = zhedangInput[1]

      extProgram.hulue.no = hulueInput[0]
      extProgram.hulue.yes = hulueInput[1]
      extProgram.submit = $(iBody).find('.content .attributes-form-footer button')
    }
    window.tip = function (text) {
      if (text === undefined || text === '') {
        return
      }
      extProgram.$tip.text(text).css('top', '0')
      setTimeout(() => {
        extProgram.$tip.css('top', '')
      }, 1000)
    }

    function chack() {
      return ($(iBody).find('#root .annotation-tools-modal.attributes-form').length === 0)
    }

    function autoClick(...args) {
      args.forEach((e) => {
        $(extProgram[e[0]][e[1]]).click()
      })
    }

    extProgram.$task.append(`<button type="button" class="ant-btn ant-btn-primary initAll"><span>初始化</span></button>`)
    extProgram.$task.on('click', () => {
      let iDoc = $('iframe')[0].contentDocument
      $(iDoc.head).append(`<style>${style}</style>`)
      window.iBody = iDoc.body
      $(iBody).append(`<div class="tip"></div>`)
      extProgram.$tip = $(iBody).children('.tip')
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary beikuang"><span>背框</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary zhengyou"><span>正有</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary zhengwu"><span>正无</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary zhengwei"><span>正未</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary ceayou"><span>侧A有</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary ceawu"><span>侧A无</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary ceawei"><span>侧A未</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary cebyou"><span>侧B有</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary cebwu"><span>侧B无</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary cebwei"><span>侧B未</span></button>`)
      $(iBody).find('#root').append(`<button type="button" class="ant-btn ant-btn-primary tijiao"><span>提交</span></button>`)
      $(iBody).find('#root .beikuang').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'beixiang'], ['liangmie', 'unknown'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('背框 + 遮挡')
      })
      $(iBody).find('#root .beikuang').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'beixiang'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('背框 + 无遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .beikuang').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'beixiang'], ['liangmie', 'unknown'], ['zhedang', 'z'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅背框 + 遮挡')
      })

      $(iBody).find('#root .zhengyou').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('正有 + 无遮挡')
      })
      $(iBody).find('#root .zhengyou').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'you'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('正有 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .zhengyou').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅正有 + 无遮挡')
      })

      $(iBody).find('#root .zhengwu').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('正无 + 无遮挡')
      })
      $(iBody).find('#root .zhengwu').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'wu'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('正无 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .zhengwu').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅正无 + 无遮挡')
      })

      $(iBody).find('#root .zhengwei').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('正未 + 无遮挡')
      })
      $(iBody).find('#root .zhengwei').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'unknown'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('正未 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .zhengwei').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'zhengxiang'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅正未 + 无遮挡')
      })

      $(iBody).find('#root .ceayou').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧A有 + 无遮挡')
      })
      $(iBody).find('#root .ceayou').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'you'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧A有 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .ceayou').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧A有 + 无遮挡')
      })

      $(iBody).find('#root .ceawu').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧A无 + 无遮挡')
      })
      $(iBody).find('#root .ceawu').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'wu'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧A无 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .ceawu').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧A无 + 无遮挡')
      })

      $(iBody).find('#root .ceawei').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧A未 + 无遮挡')
      })
      $(iBody).find('#root .ceawei').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'unknown'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧A未 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .ceawei').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceA'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧A未 + 无遮挡')
      })

      $(iBody).find('#root .cebyou').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧B有 + 无遮挡')
      })
      $(iBody).find('#root .cebyou').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'you'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧B有 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .cebyou').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'you'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧B有 + 无遮挡')
      })

      $(iBody).find('#root .cebwu').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧B无 + 无遮挡')
      })
      $(iBody).find('#root .cebwu').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'wu'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧B无 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .cebwu').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'wu'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧B无 + 无遮挡')
      })

      $(iBody).find('#root .cebwei').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        tip('侧B未 + 无遮挡')
      })
      $(iBody).find('#root .cebwei').on('contextmenu', (e) => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'unknown'], ['zhedang', 'z'], ['hulue', 'no'])
        tip('侧B未 + 遮挡')
        e.preventDefault()
      })
      $(iBody).find('#root .cebwei').on('dblclick', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        initBox()
        autoClick(['chaoxiang', 'ceB'], ['liangmie', 'unknown'], ['zhedang', 'wuz'], ['hulue', 'no'])
        $(extProgram.submit).click()
        tip('✅侧B未 + 无遮挡')
      })
      $(iBody).find('#root .tijiao').on('click', () => {
        if (chack()) {
          tip('❌错误：无菜单')
          return
        }
        extProgram.submit = $(iBody).find('.content .attributes-form-footer button')
        $(extProgram.submit).click()
        tip('✅')
      })
      tip('😊初始化完成!')
    })
  })
})()