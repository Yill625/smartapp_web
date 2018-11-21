/**
 * @file label的示例
 * @author houyu
 */
Page({
    data: {   
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        res:'',
        money:''
    },
    reset:function(e){
        this.setData({   
            inputValue1:0,
            inputValue2:'',
            inputValue3:'',
            res:'',
            money:''
        });
    },
    sum1:function(e){
        
        this.setData({   
            res: Number(this.data.inputValue1) * Math.pow((1 + Number(this.data.inputValue2) / 100), Number(this.data.inputValue3))
        });
        this.setData({   
            money: this.data.res-this.data.inputValue1
        });
        
    },
    bindKeyInput1: function (e) {
        console.log(e.detail.value)
        this.setData({     
            inputValue1: e.detail.value
        });
    },
        bindKeyInput2: function (e) {
        console.log(e.detail.value)
        this.setData({     
            inputValue2: e.detail.value
        });
    },
        bindKeyInput3: function (e) {
        console.log(e.detail.value)
        this.setData({     
            inputValue3: e.detail.value
        });
    }
});
