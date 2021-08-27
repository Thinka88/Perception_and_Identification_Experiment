const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: "intro",
  text: `(English version below)
            <br/ >
            <strong>Hallo und willkommen zu diesem Experiment!</strong>
            <br />
            <br />
            Bevor wir beginnen, geben wir dir einige generelle Informationen zum Ablauf. Bitte lies sie dir aufmerksam durch.
            <br />
            <br />
            Das Experiment wird ca. eine halbe Stunde dauern. Nimm dir also bitte diese Zeit und stell sicher, dass du nicht gestört wirst.
            Für jede*n Teilnehmer*in wird eine zufällige Identifikationsnummer gewählt, die keine Rückschlüsse auf deine Person zulässt.
            Das Experiment ist also anonym.
            Falls du normalerweise eine Brille (oder andere Sehhilfe) benötigst, um auf deinem Bildschirm zu lesen, setzte diese bitte auf.
            <br />
            <br />
            Nachfolgend bekommst du Instruktionen, die dir erklären, was du in diesem Experiment zu tun hast. Daraufhin wird das Experiment gestartet.
            Versuche so korrekt wie möglich zu antworten. Nachdem du alle Aufgaben gelöst hast, fragen wir dich noch nach zusätzlichen Angaben.
            Diese sind nicht verpflichtend, allerdings helfen sie uns, die Daten zu analysieren. Klicke danach auf den 'Weiter'-Knopf, damit deine Daten hochgeladen werden.
            Bitte schließe das Browserfenster erst, wenn du dazu aufgefordert wirst.
            <br/ >
            <br/ >
            Klicke nun unten auf den Knopf, um zu den Instruktionen zu gelangen.
            <br/ >
            <br/ >
            <br/ >
            <strong>Hello there and welcome to our experiment!</strong>
            <br/ >
            <br/ >
            Before we begin, we provide you with some general information. Please read it carefully.
            <br/ >
            <br/ >
            The experiment will take approximately half an hour. Please take this time and make sure that you are not interrupted.
            Each participant gets a unique identification number which does not trace back to you, meaning this experiment is anonymous.
            If you usually wear glasses (or other visual aid) when working on your screen, please put them on.
            <br/ >
            <br/ >
            Following, you will get instructions on what to do in this experiment. After that, the experiment is started.
            Try to answer as correctly as possible. After you have finished all trials, we will ask for some additional
            information which is optional but helps us with analyzing the results. Afterwards press the 'next'-button inorder to upload your data.
            Please don't close the browser window until we ask you to.`,
  buttonText: "weiter zu den Instruktionen / go to instructions",
});

const instructions_discrimination_practice = magpieViews.view_generator(
  "instructions",
  {
    trials: 1,
    name: "instructions",
    title: "Instruktionen | Instructions",
    text: `In jedem Durchgang des Experiments wirst du ein zweifarbiges Viereck sehen.
        Jede Matrix kann <strong>horizontal (-) oder vertikal (|)</strong> in zwei Hälften geteilt werden.
        Die beiden Hälften werden aus unterschiedlichen Prozessen erzeugt.
        Deine Aufgabe besteht darin, die Ausrichtung der Grenze zwischen den beiden Hälften zu beurteilen, indem du die <strong>'v' Taste</strong> für vertikal oder die <strong>'h' Taste</strong> für horizontal drücken.
        Bitte drücke erst eine Taste, wenn das Bild nicht mehr zu sehen ist.
        Um dich mit der Aufgabe vertraut zu machen beginnen wir mit 10 Übungsdurchläufen.
        Wir werden dir genau mitteilen wann das Hauptexperiment startet.
        <br/ >
        <br/ >
        In each trial of the experiment you will see a square made up of two colours.
        Each matrix can be divided into two halves either <strong>horizontally (-) or vertically (|)</strong>.
        The two halves are generated from different processes.
        Your task is to judge the orientation of the boundary between the two halves, by pressing <strong>'v' key</strong> for vertical or <strong>'h' key</strong> for horizontal.
        Please press the respective key when the picture is gone.
        Before we start there will be 10 practice trials, so you can familiarize yourself with the task.
        We will tell you exactly when the main experiment starts.
`,
    buttonText: "starte die Übung / begin the practice ",
  }
);

const instructions_discrimination_main = magpieViews.view_generator(
  "instructions",
  {
    trials: 1,
    name: "instructions",
    title: "Beginn des Hauptexperiments | Start of Main Experiment",
    text: `Ab jetzt startet das Hauptexperiment. Du kannst eine kleine Pause machen und starten wenn du bereit bist.
         Bitte drücke die Taste unten um zu starten.
         <br />
         <br />
          Now starts the main part of the experiment. You can take a break now and start when ever you are ready.
          Klick the button below to start`,
    buttonText: "Starte das Hauptexperiment / begin the main experiment",
  }
);

