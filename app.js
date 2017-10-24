"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts" />
// Customer Level
var Level;
(function (Level) {
    Level[Level["Normal"] = 0] = "Normal";
    Level[Level["VIP"] = 1] = "VIP";
})(Level || (Level = {}));
// Normal Customer
var NormalCustomer = (function () {
    function NormalCustomer() {
    }
    NormalCustomer.prototype.Calculate = function (price, qty) {
        if (price * qty >= 1000 && qty >= 3) {
            return price * qty * 0.85;
        }
        return price * qty;
    };
    ;
    return NormalCustomer;
}());
// Vip Customer
var VipCustomer = (function () {
    function VipCustomer() {
    }
    VipCustomer.prototype.Calculate = function (price, qty) {
        if (price * qty >= 500) {
            return price * qty * 0.8;
        }
        return price * qty;
    };
    ;
    return VipCustomer;
}());
var GetDiscount = (function () {
    function GetDiscount() {
    }
    GetDiscount.GetDiscount = function (price, qty, level) {
        var item;
        switch (level) {
            case Level[Level.VIP]:
                item = new VipCustomer();
                break;
            case Level[Level.Normal]:
            default:
                item = new NormalCustomer();
                break;
        }
        return item.Calculate(price, qty);
    };
    return GetDiscount;
}());
// jQuery
$(function () {
    $('#calculate').on('click', function () {
        var price = $("#price").val();
        var qty = $("#qty").val();
        var level = $("#level").val();
        var result = GetDiscount.GetDiscount(price, qty, level);
        $("#result").text(result);
    });
});
//# sourceMappingURL=app.js.map