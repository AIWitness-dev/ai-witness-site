const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { reset } = require('nodemon');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Mongo connection
const mongoURI = 'mongodb+srv://admin:admin@cluster0.p9ycx.mongodb.net/AIWitnessDB?retryWrites=true&w=majority';
const conn = mongoose.createConnection(mongoURI);

// GFS
let gfs;
conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('image');
});


// Mongoose Schema
let attributionModel = conn.model('Attribution', mongoose.Schema({
    image_id: String,
    Bald: String,
    Big_Lips: String,
    Big_Nose: String,
    Black_Hair: String,
    Blond_Hair: String,
    Brown_Hair: String,
    Double_Chin: String,
    Eyeglasses: String,
    Gray_Hair: String,
    Male: String,
    No_Beard: String,
    Pale_Skin: String,
    Receding_Hairline: String,
    Straight_Hair: String,
    Wavy_Hair: String,
    Young: String
  }, {collection: 'attribution'}), 'attribution');

// Mongoose Schema
let imageModel = conn.model('Image', mongoose.Schema({
    files_id: String,
    n: String,
    data: {
        data:Buffer,
        contentType:String
    },
  }, {collection: 'image.chunks'}), 'image.chunks');

// search for specific image
app.get('/files', (req, res) => {
    console.log(req.query);

    // the comment afterwards is a sample searching schema
    let Bald = "-1"; //1
    let Big_Lips = "-1"; //-1
    let Big_Nose = "-1"; //1
    let Black_Hair = "-1"; //-1
    let Blond_Hair = "-1"; //-1
    let Brown_Hair = "-1"; //-1
    let Double_Chin = "-1"; //1
    let Eyeglasses = "-1"; //-1
    let Gray_Hair = "-1"; //1
    let Male = "-1"; //1
    let No_Beard = "-1"; //-1
    let Pale_Skin = "-1"; //-1
    let Receding_Hairline = "-1"; //1
    let Straight_Hair = "-1"; //-1
    let Wavy_Hair = "-1"; //-1
    let Young = "-1"; //-1

    if(req.query.hair == 'black'){
        Black_Hair = "1";
    } else if(req.query.hair == 'brown'){
        Brown_Hair = "1";
    } else if(req.query.hair == 'blond'){
        Blond_Hair = "1";
    } else if(req.query.hair == 'grey'){
        Gray_Hair = "1";
    } else if(req.query.hair == 'bald'){
        Bald = "1";
    }

    if(req.query.straightHair == 'straightHair'){
        Straight_Hair = "1";
    } else if(req.query.straightHair == 'wavyHair'){
        Wavy_Hair = "1";
    }

    if(req.query.bigLips == 'yes'){
        Big_Lips = "1";
    }

    if(req.query.bigNose == 'yes'){
        Big_Nose = "1";
    }

    if(req.query.doubleChin == 'yes'){
        Double_Chin = "1";
    }

    if(req.query.eyeGlasses == 'yes'){
        Eyeglasses = "1";
    }
    
    if(req.query.male == 'yes'){
        Male = "1";
    }

    if(req.query.beard == 'no'){
        No_Beard = "1";
    }

    if(req.query.paleSkin == 'yes'){
        Pale_Skin = "1";
    }

    if(req.query.recedingHairline == 'yes'){
        Receding_Hairline = "1";
    }

    if(req.query.age == 'young'){
        Young = "1";
    }

    attributionModel.find({ Bald: Bald, 
                            Big_Lips: Big_Lips, 
                            Big_Nose: Big_Nose,
                            Black_Hair: Black_Hair,
                            Blond_Hair: Blond_Hair, 
                            Brown_Hair: Brown_Hair,
                            Double_Chin: Double_Chin,
                            Eyeglasses: Eyeglasses,
                            Gray_Hair: Gray_Hair, 
                            Male: Male,
                            No_Beard: No_Beard,
                            Pale_Skin: Pale_Skin, 
                            Receding_Hairline: Receding_Hairline, 
                            Straight_Hair: Straight_Hair, 
                            Wavy_Hair: Wavy_Hair,
                            Young: Young})
                            .limit(1)
                        .then(documents => {
                                console.log(documents[0].image_id);
                                
                                return res.status(200).json({
                                    message: "documents fetched successfully!",
                                    posts: documents[0].image_id
                                });
                        })
                         .catch(e => console.error(e));
});

// Search for a suspect' image base on the suspect’s image id
app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(!file || file.length === 0){
            return res.status(404).json({
                err: "Suspect image not found!"
            })
        }
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            return res.status(404).json({
                err: "Image type error!"
            })
        }
    })
});

app.get('/image/:_id', (req, res) => {
    console.log(req.query);

    imageModel.findById({_id: req.params._id}, function(err, docs)
        {
        if (err) {
            console.log(err);
            res.status(500).send('An error occured', err);
        }else{
            console.log('start to retrieve image'); 
            console.log(docs.data);
            // res.contentType(docs.data.contentType);
            //res.send(docs.data);
            //res.render('index', {'title':'Image', img:docs.data})
            return res.json(docs.data)
        }
    })

})

const port = 5000;
app.listen(port || process.env.PORT , () => {
    console.log(`Server started for uploading image!`)
});