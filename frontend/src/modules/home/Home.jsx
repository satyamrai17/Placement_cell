import {Routes, Route} from "react-router-dom"; 
import { AdminDashboard } from "../dashboard/AdminDashboard.jsx"
import { About } from "../about/About.jsx";
import { Internship } from "../../modules/drives/internship/Internship";
import { Drive } from "../drives/components/Drive.jsx"
import { Login } from "../login/Login.jsx";
import { SignUp } from "../signUp/SignUp.jsx";
import { Main } from "./Main.jsx";
import { Contact } from "../contact/Contact.jsx";
// import { AccessControl } from "../dashboard/AccessControl.jsx";
// import { AdminPanel } from "../admin/components/AdminPanel.jsx";
// import { StudentProfile } from "../students/components/StudentProfile.jsx";
import { AccessControl } from "../dashboard/AccessControl.jsx";
import {StudentPanel }  from "../students/components/StudentPanel.jsx";
import { Registration } from "../students/components/Registration.jsx";
import { CompanyList } from "../company/CompanyList.jsx";
import { AddCompany } from "../company/AddCompany.jsx";
import { StudentLogin } from "../students/components/StudentLogin.jsx";
import TestTakingPage from "../students/components/TestTakingPage.jsx"
import StudentPrepare from "../students/components/StudentPrepare.jsx"
import TestAssignment from "../admin/components/TestAssignment.jsx";
import { FacultySignUp } from "../faculty/components/FacultySignUp.jsx";
import AdminUploadNotes from "../admin/components/AdminUploadNotes.jsx";
import FacultyUploadNotes from "../faculty/components/FacultyUploadNotes.jsx";
import { Apply } from "../applyJob/Apply.jsx";
import { FacultyLogin } from "../faculty/components/FacultyLogin.jsx";
import { FacultyPanel } from "../faculty/components/FacultyPanel.jsx";
import TestList from "../students/components/TestList.jsx";
import StudentResults from "../students/components/StudentResults.jsx";
import AllStudentResults from "../faculty/components/AllStudentResults.jsx";
import { StudentList } from "../../shared/components/StudentList.jsx";
import { FacultyList } from "../../shared/components/FacultyList.jsx";

export const Home=()=>{
    return(<>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/internship" element={<Internship/>}/>
            <Route path="/drive" element={<Drive/>}/>
            <Route path="/access-control" element={<AccessControl/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            {/* <Route path="/facultySignUp" element={<FacultySignUp/>}/> */}
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dashboard" element={<AdminDashboard/>}/>
            <Route path="/faculty-dashboard" element={<FacultyPanel/>}/>
            <Route path="/faculty-upload-notes" element={<FacultyUploadNotes/>}/>
            <Route path="/faculty-signup" element={<FacultySignUp/>}/>
            <Route path="/faculty-login" element={<FacultyLogin/>}/>
            <Route path="/all-results" element={<AllStudentResults/>}/>
            <Route path="/faculty-list" element={<FacultyList/>}/>
            
            <Route path="/job-apply" element={<Apply/>}/>



            
            <Route path="/assign-test" element={<TestAssignment/>}/>
            <Route path="/admin-upload-notes" element={<AdminUploadNotes/>}/>
            <Route path="/student-dashboard" element={<StudentPanel/>}/>
            <Route path="/student-prepare" element={<StudentPrepare/>}/>
            <Route path="/student-list" element={<StudentList/>}/>

            <Route path="/test-taking" element={<TestTakingPage/>}/>
            <Route path="/test-list" element={<TestList/>}/>
            <Route path="/student-results" element={<StudentResults/>}/>
            <Route path="/admin" element={<Login/>}/>
            <Route path="/student" element={<Registration/>}/>
            <Route path="/student-register" element={<Registration/>}/>
            <Route path="/student-login" element={<StudentLogin/>}/>
            <Route path="/add-company" element={<AddCompany/>}/>
            <Route path="/company-list" element={<CompanyList/>}/>
        </Routes>
    </>)
}