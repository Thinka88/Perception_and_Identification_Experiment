$("document").ready(function () {
  // prevent scrolling when space is pressed
  window.onkeydown = function (e) {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  };
  window.magpie_monitor = magpieInit({
    views_seq: [
      intro,
      ...(coin == "discrimination"
        ? [
            instructions_discrimination_practice,
            discrimination_practice,
            instructions_discrimination_main,
            discrimination_main,
          ]
        : [
            instructions_identification_practice,
            identification_practice,
            instructions_identification_main,
            identification_main,
          ]),
      post_test,
      thanks,
    ],
    deploy: {
      experimentID: "276",
      serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
      // Possible deployment methods are:
      // "debug" and "directLink"
      // As well as "MTurk", "MTurkSandbox" and "Prolific"
      deployMethod: "debug",
      contact_email: "ktrant@uos.de",
      //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
    },
    progress_bar: {
      in: [
        coin == "discrimination"
          ? discrimination_practice.name
          : identification_practice.name,
        coin == "discrimination"
          ? discrimination_main.name
          : identification_main.name,
      ],
      style: "separate",
      width: 100,
    },
  });
});
