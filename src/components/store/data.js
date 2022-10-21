
export const formikcontrol = [
  {
    control:'input',
    type:'text',
    label:'Name',
    name:'name',
    placeholder:'Full Name'
},
{
  control:'input',
  type:'email',
  label:'Email',
  name:'email',
  placeholder:'Email'
},
{
  control:'input',
  type:'text',
  label:'Profession',
  name:'profession',
  placeholder:'Profession'
},
{
  control:'input',
  type:'number',
  label:'Age',
  name:'age',
  placeholder:'Age',
  step:1,
  min:20,
},
{
  control:'select',
  label:'Gender',
  name:'gender',
  placeholder:'Age',
  options:[
    {id:1, label:'Gender', value:''},
    {id:2, label:'Male', value:'Male'},
    {id:3, label:'Female', value:'Female'}
  ]
},
{
  control:'date',
  label:'Date of Birth',  
  name:'doB'
},
]