let class1 = ["Rajesh", "Suresh", "Ramesh", "Kamlesh", "Vignesh"];
let class2 = ["Liam", "Noah", "Oliver", "Elijah", "William"];
let class3 = ["James", "Benjamin", "Lucas", "Henry", "Alexander"];
let class4 = ["Olivia", "Emma", "Ava", "Charlotte", "Sophia"];
let selectedStudent=[];
$("#classes").change(() => {
  let studentsClass = $("#classes").val();

  switch (studentsClass) {
    case "0":
        $('#data').html("");
        break;
    case "1":
      showData(class1);
      break;
    case "2":
      showData(class2);
      break;
    case "3":
      showData(class3);
      break;
    case "4":
      showData(class4);
      break;
    default:
    // code block
  }
});

const showData = (className) => {
    
    $('#data').html("");
  className.forEach((element) => {
    console.log(element);
    $('#data').append(`<li class="list-group-item ">${element} <input class="form-check-input mx-auto" type="checkbox" value=${element} id=${element} onclick="push(${element})"></li>`)
  });
  $('#data').append(`<button type="button" class="btn btn-primary" id='click' onclick="showingSelectedStudents()">Send</button>`)
};

  const showingSelectedStudents=()=>{
    $('#selectMenu').hide();
      $('#showData').hide();
      $('#showSelectedStudent').append(`<h1>You Selected Following Students</h1>`)
console.log(selectedStudent);   
selectedStudent.forEach((element) => {
    console.log(element);
    $('#showSelectedStudent').append(`<li class="list-group-item ">${element}</li>`)
  });
  $('#showSelectedStudent').append(`<button type="button" class="btn btn-primary" id='click' onclick="location.reload()">back</button>`)
  }

const push=(studentName)=>{
 selectedStudent.push(studentName.value);    
}
