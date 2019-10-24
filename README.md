# Web Development
This repository contains the code done during learning web development. <br />
The README.md contains brief notes about the topics which I learned.
<details>
<summary> HTML </summary>
# HTML

#### `<meta>` tag
> `<meta charset="utf-8">` 

meta tag is used to give info about page without reading the body.
But as of now search engines read contents of pages; 
`<meta name="keyword"/>`
"utf-8" => set of characters used to type the document, always should be the first line

>`<meta name="viewport" content="width=devide-width, initial-scale=1">`

Always displays websited as scaled according to the device's width and 
only scaled to 1, such that there are no horizontal scroll bars.


### Typing Symbols
>`4&gt;3  3&lt;4 &quot;hey, you seeing it&quot; 
&amp; all of it is under &copy; &copysr;`

4&gt;3  3&lt;4 &quot;hey, you seeing it&quot; 
&amp; all of it is under &copy; &copysr;

### `<input>` tag

>`<input>`

Simple input element. <br/>
Types in input element.
##### by defaul type = "text"
    
>`<input type="text" placeholder="Enter your name"> `

>`<input type="password" placeholder="Enter your password">`

>`<input type="number" placeholder="Enter a number">`

>`<input type="date" placeholder="enter date">`

>`<input type="file" placeholder="select the file">`

>`<input type="color">`

#### Radio buttons
**If we dont give the same 'name' attribute to all the radio buttons, 
they will not be in the same group.**

>`<input type="radio" name="sample">`

>`<input type="radio" name="sample"> `

>`<input type="radio" name="sample"> `


#### Checkboxes
>`<input type="checkbox">`

>`<input type="checkbox">`


