const readURL = (input) =>{
    console.log("input:"+input);
    console.log(input.files[0])
    const file=input.files[0];
    if(file != ""){
        let reader= new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            console.log(e.target.result);   // e.target.result :해당 파일 경로
            document.getElementById("img").src= e.target.result;
        }
    }
}