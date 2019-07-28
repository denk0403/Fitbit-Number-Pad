# Number Pad for Fitbit Apps
This open source software represents a reusable and customizable number pad for apps made on Fitbit Versa and Versa Lite. 

# Features
- Provides simple buttons for all 10 digits, a backspace, and "done".
- Works with Push Button and Square Button UI components.
- Reselecting a number field will copy over the current text into the number pad to allow for quick editing.

# How To Use
### Step 1
In the `resources` folder, copy the `back_arrow.png` file into your own project.

### Step 2
Again in the `resources` folder, go into the `styles.css` file and copy the contents into your CSS file 
(Check to make sure the selector's class name doesn't conflict with any existing class names in your project).

### Step 3
Next in the `resources` folder, go into the `widgets.gui` file and copy only the necessary imports into your widgets file
(You can avoid this step if your project already contains these imports).

### Step 4
Last in the `resources` folder, go into the `index.gui` file and copy the entire SVG element labeled "Number Pad Screen"
and with the attribute `id="number_entry_screen"` (Look for comments indicating the beginning and end of the necessary code). 
Paste this element at the __END__ of the top-level SVG element of your `index.gui` file, or else it may not display properly.

### Step 5
Now in the `app` folder, copy the first part of the code in the `index.js` file, and paste it at the top of your main file
(Look again for comments indicating the beginning and end of the necessary code).

To make any Square Button or Push Button to act as a user number field, retrieve its corresponding element 
from the SVG (`index.gui`) using the Document API, and wrap it in the provided `numberField()` function. 
The `index.js` file demonstrates exactly how that should look like.

# Examples
![image](https://user-images.githubusercontent.com/3473945/62004286-1d7f4e00-b0f1-11e9-92a5-99dffa677d5d.png)
![image](https://user-images.githubusercontent.com/3473945/62004287-25d78900-b0f1-11e9-9172-564bb95027c0.png)
![image](https://user-images.githubusercontent.com/3473945/62004288-296b1000-b0f1-11e9-96ef-deafff86cdbe.png)
![image](https://user-images.githubusercontent.com/3473945/62004292-2c660080-b0f1-11e9-9b91-de7395f98e91.png)

# License
Number Pad for Fitbit Apps is licensed under the MIT License - see the [LICENSE](https://github.com/denk0403/Fitbit-Number-Pad/blob/master/LICENSE) file for details.
