var john={
    birth:1998,
    cal:function ()
    {
        console.log(2021-birth);
    }
}
var mike={
    birth:1994
}
mike.cal=john.cal;
mike.cal();