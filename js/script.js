var trigger = (function() {
    const sorceArr = [
            { order:1, color: 'bg1' }, 
            { order:2, color: 'bg2' }, 
            { order:3, color: 'bg3' }, 
            { order:4, color: 'bg2' }, 
            { order:5, color: 'bg3' }, 
            { order:6, color: 'bg4' }, 
            { order:7, color: 'bg4' },
            { order:8, color: 'bg1' }, 
            { order:9, color: 'bg3' }
        ];
    function shuffle() {
        let lastval = sorceArr.length;
        let temp;
        let index;
        // shuffle array index
        while (lastval > 0) {
            // change index randomly
            index = Math.floor(Math.random() * lastval);
            // Decrease ctr by 1
            lastval--;
            //swap the last element
            temp = sorceArr[lastval];
            sorceArr[lastval] = sorceArr[index];
            sorceArr[index] = temp;
        }
        changeOrder(sorceArr);
    }
    function sort() {
        sorceArr.sort(function (a, b) {
            return a.order - b.order;
        });
        changeOrder(sorceArr);
    }
    function changeOrder(arr) {
        for(var i = 0; i <arr.length; i++)
            document.getElementById(i+1).style.order = arr[i].order;
    }
    function render(data) {
        for(var i = 0; i < data.length; i++)
        {
            var liElmnt = document.createElement("li");
            liElmnt.className = ""+data[i].color;
            liElmnt.id = data[i].order;
            liElmnt.innerHTML = data[i].order;
            document.getElementById("numberbox").appendChild(liElmnt);
        }
    }
    render(sorceArr);
    return {
        shuffle, sort
    }
})();
