var hdropDownState = {
    current: null
};

var hdropDown = {
    toggleDropDown: function () {
        if (this.isDropDown())
            this.closeDropDown();
        else
            this.openDropDown();
    },
    openDropDown: function () {
        var self = this;
        setTimeout(function () {
            var old = hdropDownState.current;
            hdropDownState.current = self;
            self.setState({});
            if (old && old != self)
                old.setState({});
        }, 1)
    },
    closeDropDown: function () {
        var self = this;
        setTimeout(function () {
            if (hdropDownState.current == self) {
                hdropDownState.current = null;
            }
            self.setState({});
        }, 1)
    },
    isDropDown: function () {
        return hdropDownState.current == this;
    }
};

module.exports = hdropDown;
