# Web Development
This repository contains the code done during learning web development. <br />
The README.md contains brief notes about the topics which I learned.

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