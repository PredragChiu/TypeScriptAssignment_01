/// <reference path="./node_modules/@types/jquery/index.d.ts" />

// Customer Level
enum Level
{
Normal,
VIP
}

// interface
interface Discount{
    Calculate(price : number, qty : number) :number
}

// Normal Customer
class NormalCustomer implements Discount{
    Calculate(price : number, qty : number) :number{
        if (price * qty >= 1000 && qty >= 3) {
            return price * qty * 0.85;
        }
        return price * qty;
    };
}

// Vip Customer
class VipCustomer implements Discount{
    Calculate(price : number, qty : number) :number{
        if (price * qty >= 500) {
            return price * qty * 0.8;
        }
        return price * qty;
    };
}


class GetDiscount {
     static GetDiscount(price:number,qty:number,level:string){
        var item:Discount;
        switch(level){
            case Level[Level.VIP]:
                item = new VipCustomer();
            break;
            case Level[Level.Normal]:
            default:
                item = new NormalCustomer();
            break;
        }
        return item.Calculate(price,qty);
    }
}

// jQuery
$(function () {
    $('#calculate').on('click', () => {
       var price  = $("#price").val() as number;
       var qty    = $("#qty").val() as number;
       var level  = $("#level").val() as string;
       var result = GetDiscount.GetDiscount(price,qty,level);
       $("#result").text(result);
    });
});