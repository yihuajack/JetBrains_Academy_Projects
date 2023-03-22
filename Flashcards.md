## Stage 1/3: Setting up

##### Description

First, you have to come up with the topic for your memory board. When selecting a theme to work with, remember that your questions and answers shouldn’t be too long. Flashcards can be used as an educational tool for a wide variety of tasks, from learning foreign words and scientific terms to memorizing the birthday dates of your new friends. We chose to make geography themed flashcards that can help you memorize the countries' capitals. You can join us with this idea using a [list of national capitals on Wiki](https://en.wikipedia.org/wiki/List_of_national_capitals), or find another theme that interests you.

Once you have chosen your topic of interest, edit the given HTML code. Add a suitable header for your memory-board and nine `<div>` elements with question terms (in our case, countries). Don't forget to use a suitable tag for the text.

To preview your intermediate solution hover the mouse pointer over the HTML code to show the browser icons popup, and click the icon that indicates the desired browser. Alternatively, select **View | Open in Browser** from the main menu and then select the desired browser from the list.

##### Objectives

\1. Make an appropriate title using a `<h1>` element
\2. Create a `<div>` with the question term for each of the nine cards

##### Example

The resulting web page should look like something like this:

![img](https://ucarecdn.com/96deadba-f61a-4d6d-b3a5-b48a3bb376cc/)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>What is the capital of...</h1>
    <div><p>Mexico</p></div>
    <div><p>Papua New Guinea</p></div>
    <div><p>Iceland</p></div>
    <div><p>South Korea</p></div>
    <div><p>Sweden</p></div>
    <div><p>Georgia</p></div>
    <div><p>Honduras</p></div>
    <div><p>Tunisia</div>
    <div><p>Austria</p></div>
</body>
</html>
```

## Stage 2/3: Design

##### Description

You got to the most creative part of the project: design! It's time to work out what your web-page should look like. You can make the decisions as you go, draw a tentative plan on a paper, or even use a design app like [Figma](https://www.figma.com/). Feel free to express your creativity, though there are some restrictions: since projects are about learning, restrictions are necessary for educational and testing purposes.

Don't forget to add a CSS file to the src folder and include a link to it in HTML; otherwise, the added styles will not apply.

First of all, let's design our flashcards. Set the size of divs with questions (notice: the cards are square), add color to the background, round the corners if you want, and position the text inside. Then form a table from the cards. We suggest using the following model of a page and CSS properties *grid/flex*.

![img](F:\Documents\Master\Self-Learning\Hyperskill\assets\0ebb6172-7cbd-4433-a840-bc2b9bb2650f.svg+xml)

Set the background for the element that contains all the cards and the title. We used the picture of the [world map](https://stepik.org/media/attachments/lesson/374893/world.png), but you can make a solid background if you prefer.

As a final touch, change the fonts of the title and the text on your flashcards.

Be careful, don't use extra elements without need.

##### Objectives

1. Make a set of square flash cards.
2. Set the background for the cards and the whole page using the CSS property `background-image/background-color`.
3. Position the cards using the CSS property `grid/flex` so they make a 3x3 table.
4. Set the fonts for the text.

##### Example

The result of this stage should look something like this:

![img](F:\Documents\Master\Self-Learning\Hyperskill\assets\693b0b58-fdad-4cee-91fb-8b632a75d082.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Capitals</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>What is the capital of...</h1>
    <div class="cards">
        <div class="card">
            <div class="question"><p>Mexico</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Papua New Guinea</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Iceland</p></div>
        </div>
        <div class="card">
            <div class="question"><p>South Korea</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Sweden</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Georgia</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Honduras</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Tunisia</p></div>
        </div>
        <div class="card">
            <div class="question"><p>Austria</p></div>
        </div>
    </div>
</body>
</html>
```

```css
body {
    background-image: url("https://stepik.org/media/attachments/lesson/374893/world.png");
    background-size: cover;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
}

.cards {
    height: 600px;
    width: 600px;
    display: flex;
    flex-flow: wrap row;
    align-content: center;
    justify-content: center;
    border-radius: 20px;
}

.card {
    height: 150px;
    width: 150px;
    background-color: bisque;
    position: relative;
    border-radius: 15px;
    margin: 5px;
}

.question {
    color: coral;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}
```