#### Multiselect and select


    <select name="" id="">
        <option value="">One</option>
        <option value="">Two</option>
        <option value="">Three</option>
    </select>


    <select name="" id="" multiple>
        <option value="">One</option>
        <option value="">Two</option>
        <option value="">Select all</option>
    </select>


    <select name="" id="">
        <option value=""">One</option>
        <option value="" selected>Two</option>
    </select>


#### Lists

Lists can be ordered as well as undordered.

Two types of attributes : 
1. type="" which gives the type of list.
2. start="" which sets the start number of the list to the specified element
many other attributes are available and can be found on MDN such as content
to be displayed on print or laptops etc.

Unordered Lists :
```
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```
Unordered lists with type property :
```
<ul type="circle">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
</ul>
<ul type="square">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
</ul>   
```

Ordered lists :
```
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```
Ordered lists with type and start : <br>
Type can be anything from - `["a","A","I","i",...]`
```
<ol type="A">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
</ol>
```
```
<ol start="200">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```
#### Links

1. target="_blank" makes the webpage open inside in a new blank window. 
2. target="_self" is the default one.

>`  <a href="https://www.google.com" target="_blank">Go to google</a>`

It will open your default mailbox with 'to' as the specified mail.
>`<a href="mailto:abc@gmail.com">Mail me!</a>`

It will open your dialpad with specified number.
>`<a href="tel:+123456789">Call me</a>`

In-page anchors : <br>
This will focus on the tag having id ="samplePara" `<p id="samplePara">`
>`<a href="#samplePara">Go to sample para</a>`
 
Relative links :<br>
Same directory, another file.
>`<a href="about.html">Open about</a>`

Relative links + in-page anchors :

>`<a href="about.html#sectionName">About's page sectionName</a>`


#### Multimedia

Image tag :
>`<img src="fullNameOfTheFile.extensionofThefile" alt="if image is not displayed, this text will be displayed">`

Note - Set only either of width or height, else image might get distorted 
>`<img src="sameHere.jpg" alt="sameHere" width="200" height="50">`
 
Video tag :
>`<video src="fullName.extension" controls></video>`

Autoplay options loads and plays the video automatically when the page is opened.
>`<video src="fullName.extension" controls autoplay></video>`

Loop lets the video play back to back.
>`<video src="fullName.extension" controls autoplay loop></video>`
    
With preload="auto", automatic buffering of video starts.
>`<video src="fullName.extension" preload="auto"></video>`

With preload="meta", only thumbnail and video length is displayed
>`<video src="fullName.extension" preload="meta"></video>`

When 'none' is selected, nothing is applied on webpage not even thumbnail
>`    <video src="fullName.extension" preload="none"></video>`

Video with subtitles
```
<video src="fileName.extension">
    <track kind="subtitles" src="subtitlefile.extension" srclang="en" label="English">S
</video>
```
Audio tag :
>`<audio controls src="fullname.extension" ></audio>`

Note - if we want background audio even if user does not does anything -->

>`    <audio src="fileName.extension" autoplay loop></audio>`


#### Tables

     <table border="5" cellspacing=10 cellpadding=20>
        <tr >
            <td>One</td>
            <td>Two</td>
        </tr>
        <tr>
            <td>Three</td>
            <td>Four</td>
        </tr>
        <tr>
            <td>Five</td>
            <td>Six</td>
            <td>Seven</td>
        </tr>
    </table>

Notes -
1. border by default has emboss effect
2. cellspacing=10 ; spaces inbetween cell borders gets increases
3. cellpadding=10 ; spaces increases within the body area of the cells

`<thead>` for enabling Headings
```
        <table border="5px solid black" cellspacing="2px">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Col 3</th>
                </tr>
            </thead>
            <tr>
                <td>Ram</td>
                <td>Kumar</td>

            </tr>
            <tr>
                <td>Sham</td>
                <td colspan="2" align="center">Kumar</td>
            </tr>
            <tr>
                <td>Ram</td>
                <td>Sham</td>
                <td>Gyan</td>
            </tr>

        </table>
```

</details>

Three types of using CSS :
1. Inline CSS -  CSS written while writing the tag.
    >`<p style="color:red;">This is a paragraph.</p>    `
2. Internal CSS - CSS written in the `<head>` tag.
    ```
        <head>
            <style>
            body {
            background-color: linen;
            }

            h1 {
            color: maroon;
            margin-left: 40px;
            }
            </style>
        </head>
    ```
3. External CSS - CSS written in external file and imported in HTML file.
    >`<link rel="stylesheet" href="style.css">`

---

Applying CSS :
1. `*` selector applies CSS on every element.
2. tag selector - Applies CSS on every element of the tag
    ```
        div { 
            background-color:"black"
        }
    ```        
3. id selector - Applies CSS on element which has specific id. Ids are unique to every element.
    ``` 
    #Ids_are_referenced_by_this {

    }
    ```    
4. class selector - Applied CSS on element which has a class associated with it. Many tags in html can have one class.

    ```
        .classes_are_referenced_by_this {
            
        }
    ```
    Notes - 
    1. Precedence of #id > precedence of .class > precedence of element >  precedence of *. It can be verified from Developer tools in the elements -> style window.
    3. In case of duplicate properties for the same element, top down approach is followed.
    4. Relative path css vs css in head tag depends on the order they're written. Follows top down approach.
    5. Inline style css overrides every other css.

---

Block and inline elements : <br>


1. Block element = p,h,div,etc.. takes a while width of the page-->
    >`<p>Para1</p> some more text`
    
2. Inline element = `<b>`,`<i>`,`<span>`,etc.. takes only that much space which is required.  
    >`    <b>Bold text</b>`

3. Bare text is also inline; Bare text means the text without any tag enclosing it <br>
    `This is bare text`


4. We can make a block element inline and vice versa.
    ```
    <p style="display: inline">Para 2 inline</p>
    <b style="display: block">B tag is now block element</b>
    ```
5. Block elements can give padding, margin and border to itself.

---

Margin, padding and border :

1. margin-area gets the color from parent element,
2. margin is outside the element.
3. padding is inside the element and takes the color from the element itself.
4. border makes his own space inside margin but outside.
5. Border takes up space from the element space itself.
6. If element space is 20px and border takes 1px, then the element will remain only with 19px space;

---

Fonts :

---Font-Types

1. pt mainly for type writers;
2. em is width of the character 'm' in default font size. 'm' is choosen because it is the widest english character.
3. vh is the height of the window as well. 1vh is 1/100 of window height. It changes according to the window size.
4. vw is the width of the window as well.

--- Fonts

1. monospace font means all character will takes same width
2. sans-serif font ; sans mean without and serif means tips outside of eachcharacter
3. multiple fonts means it will apply first, if first available then secondone and it continues;

---

Combining Selectors : <br>Used to apply CSS at once to different elements.<br>It is also used to apply CSS on elements/tags based on a relationship.<br> 
The relationship can be based on whether an element is direct child of another element, whether an element comes directly under another element and various other relationships.

--- Different relationships - <br>
1. A>B ; B is directly inside A i.e., direct child.
    ```
    ul > li {
        color:blue;
    }
    /*All direct li inside ul will be colored blue*/
    ```
2. A B ; B is a descendant of A. i.e., not a direct child.
    ```
    ul ul {
        font-style: italic
    }
    /*All unordered list inside unordered list will styled italic.*/
    ```
3.  A + B ; A and B needs to be direct sibling; i.e., B should come just after A under the same parent in HTML.
    ```
    ol + ul {
        background-color:green;
    }
    /*All unordered-lists that come directly under ordered-lists of the same parent will be colored green in background*/
    ```
4. A~B ; A and B need to be siblings i.e., B should come after A not just after under the same parent in HTML.
    ```
    ol ~ ul {
        background-color: grey;
    }
    /*All unordered-lists that come under ordered-lists (may not be directly) of the same parent will be colored grey in background.*/
    ```
---

Transforms and Translations :

Transform notes - <br>
1. translate(x,y) from left and from above; can also be negative;
    >`     transform : translate(30px,30px); `

2. Scales from center.
    >`transform : scale(1.2);`

3. Skewing is changing angle w.r.t. xdeg or ydeg.
    >`transform : skew(30deg,0); skew(xdeg,y) || skey(x,ydeg); `

4. By default it is rotateZ() .<br>rotateX and scaleY do the same thing.
    >`transform: rotate(45deg);` 

<br>
Transition notes - <br>
Transition allows us to change property values of an element smoothly, over a given duration of time.
    
Example 1 :
```
#div1:hover {
    background-color: blue;
    height : 40px;
    width: 120px;
    transition: height 1s, background 4s, width 1s;
}
```
Example 2 :
```
    div:hover + div {
    margin-left : 100px;
    margin-top : 150px;
    transition: margin 3s;
    }
```

<br>
Positioning notes - <br>
With the help of position, we can adjust/fix/automate the position of elements.

1. position:static; <br> position:static is the default. <br> Element will stick to the normal page flow. 

2. position: relative;<br> With relative positioning, we can adjust the position of the element we want with respect to other element as well.

3. position:fixed; <br>
If position:fixed, then the element on which it is applied remains on the same position even if we scroll the web page.

3. position: absolute; <br>
    Position:absolute works with the nearest ancestor that had the property =  position :(fixed || or anything ).  <br>
    If no element had a property = position : fixed, then we have the "Window" which has the property = position:fixed.
 
4. position : sticky; <br>
    The element on which it is used sticks to it's position even if the page is scrolled;

<br>
Animation notes - <br>
Animations help elements gradually change one style to other. <br>
Keyframes are required for the use of animations. <br>
Keyframes - This is an animation rule on basis of which style changes gradually. <br>

Examples include two ways of writing keyframes. <br>
Example 1 :

```
#div1:hover{
    animation-name: slide;
    animation-duration: 2s;
    animation-iteration-count: 30;
}

@keyframes slide {
    from {
        margin-left : 40px;
    }
    to {
        margin-left : 300px;
    }

}
```
Example 2 :
```
#div3:hover + div {
    animation-name : crazyslide;
    animation-duration: 2s;
    animation-iteration-count: 30;
}

keyframes crazyslide {
    0% {
        margin-left : 40px;
        height:80px;
    }
    25% {
        height : 40px;
        margin-left : 100px;
    }
    50% {
        margin-left:150px;
        background-color: red;
        height:0px;
    }
    75% {
        height: 40px;
        margin-left:200px;
    }
    100%{
        height:80px;
        margin-left : 250px;
        background-color: blue;
    }
}

```

---

Flexbox - <br>
1. Flexboxes help makes website responsive to different screens and sizes. <br>
2. The elements auto position themselves according to different screens and sizes. <br>
3. Flexboxes work with block elements.
