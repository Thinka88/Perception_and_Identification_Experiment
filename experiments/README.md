In the <i>images<i>-folder, one can find example stimuli pictures.

The other files are used to implement the experiment itsself, using <a href="https://magpie-ea.github.io/magpie-site/">_magpie</a>. Below one can find short descriptions of the (important) files: 
  - `01_custom_styles.css`: contains custom styles
	- `02_custom_functions.js`: contains contains custom functions, variables and hooks, like a coin-flip
	- `03_custom_views_templates.js`: contains user-defined special-purpose view templates (only needed, if the provided view templates are not enough for your experiment)
	- `04_trials.js`: contains the data of different trials of a task
	- `05_views.js`: defines the different kinds of tasks and other views, for example instructions, participants will see and engage with on the screen
	- `06_main.js`: contains the experiment structure and general information about its deployment
  - via <i>index<i> the experiment can be accessed. (Since we are using Netlify to deploy the experiment, this is mainly used for the implementation.)
