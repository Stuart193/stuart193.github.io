
Date.prototype.month = function () {
    return this.getMonth() + 1;
}
Date.prototype.date = function () {
    return this.getDate();
}

location.href = ((new Date().month()) + "/" + (new Date().date()) + ".html");
