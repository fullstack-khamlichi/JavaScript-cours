// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  // myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return: ["CodeSweetly", "Web Developer", "Male"]

  function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
  }
  
  console.log(
    myBio('Oluwatobi', 'Sofela', 'CodeSweetly', 'Web Developer', 'Male')
  );
  