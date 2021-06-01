var survey_options=document.getElementById('survey_options');
var add_more_fields=document.getElementById('add_more_fields');
var remove_fields=document.getElementById('remove_fields');


add_more_fields.onclick=function(){

    var newField=document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','survey_options[]1');
    newField.setAttribute('class','survey_options');
    newField.setAttribute('size','50');
    newField.setAttribute('placeholder','Name');
    survey_options.appendChild(newField);
  

    var newField2=document.createElement('input');
    newField2.setAttribute('type','text');
    newField2.setAttribute('name','survey_options[]2');
    newField2.setAttribute('class','survey_options');
    newField2.setAttribute('size','50');
    newField2.setAttribute('placeholder','Email');
    survey_options.appendChild(newField2);

    var newField3=document.createElement('input');
    newField3.setAttribute('type','text');
    newField3.setAttribute('name','survey_options[]3');
    newField3.setAttribute('class','survey_options');
    newField3.setAttribute('size','50');
    newField3.setAttribute('placeholder','course');
    survey_options.appendChild(newField3);
}

remove_fields.onclick=function(){
    var input_tags=survey_options.getElementsByTagName('input');
    if(input_tags.length > 3){
        survey_options.removeChild(input_tags[(input_tags.length)-1]);
    }
}