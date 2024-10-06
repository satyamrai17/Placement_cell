export const RegisteredStudents = (props)=>{
    return(<>
        <h1>List of Registered Students</h1>
        <p>{props.info.Name} {props.info.Father_name} {props.DateOfBirth}</p> 
        </>);
}