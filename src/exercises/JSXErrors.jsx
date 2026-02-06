// ERROR 1: What's wrong here?
//i added div because it's singe root !!!
function BadComponent1() {
 return (<div>
 <h1>Hello</h1>
 <p>This is broken</p>
 </div>
 )
}
// ERROR 2: What's wrong here? 
//we can't use if here !!!
function BadComponent2() {
 const isTrue = true
 return (
 <div>
 <p>Result: {isTrue ? 'Yes' : 'No'} </p>
 </div>
 )
}
// ERROR 3: What's wrong here?
//missing / in img and alt !!!!
function BadComponent3() {
 return (
 <div class="container">
 <img src="cat.jpg" alt="a cat"/>
 <p>A paragraph</p>
 </div>
 )
}