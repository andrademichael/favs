$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var name = $("#nameInput").val();
    var animal = $("#animalInput").val();
    var food = $("#foodInput").val();
    var clothing = $("#clothingInput").val();
console.log(array2);
    var array1 = [animal, food, clothing];
    var array2 = [array1.push(), array1.push([0]), array1.push(2)];
console.log(array2);
//     $("#printOut").text("the list is" + array2);
  });
});
