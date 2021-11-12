# css-questions

<ul id="mylist">
<li>
<ul>
<li>A</li>
</ul>
</li>
<li>
<ul>
<li>B</li>
<li>C</li>
</ul>
</li>
</ul>

Using modern CSS selector syntax, how would you select only the <li> element with the "A" in it?
Select the best option:
A.
#mylist li ul li
B.
#mylist > li > ul > li
C. #mylist > li ul li
D.
It is impossible to do with CSS selector syntax
E.
It is possible to do with CSS selector syntax, but none of the choices above are correct.

--------------------------------------------
#foo {
width: 100px;
padding: 10px;
margin: 5px;
border: 1px solid black;
}
#bar {
width: 100px;
padding: 15px;
margin: 0px;
border: 1px solid black;
}

<div id="foo"></div>
<div id="bar"></div>

A. Neither. Both foo and bar have the same width. They are both 100px.
B.
Neither. Both foo and bar have the same width. As <div> elements, they are both as wide as the <body>. 
C. foo is wider than bar
D.
bar is wider than foo   (correct)
E. Neither. Both foo and bar are invisible.
--------------------------

<span>Well, hello</span>

span {
margin: 10px Opx 10px 0;
padding: 10px;
font-size: 28px;
line-height: 36px;
}

Which CSS rule does not have any visual effect on the element?
Select the best option:
A. margin: 10px Opx 10px 0;  (correct)
B. padding: 10px;
C. font-size: 28px;
D line-height: 36px;
E. All of the CSS rules have a visual effect

----------------
1) Popup vs tooltip 
2 ) Css Combinators
3 ) Bootstrap3 vs Bootcamp4
4) Display inline, block & inline-block
5 ) Hover effect using Sass.
6 ) Semantic Elements
7 ) Transition

Explain display properties and its difference
Explain position properties and its difference
Difference between div and span
What is box model
Difference between display: none; visibility: hidden; opacity: 0;
Create a Modal
What do you know about sprites
What are the different CSS preprocessor
  
  -------------------------
  
 Make three columns for each row
 Add backround color red for even item and green for odd item
```  
  <div class="align-blocks">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
    
    <div class="item">Four</div>
    <div class="item">Five</div>
    <div class="item">Six</div>
    
    <div class="item">Seven</div>
    <div class="item">Eight</div>
    <div class="item">Nine</div>
  </div>


  .align-blocks :nth-child(even) {
 background-color:red;
 }  
  
 -------------------using grid
  .align-blocks{
  display:grid;

     grid-template-columns: auto auto auto;
} 
  
--------------------using flex
 .align-blocks {
   display: flex;
  flex-wrap: wrap;
   
} 

.item {
  flex: 1 0 calc(33.333% - 20px); /* explanation below */
  
}
  
  ```
