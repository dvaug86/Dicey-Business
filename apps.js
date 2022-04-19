$(document).ready(function () {



    let counter = 0; //count for id purpose
    var dice_Array = [];
    class Die {

        constructor() {
            this.render();
            dice_Array.push(this);
            this.roll();
            this.reroll
            

        }
        render() {
            this.div = $(`<div class = "dice" id = "${counter}" ></div>`);
            $('.die_Container').append(this.div);

        }
        roll() {
            this.value = Math.floor(Math.random() * 6 + 1);
            this.div.text(this.value);
        }
        reroll(){
            this.value = null;
            this.value = Math.floor(Math.random() * 6 + 1);
            this.div.text(this.value);
        }
        
        
    }
    $('#button1').click(function () {
        new Die();
        counter++;
    });

    $('#button2').click(function () {
        dice_Array.forEach(die => {
            die.roll();
        })
    });

    $('#button3').click(function () {
        let total = 0;
        for (let i = 0; i < dice_Array.length; i++) {
            total += dice_Array[i].value;
        };
        alert(total);
    });
    
    $('.dice').mouseover(function () {
        die.reroll();
});

});

