/* Variables
 *
 *
 */
const coin = _.sample(["discrimination", "identification"]);

/* Helper functions
 *
 *
 */

/* For generating random participant IDs */
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function (dec) {
  return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function (len) {
  let arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, this.dec2hex).join("");
};

/* Function for generating a binary sequence with a specified switch rate between 0 and 1 and a specified length */
function generateSequence(length, switch_rate) {
  var sequence = new Array(length - 1);
  // randomly determine the first binary number
  if (Math.random() < 0.5) {
    sequence[0] = 0;
  } else {
    sequence[0] = 1;
  }
  // switch rate determines the probability of changing the next number according to the prior number or keeping it
  for (let i = 0; i < length - 1; i++) {
    if (Math.random() < switch_rate) {
      sequence[i] == 1 ? (sequence[i + 1] = 0) : (sequence[i + 1] = 1);
    } else {
      sequence[i + 1] = sequence[i];
    }
  }
  return sequence;
}

/* Function for generating the practice trial data*/
function generate_trial_data_practice() {
  var trial_data = new Array();
  var top = new Array(2);
  var expected = "";
  var switch_rates = new Array();
  // generate an array of all possible switch rates
  for (let i = 0; i <= 1; i = Math.round((i + 0.02) * 100) / 100) {
    switch_rates.push(i);
  }

  // the practice trial always requires 10 images to be generated
  for (let i = 0; i < 10; i++) {
    // sample a switch rate and generate two binary sequences: one with the sampled switch rate and one with a switch rate of 0.5
    switch_rate = _.sample(switch_rates);
    random_sequence = generateSequence(1800, 0.5);
    nonrandom_sequence = generateSequence(1800, switch_rate);

    // choose with which sequence to start
    if (Math.random() < 0.5) {
      top = [random_sequence, nonrandom_sequence];
    } else {
      top = [nonrandom_sequence, random_sequence];
    }

    // discrimination condition
    if (coin == "discrimination") {
      var canvas = document.createElement("canvas");
      // no gap for discrimination, thus 60x60 canvas
      canvas.width = 60;
      canvas.height = 60;
      var ctx = canvas.getContext("2d");
      var sequence_counter = 0;
      // first fill the left half of the canvas with the color coinciding with the generated sequence
      // from top left to bottom right
      for (x = 0; x < canvas.height / 2; x++) {
        for (y = 0; y < canvas.width; y++) {
          if (top[0][sequence_counter] == 0) {
            ctx.fillStyle = "rgb(0,109,160)";
            ctx.fillRect(x, y, 1, 1);
          } else {
            ctx.fillStyle = "rgb(200,81,0)";
            ctx.fillRect(x, y, 1, 1);
          }
          sequence_counter++;
        }
      }

      // then the right half
      sequence_counter = 0;
      for (x = canvas.height / 2; x < canvas.height; x++) {
        for (y = 0; y < canvas.width; y++) {
          if (top[1][sequence_counter] == 0) {
            ctx.fillStyle = "rgb(0,109,160)";
            ctx.fillRect(x, y, 1, 1);
          } else {
            ctx.fillStyle = "rgb(200,81,0)";
            ctx.fillRect(x, y, 1, 1);
          }
          sequence_counter++;
        }
      }

      // the canvas as filled above is divided vertically
      expected = "vertical";
      // at random, flip this canvas by 90 degrees to get it horizontal
      if (Math.random() < 0.5) {
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((90 * Math.PI) / 180);
        ctx.drawImage(canvas, -canvas.width / 2, -canvas.width / 2);
        expected = "horizontal";
      }

      // change the size of the canvas
      var tempCanvas = document.createElement("canvas");
      var tctx = tempCanvas.getContext("2d");
      var scale = 4;
      var cw = canvas.width;
      var ch = canvas.height;
      tempCanvas.width = cw;
      tempCanvas.height = ch;
      tctx.drawImage(canvas, 0, 0);
      canvas.width *= scale;
      canvas.height *= scale;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * scale, ch * scale);

      // add the generated image to the trial data, along with some further information
      trial_data.push({
        question:
          "Kann die Matrix horizontal oder vertikal getrennt werden? / Can the matrix be devided horizontally or vertically?",
        key1: "v",
        key2: "h",
        v: "vertical",
        h: "horizontal",
        expected: expected,
        picture: canvas.toDataURL(),
        switch_rate: i,
      });

      // identification condition
    } else {
      var canvas = document.createElement("canvas");
      // canvas has to be wider/higher to fit the gap
      canvas.width = 60;
      canvas.height = 110;
      var ctx = canvas.getContext("2d");
      var sequence_counter = 0;

      ori = "vertical";
      // randomly assign some trials to be horizontal
      if (Math.random() < 0.5) {
        canvas.width = 110;
        canvas.height = 60;
        // fill left half of the canvas
        for (x = 0; x < (canvas.width - 50) / 2; x++) {
          for (y = 0; y < canvas.height; y++) {
            if (top[0][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }

        sequence_counter = 0;
        // then the right
        for (x = canvas.width - 30; x < canvas.width; x++) {
          for (y = 0; y < canvas.height; y++) {
            if (top[1][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }
        ori = "horizontal";
        // for the vertical trials
      } else {
        // fill like above
        for (y = 0; y < (canvas.height - 50) / 2; y++) {
          for (x = 0; x < canvas.width; x++) {
            if (top[0][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }

        sequence_counter = 0;
        for (y = canvas.height - 30; y < canvas.height; y++) {
          for (x = 0; x < canvas.width; x++) {
            if (top[1][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }
      }

      // change the size of the canvas
      var tempCanvas = document.createElement("canvas");
      var tctx = tempCanvas.getContext("2d");
      var scale = 3;
      var cw = canvas.width;
      var ch = canvas.height;
      tempCanvas.width = cw;
      tempCanvas.height = ch;
      tctx.drawImage(canvas, 0, 0);
      canvas.width *= scale;
      canvas.height *= scale;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * scale, ch * scale);

      // add the generated image to the trial data, along with some further information
      if (ori == "horizontal") {
        trial_data.push({
          question:
            "Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?",
          key1: "a",
          key2: "d",
          a: "links/left",
          d: "rechts/right",
          expected: top[0] == random_sequence ? "links/left" : "rechts/right",
          picture: canvas.toDataURL(),
          switch_rate: i,
        });
      } else {
        trial_data.push({
          question:
            "Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?",
          key1: "w",
          key2: "s",
          w: "oben/up",
          s: "unten/down",
          expected: top[0] == random_sequence ? "oben/up" : "unten/down",
          picture: canvas.toDataURL(),
          switch_rate: i,
        });
      }
    }
  }

  return trial_data;
}

/* Function for generating the practice trial data*/
function generate_trial_data_main() {
  var trial_data = new Array();
  var top = new Array(2);
  var expected = "";
  // generate 6 images for every switch rate from 0 to 1 incremented by 0.02
  for (let i = 0; i <= 1; i = Math.round((i + 0.02) * 100) / 100) {
    for (let j = 0; j < 6; j++) {
      random_sequence = generateSequence(1800, 0.5);
      nonrandom_sequence = generateSequence(1800, i);

      // choose with which sequence to start
      if (Math.random() < 0.5) {
        top = [random_sequence, nonrandom_sequence];
      } else {
        top = [nonrandom_sequence, random_sequence];
      }

      // discrimination condition
      if (coin == "discrimination") {
        var canvas = document.createElement("canvas");
        canvas.width = 60;
        canvas.height = 60;
        var ctx = canvas.getContext("2d");
        var sequence_counter = 0;
        // first fill the left half of the canvas with the color coinciding with the generated sequence
        // from top left to bottom right
        for (x = 0; x < canvas.height / 2; x++) {
          for (y = 0; y < canvas.width; y++) {
            if (top[0][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }

        sequence_counter = 0;
        // then the right half
        for (x = canvas.height / 2; x < canvas.height; x++) {
          for (y = 0; y < canvas.width; y++) {
            if (top[1][sequence_counter] == 0) {
              ctx.fillStyle = "rgb(0,109,160)";
              ctx.fillRect(x, y, 1, 1);
            } else {
              ctx.fillStyle = "rgb(200,81,0)";
              ctx.fillRect(x, y, 1, 1);
            }
            sequence_counter++;
          }
        }

        // the canvas as filled above is divided vertically
        expected = "vertical";
        // at random, flip this canvas by 90 degrees to get it horizontal
        if (Math.random() < 0.5) {
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.drawImage(canvas, -canvas.width / 2, -canvas.width / 2);
          expected = "horizontal";
        }

        // change the size of the canvas
        var tempCanvas = document.createElement("canvas");
        var tctx = tempCanvas.getContext("2d");
        var scale = 4;
        var cw = canvas.width;
        var ch = canvas.height;
        tempCanvas.width = cw;
        tempCanvas.height = ch;
        tctx.drawImage(canvas, 0, 0);
        canvas.width *= scale;
        canvas.height *= scale;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * scale, ch * scale);

        // add the generated image to the trial data, along with some further information
        trial_data.push({
          question:
            "Kann die Matrix horizontal oder vertikal getrennt werden? / Can the matrix be devided horizontally or vertically?",
          key1: "v",
          key2: "h",
          v: "vertical",
          h: "horizontal",
          expected: expected,
          picture: canvas.toDataURL(),
          switch_rate: i,
        });

        // identification condition
      } else {
        var canvas = document.createElement("canvas");
        // canvas has to be wider/higher to fit the gap
        canvas.width = 60;
        canvas.height = 110;
        var ctx = canvas.getContext("2d");
        var sequence_counter = 0;

        ori = "horizontal";
        // randomly assign some trials to be horizontal
        if (Math.random() < 0.5) {
          canvas.width = 110;
          canvas.height = 60;
          // fill left half of the canvas
          for (x = 0; x < (canvas.width - 50) / 2; x++) {
            for (y = 0; y < canvas.height; y++) {
              if (top[0][sequence_counter] == 0) {
                ctx.fillStyle = "rgb(0,109,160)";
                ctx.fillRect(x, y, 1, 1);
              } else {
                ctx.fillStyle = "rgb(200,81,0)";
                ctx.fillRect(x, y, 1, 1);
              }
              sequence_counter++;
            }
          }

          // then the right
          sequence_counter = 0;
          for (x = canvas.width - 30; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
              if (top[1][sequence_counter] == 0) {
                ctx.fillStyle = "rgb(0,109,160)";
                ctx.fillRect(x, y, 1, 1);
              } else {
                ctx.fillStyle = "rgb(200,81,0)";
                ctx.fillRect(x, y, 1, 1);
              }
              sequence_counter++;
            }
          }
          ori = "vertical";
          // for the vertical trials
        } else {
          // fill like above
          for (y = 0; y < (canvas.height - 50) / 2; y++) {
            for (x = 0; x < canvas.width; x++) {
              if (top[0][sequence_counter] == 0) {
                ctx.fillStyle = "rgb(0,109,160)";
                ctx.fillRect(x, y, 1, 1);
              } else {
                ctx.fillStyle = "rgb(200,81,0)";
                ctx.fillRect(x, y, 1, 1);
              }
              sequence_counter++;
            }
          }

          sequence_counter = 0;
          for (y = canvas.height - 30; y < canvas.height; y++) {
            for (x = 0; x < canvas.width; x++) {
              if (top[1][sequence_counter] == 0) {
                ctx.fillStyle = "rgb(0,109,160)";
                ctx.fillRect(x, y, 1, 1);
              } else {
                ctx.fillStyle = "rgb(200,81,0)";
                ctx.fillRect(x, y, 1, 1);
              }
              sequence_counter++;
            }
          }
        }

        // change the size of the canvas
        var tempCanvas = document.createElement("canvas");
        var tctx = tempCanvas.getContext("2d");
        var scale = 3;
        var cw = canvas.width;
        var ch = canvas.height;
        tempCanvas.width = cw;
        tempCanvas.height = ch;
        tctx.drawImage(canvas, 0, 0);
        canvas.width *= scale;
        canvas.height *= scale;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * scale, ch * scale);

        // add the generated image to the trial data, along with some further information
        if (ori == "vertical") {
          trial_data.push({
            question:
              "Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?",
            key1: "a",
            key2: "d",
            a: "links/left",
            d: "rechts/right",
            expected: top[0] == random_sequence ? "links/left" : "rechts/right",
            picture: canvas.toDataURL(),
            switch_rate: i,
          });
        } else {
          trial_data.push({
            question:
              "Welche Matrix wurde zufällig erzeugt? / Which matrix is randomly generated?",
            key1: "w",
            key2: "s",
            w: "oben/up",
            s: "unten/down",
            expected: top[0] == random_sequence ? "oben/up" : "unten/down",
            picture: canvas.toDataURL(),
            switch_rate: i,
          });
        }
      }
    }
  }
  return trial_data;
}
