const counter =document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn)=> {
  btn.addEventListener('click', (e) =>{
  const styles = e.currentTarget.classList
  
  if (styles.contains('Increase'))
  {
    count++
  }
  else if (styles.contains('Decrease')= () =>) 
  {
    
        

        if (styles.contains = 0){
  
            count--

            
              }

  } 

 
  counter.textContent = count

  
})

})
