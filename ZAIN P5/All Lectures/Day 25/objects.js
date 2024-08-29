let studant_info = {
    FIRSTNAME : "Zain",
    LASTNAME : "Nadeem", 
    AGE : "18",
    ADDRESS : "Sheikhupura"
}
console.log(studant_info);
// Access Way 1
console.log(studant_info.FIRSTNAME);
// Access Way 2
console.log(studant_info["FIRSTNAME"]);
//Add new Record
studant_info["Email"]='zainnadeem@example.com'
console.log(studant_info)
//Delete Record
delete studant_info ["ADDRESS"]
console.log(studant_info)
// Key object
let key_obj = Object.keys(studant_info)
console.log(key_obj)
//Key Value
let Value_obj = Object.values(studant_info)
console.log(studant_info)
// Entries object
let Entries_obj = Object.entries(studant_info)
console.log(Entries_obj)
//Task//