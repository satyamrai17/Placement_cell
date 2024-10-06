


import { facultyModel } from "../db/models/faculty-schema.js";

export const facultyController = {
    async login(request, response) {
        const facultyInfo = request.body;
        const doc = await facultyModel.findOne({ 'email': facultyInfo.email }).exec();
        if (doc && doc._id) {
            const planPassword = facultyInfo.password;
            const dbPassword = doc.password;
            if (planPassword == dbPassword) {
                response.json({ message: 'Welcome ' + doc.name, faculty: doc });
            } else {
                response.json({ message: 'Invalid UserId or Password !' });
            }
        } else {
            response.json({ message: 'Invalid UserId or Password !' });
        }
    },
    
    async register(request, response) {
        const facultyInfo = request.body;
        try {
            const doc = await facultyModel.create(facultyInfo);
            if (doc && doc._id) {
                response.json({ message: "Faculty registered" });
            } else {
                response.json({ message: "Problem in Registration" });
            }
        } catch (err) {
            console.log("Register Error", err);
            response.json({ message: "Problem in Registration" });
        }
    },

    uploadPhoto(request, response) {
        const facultyId = request.body.facultyId;
        const photoUrl = `http://localhost:8789/uploads/${request.file.filename}`;
        
        facultyModel.findByIdAndUpdate(facultyId, { photoUrl: photoUrl }, { new: true })
            .then(updatedFaculty => {
                response.json({ message: "Photo uploaded successfully", photoUrl: photoUrl, faculty: updatedFaculty });
            })
            .catch(err => {
                console.error("Error updating faculty photo:", err);
                response.status(500).json({ message: "Error updating faculty photo" });
            });
    },

    async getFacultyList(request, response){
        try{
            const res = await facultyModel.find({}).exec();
            response.json({faculty: res});
        }
        catch(err){
            throw err;
        }
    }
};
