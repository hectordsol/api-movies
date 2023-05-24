const {Schema}=require("mongoose");
const movieSchema = new Schema(
{
    _id: String,
    Title: String,
    Year: String,
    Type: String,
    Poster: String,
    
  },{collection:'movies',
  versionKey: false
});
  movieSchema.statics.list = async function (){
    return await this.find()
  };
  movieSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
  };
  movieSchema.statics.insert = async function (movie){
    console.log("insert: ", movie);
    return await this.create(movie);
  };
module.exports = movieSchema;