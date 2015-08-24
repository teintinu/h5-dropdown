var hdropDownState = {
    current: null
};

var k = 0;
var hdropDown = {
    toggleDropDown: function(e){
        if(this.isDropDown()){
            this.closeDropDown();
            k = 0;
        }
        else
            this.openDropDown();

    },
    toggleDropDown_window: function(e){
        if(this.isDropDown()){
            k++;
        }
        if(this.isDropDown() && k == 2) {
            this.closeDropDown();
            k = 0;
        }
    },
    openDropDown: function(){
        var old = hdropDownState.current;
        hdropDownState.current = this;
        this.setState({});
        if(old)
            old.setState({});
        window.addEventListener("click", this.toggleDropDown_window.bind(this))

    },
    closeDropDown: function(){
        if(hdropDownState.current == this)
            hdropDownState.current = null;
        this.setState({});
    },
    isDropDown: function(){
        return hdropDownState.current == this;
    },
};


module.exports = hdropDown;
