export const getDepartments=()=>(
    [
        {id:'1', title:'Development'},
        {id:'2', title:'Marketing'},
        {id:'3', title:'Accounting'},
        {id:'4', title:'HR'},
    ]
)
// () ব্যবহার করলে সরাসরি রিটার্ন হয় (Implicit Return)
//{} ব্যবহার করলে return লিখতে হয় (Explicit Return)

// export const getDepartments=()=>{
//     return [
//        {id:'1', title:'Development'},
//        {id:'2', title:'Marketing'},
//        {id:'3', title:'Accounting'},
//        {id:'4', title:'HR'},
//    ]
//    }