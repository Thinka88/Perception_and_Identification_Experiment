// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["discrimination", "identification"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


function generateSequence(length, switch_rate){
    var sequence = new Array(length-1);
    if(Math.random() < 0.5){
        sequence[0] = 0;
    } else {
        sequence[0] = 1;
    }
    for (let i = 0; i < length-1; i++){
        if(Math.random() < switch_rate){
            sequence[i] == 1 ? sequence[i+1] = 0 : sequence[i+1] = 1;

        }else{
            sequence[i+1] = sequence[i];
        }
    }
    return sequence;
}

function generate_trial_data(){

    var trial_data = new Array();
    var top = new Array(2);
    var expected = '';
    for(let i=0; i<=1; i = Math.round((i +0.02)*100)/100 ){
        for(let j=0; j<10; j++){
            random_sequence = generateSequence(1800,0.5);
            nonrandom_sequence = generateSequence(1800,i);




            if(Math.random() < 0.5){
                top = [random_sequence, nonrandom_sequence]
            }else{
                top = [nonrandom_sequence, random_sequence]
            }

            if(coin == 'discrimination'){
                var canvas = document.createElement('canvas');
                canvas.width = 60;
                canvas.height = 60;
                var ctx = canvas.getContext('2d');
                var sequence_counter = 0
                for(x = 0; x < canvas.height/2; x++){
                    for(y = 0; y < canvas.width; y++){
                        if(top[0][sequence_counter] == 0){
                            ctx.fillStyle = "rgb(0,109,160)";
                            ctx.fillRect( x, y, 1, 1 );
                        }else{
                            ctx.fillStyle = "rgb(200,81,0)";
                            ctx.fillRect( x, y, 1, 1 );
                        }
                        sequence_counter++;;
                    }
                }

                sequence_counter = 0;
                for(x = canvas.height/2; x<canvas.height; x++){
                    for(y = 0; y<canvas.width; y++){
                        if(top[1][sequence_counter] == 0){
                            ctx.fillStyle = "rgb(0,109,160)";
                            ctx.fillRect( x, y, 1, 1 );
                        }else{
                            ctx.fillStyle = "rgb(200,81,0)";
                            ctx.fillRect( x, y, 1, 1 );
                        }
                        sequence_counter++;
                    }
                }


                expected = 'horizontal'
                if(Math.random()<0.5){
                    ctx.translate(canvas.width/2,canvas.height/2);
                    ctx.rotate(90*Math.PI/180)
                    ctx.drawImage(canvas,-canvas.width/2,-canvas.width/2);
                    expected = 'vertical'
                }

                var tempCanvas=document.createElement("canvas");
                var tctx=tempCanvas.getContext("2d");

                var scale = 4
                var cw=canvas.width;
                var ch=canvas.height;
                tempCanvas.width=cw;
                tempCanvas.height=ch;
                tctx.drawImage(canvas,0,0);
                canvas.width*=scale;
                canvas.height*=scale;
                var ctx=canvas.getContext('2d');
                ctx.drawImage(tempCanvas,0,0,cw,ch,0,0,cw*scale,ch*scale);


                trial_data.push({
                    question: 'Kann die Matrix horizontal oder vertikal getrennt werden? / Can the matrix be devided horizontally or vertically?',
                    key1: 'v',
                    key2: 'h',
                    v: 'vertical',
                    h: 'horizontal',
                    expected: expected,
                    picture: canvas.toDataURL(),
                    switch_rate : i
                });

            }else{
                var canvas = document.createElement('canvas');
                canvas.width = 60;
                canvas.height = 110;
                var ctx = canvas.getContext('2d');
                var sequence_counter = 0

                ori = 'horizontal'
                if(Math.random()<0.5){
                    canvas.width = 110;
                    canvas.height = 60;
                    for(x = 0; x < (canvas.width-50)/2; x++){
                        for(y = 0; y < canvas.height; y++){
                            if(top[0][sequence_counter] == 0){
                                ctx.fillStyle = "rgb(0,109,160)";
                                ctx.fillRect( x, y, 1, 1 );
                            }else{
                                ctx.fillStyle = "rgb(200,81,0)";
                                ctx.fillRect( x, y, 1, 1 );
                            }
                            sequence_counter++;;
                        }
                    }

                    sequence_counter = 0;
                    for(x = canvas.width-30; x<canvas.width; x++){
                        for(y = 0; y<canvas.height; y++){
                            if(top[1][sequence_counter] == 0){
                                ctx.fillStyle = "rgb(0,109,160)";
                                ctx.fillRect( x, y, 1, 1 );
                            }else{
                                ctx.fillStyle = "rgb(200,81,0)";
                                ctx.fillRect( x, y, 1, 1 );
                            }
                            sequence_counter++;
                        }
                    }
                    ori = 'vertical'
                }else{
                    for(y = 0; y < (canvas.height-50)/2; y++){
                        for(x = 0; x < canvas.width; x++){
                            if(top[0][sequence_counter] == 0){
                                ctx.fillStyle = "rgb(0,109,160)";
                                ctx.fillRect( x, y, 1, 1 );
                            }else{
                                ctx.fillStyle = "rgb(200,81,0)";
                                ctx.fillRect( x, y, 1, 1 );
                            }
                            sequence_counter++;;
                        }
                    }

                    sequence_counter = 0;
                    for(y = canvas.height-30; y<canvas.height; y++){
                        for(x = 0; x<canvas.width; x++){
                            if(top[1][sequence_counter] == 0){
                                ctx.fillStyle = "rgb(0,109,160)";
                                ctx.fillRect( x, y, 1, 1 );
                            }else{
                                ctx.fillStyle = "rgb(200,81,0)";
                                ctx.fillRect( x, y, 1, 1 );
                            }
                            sequence_counter++;
                        }
                    }

                }





                var tempCanvas=document.createElement("canvas");
                var tctx=tempCanvas.getContext("2d");


                var scale = 3
                var cw=canvas.width;
                var ch=canvas.height;
                tempCanvas.width=cw;
                tempCanvas.height=ch;
                tctx.drawImage(canvas,0,0);
                canvas.width*=scale;
                canvas.height*=scale;
                var ctx=canvas.getContext('2d');
                ctx.drawImage(tempCanvas,0,0,cw,ch,0,0,cw*scale,ch*scale);

                console.log(top[0] == nonrandom_sequence)

                if(ori == 'vertical'){
                    trial_data.push({
                    question: 'Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?',
                    key1 : 'a',
                    key2 : 'd',
                    'a' : 'links/left',
                    'd' : 'rechts/right',
                    expected: (top[0] == random_sequence ? 'links/left' : 'rechts/right'),
                    picture: canvas.toDataURL(),
                    switch_rate : i
                    })
                }else{
                    trial_data.push({
                        question: 'Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?',
                        key1 : 'w',
                        key2 : 's',
                        'w' : 'oben/up',
                        's' : 'unten/down',
                        expected: (top[0] == random_sequence ? 'oben/up' : 'unten/down'),
                        picture: canvas.toDataURL(),
                        switch_rate : i
                    })


                }
            }
        }
    }

    return trial_data;
}

/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}



// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
