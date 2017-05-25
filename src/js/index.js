var js_ = {
    index: function() {
        console.log('123');
    },
    myConsumeTicket: function() {
        function layout() {
            var pageHeight = $('.myConsumeTicket').height();
            var windowHeight = $(window).height();
            if (pageHeight > windowHeight) {
                $('.html_body').css('height', pageHeight);
                $('body').css('height', pageHeight);
            } else {
                $('.html_body').css('height', windowHeight);
            }
        }
        layout();

        $(window).resize(function() {
            layout();
        });

    },
    myIntegral: function() {
        var windowHeight = $(window).height();
        //console.log(windowHeight);

        //当刚进入页面时，页面滚动条到顶部，防止刷新后，滚动条在中间
        $('html,body').stop(true, true).animate({
            scrollTop: (1)
        }, 0);

        /*下拉加载数据*/
        var dataNum = [
            ['1', '2', '3'],
            ['1', '2', '3'],
            ['1', '2', '3']
        ];
        //加载的数据数组，举个例子
        var scrollOver = true;
        //判断是否还能加载数据
        var index = 0;
        //index=0 默认为 dataNum 的一维数组，根据上面例子为 每组有3个
        var timeOk = true;
        //上一组影院是否加载完成

        $(window).scroll(function() {
            //console.log('1');
            var lastBoxBottom = parseFloat($('.myIntegral .integralList .box:last').offset().top) + parseFloat($('.myIntegral .integralList .box').height());
            //最后一个数据底部距离
            console.log(lastBoxBottom);
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            //页面滚动距离
            //console.log(scrollTop);

            if (lastBoxBottom < scrollTop + windowHeight && scrollOver && timeOk) {
                //如果 最后一个数据位置距离小于 页面滚动距离 + 屏幕设备高度 并且 可以继续加载 并且 上一组影院加载完成
                console.log('加载影院');
                timeOk = false;
                //数据还没有加载完成
                if (index < dataNum.length) {
                    //判断数据一维数组，如果数据还能继续加载，就显示 loading
                    $('.myIntegral .loadingIcon').show();
                }

                var t = setTimeout(function() {
                    //举个例子，就当之前 loading 了 2秒，这里是 loading 结束后

                    $('.myIntegral .loadingIcon').hide();
                    //loading消失

                    for (index; index < dataNum.length;) {
                        //循环数据一维数组
                        for (var j = 0; j < dataNum[index].length; j++) {
                            //循环数据二维数组
                            $('.myIntegral .integralList').append('<div class="box clear"><dl class="f-l"><dt>新账户注册</dt><dd>2016-08-12</dd></dl><div class="integralNum d-b f-r">+20</div></div>');
                            //页面加载进下一组数据
                        }
                        index += 1;
                        //一维数组索引 +1

                        break;
                        //跳出 for 循环
                    }

                    timeOk = true;
                    //可以继续加载下一组数据了

                }, 2000);
                console.log('index' + index);
                //数据一维数组，当前加载到第几组数据

                if (index == dataNum.length) {
                    //如果当前加载的数据一维数组数，等于一维数组最大值
                    scrollOver = false;
                    //所有数据加载完成，不能继续加载数据了
                    $('.myIntegral .noThing').show();
                    //提示用户已经到底部了
                }
                //console.log(scrollOver);
            }
        });
    },couponDetails:function(){

    },conditionStore:function(){

    },scanFocus:function(){
      function layout() {
          var pageHeight = $('.scanFocusBox').innerHeight();
          var windowHeight = $(window).height();
          if (pageHeight > windowHeight) {
              $('.scanFocus').css('height', pageHeight);
          } else {
              $('.scanFocus').css('height', windowHeight);
          }
      }
      layout();
    },nowUse:function(){
      function layout() {
          var pageHeight = $('.nowUseWrap').innerHeight();
          var windowHeight = $(window).height();
          if (pageHeight > windowHeight) {
              $('.nowUse').css('height', pageHeight);
          } else {
              $('.nowUse').css('height', windowHeight);
          }
      }
      layout();
    },registerVip:function(){
      $('.input-append').datetimepicker({
        language:  'cn',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 2,
        forceParse: false,
        format: 'yyyy-mm-dd'
      });
      $('.switchBtn').click(function(){
        if($(this).hasClass('boy')){
          $(this).removeClass('boy');
          $('.sexText').text('女');
        }else{
          $(this).addClass('boy');
          $('.sexText').text('男');
        }
      });
    },vipCode:function(){

    },myVipTicket:function(){
      $('.html_body .myVipTicket .navTop li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var navIndex = $(this).index();
        $('.ticketListWrap .ticketList').eq(navIndex).show().siblings().hide();
      });
    }
};