const instructions_identification_practice = magpieViews.view_generator(
  "instructions",
  {
    trials: 1,
    name: "instructions",
    title: "Instruktionen | Instructions",
    text: `In jedem Durchgang des Experiments wirst du ein zweifarbiges Viereck sehen.
        Jede Matrix ist entweder <strong>horizontal (-) oder vertikal (|)</strong> in zwei Hälften geteilt.
        Die beiden Hälften sind durch einen Spalt getrennt.
        Eine Hälfte wird aus einem zufälligen Prozess und die andere aus einem nicht-zufälligen Prozess erzeugt.
        <br/ >
        Deine Aufgabe besteht darin, zu identifizieren, welche Hälfte eher durch einen <strong>zufälligen</strong> Prozess erzeugt wird als durch einen nicht-zufälligen Prozess.
        Drücke die <strong>'w' Taste (oben) oder 's' Taste (unten)</strong>, wenn die Teilung horizontal ist, und nach <strong>'a' Taste (links) oder 'd' Taste (rechts)</strong>, wenn sie vertikal ist.
        Bitte drücke erst eine Taste, wenn das Bild nicht mehr zu sehen ist.
        Um dich mit der Aufgabe vertraut zu machen beginnen wir mit 10 Übungsdurchläufen.
        Wir werden dir genau mitteilen wann das Hauptexperiment startet.
        <br/ >
        <br/ >
        In each trial of the experiment you will see a square made up of two colours.
        Each matrix is divided into two halves either <strong>horizontally (-) or vertically (|)</strong>.
        The two halves are separated by a gap.
        One halve is generated from a random process and the other from a nonrandom process.
        <br/ >
        Your task is to identify which half is more likely to be produced by a <strong>random</strong> process than a nonrandom process.
        Press the <strong>'w' key (up) oder 's' key (down)</strong> if the division is horizontal, and <strong>'a' key (left) oder 'd' key (right)</strong> if vertical.
        Please press the respective key when the picture is gone.
        Before we start there will be 10 practice trials, so you can familiarize yourself with the task.
        We will tell you exactly when the main experiment starts.

`,
    buttonText: "starte die Übung / begin the practice",
  }
);

const instructions_identification_main = magpieViews.view_generator(
  "instructions",
  {
    trials: 1,
    name: "instructions",
    title: "Beginn des Hauptexperiments | Start of Main Experiment",
    text: `Ab jetzt startet das Hauptexperiment. Du kannst eine kleine Pause machen und starten wenn du bereit bist.
         Bitte drücke die Taste unten um zu starten.
         <br />
         <br />
          Now starts the main part of the experiment. You can take a break now and start when ever you are ready.
          Klick the button below to start`,
    buttonText: "Starte das Hauptexperiment / begin the main experiment",
  }
);

const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: "post_test",
  title: "Zusätzliche Information | Additional information",
  text: "Die folgenden Angaben sind freiwillig, würden uns aber in unserer Analyse der Daten helfen. <br/ > <br/ >  Answering the following questions is optional, but your answers will help us analyze our results.",
  buttonText: "Weiter / next",
  comments_question:
    "Hast du eine Idee, worum es in diesem Experiment geht? <br/ > Do you have any idea what this experiment is about?",
});

const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: "thanks",
  title: `Danke, dass du an diesem Experiment teilgenommen hast!
        <br/ >
        Du kannst jetzt das Browserfenster schließen.
        <br/ >
        <br/ >
        Thank you for taking part in this experiment!
        You can now close the browser window.`,
  prolificConfirmText: "Klicke hier / Press the button",
});

const discrimination_main = magpieViews.view_generator("key_press", {
  trials: trial_info.key_press_main.length,
  name: "discrimination_main",
  data: _.shuffle(trial_info.key_press_main),
  stim_duration: 1500,
});

const discrimination_practice = magpieViews.view_generator("key_press", {
  trials: trial_info.key_press_practice.length,
  name: "discrimination",
  data: _.shuffle(trial_info.key_press_practice),
  stim_duration: 1500,
});

const identification_main = magpieViews.view_generator("key_press", {
  trials: trial_info.key_press_main.length,
  name: "identification_main",
  data: _.shuffle(trial_info.key_press_main),
  stim_duration: 1500,
});

const identification_practice = magpieViews.view_generator("key_press", {
  trials: trial_info.key_press_practice.length,
  name: "identification_practice",
  data: _.shuffle(trial_info.key_press_practice),
  stim_duration: 1500,
});
