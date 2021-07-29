// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
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
  buttonText: 'weiter zu den Instruktionen / go to instructions'
});

// For most tasks, you need instructions views
const instructions_discrimination = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instruktionen | Instructions',
  text: `In jedem Durchgang des Experiments wirst du ein zweifarbiges Viereck sehen.
        Jede Matrix kann <strong>horizontal (-) oder vertikal (|)</strong> in zwei Hälften geteilt werden.
        Die beiden Hälften werden aus unterschiedlichen Prozessen erzeugt.
        Deine Aufgabe besteht darin, die Ausrichtung der Grenze zwischen den beiden Hälften zu beurteilen, indem du die <strong>v-Taste</strong> für vertikal oder die <strong>h-Taste</strong> für horizontal drücken.
        <br/ >
        <br/ >
        In each trial of the experiment you will see a square made up of two colours.
        Each matrix can be divided into two halves either <strong>horizontally (-) or vertically (|)</strong>.
        The two halves are generated from different processes.
        Your task is to judge the orientation of the boundary between the two halves, by pressing <strong>v key</strong> for vertical or <strong>h</strong> key for horizontal.
`,
  buttonText: 'starte das Experiment / begin the experiment'
});

const instructions_identification = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instruktionen | Instructions',
  text: `In jedem Durchgang des Experiments wirst du ein zweifarbiges Viereck sehen.
        Jede Matrix ist entweder <strong>horizontal (-) oder vertikal (|)</strong> in zwei Hälften geteilt.
        Die beiden Hälften sind durch einen Spalt getrennt.
        Eine Hälfte wird aus einem zufälligen Prozess und die andere aus einem nicht-zufälligen Prozess erzeugt.
        <br/ >
        Deine Aufgabe besteht darin, zu identifizieren, welche Hälfte eher durch einen <strong>zufälligen</strong> Prozess erzeugt wird als durch einen nicht-zufälligen Prozess.
        Drücke die <strong>obere oder untere Pfeiltaste</strong>, wenn die Teilung horizontal ist, und nach <strong>links oder rechts</strong>, wenn sie vertikal ist.
        <br/ >
        <br/ >
        In each trial of the experiment you will see a square made up of two colours.
        Each matrix is divided into two halves either <strong>horizontally or vertically</strong>.
        The two halves are separated by a gap.
        One halve is generated from a random process and the other from a nonrandom process.
        <br/ >
        Your task is to identify which half is more likely to be produced by a <strong>random</strong> process than a nonrandom process.
        Press the <strong>top or bottom arrow key</strong> if the division is horizontal, and <strong>left or right</strong> if vertical.

`,
  buttonText: 'starte das Experiment / begin the experiment'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Zusätzliche Information | Additional information',
  text: 'Die folgenden Angaben sind freiwillig, würden uns aber in unserer Analyse der Daten helfen. <br/ > <br/ >  Answering the following questions is optional, but your answers will help us analyze our results.',
  buttonText: 'Weiter / next',
  comments_question: 'Hast du eine Idee, worum es in diesem Experiment geht? <br/ > Do you have any idea what this experiment is about?'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: `Danke, dass du an diesem Experiment teilgenommen hast!
        <br/ >
        Du kannst jetzt das Browserfenster schließen.
        <br/ >
        <br/ >
        Thank you for taking part in this experiment!
        You can now close the browser window.`,
  prolificConfirmText: 'Klicke hier / Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const discrimination = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.key_press.length,
  // name should be identical to the variable name
  name: 'discrimination',
  data: _.shuffle(trial_info.key_press),
  stim_duration: 1500
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

const identification = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.key_press.length,
  // name should be identical to the variable name
  name: 'identification',
  data: _.shuffle(trial_info.key_press),
  stim_duration: 1500
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
