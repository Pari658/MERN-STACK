const Content = () => {
    // random name change function..
    const handleNameChange = () => {
      const names = ["pari" , "uday" ,"harvi" , "jani" ,"dhruvil" ,"harmi" ,"neel"];
      const i = Math.floor(Math.random() * 7);
      return names[i];
    }
    //handle click function...
    const handleClick = () =>{
      console.log('you clicked it pari')
    }
    //parameters based function..
    const handleClick2 = (name) =>{
      console.log(`you clicked it ${name}`)
    }
    const name = handleNameChange()

  return(
    <main>
        <p>Hello {name} !</p>
        <button onClick={handleClick}>click me</button><br />
        <button onClick={() => handleClick2(name)}>click me2</button>
    </main>
  )

  }
export default Content