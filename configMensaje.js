const nodemailer = require('nodemailer');

module.exports = (formulario) =>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user : 'HiWorldSolutions',
            pass : 'SolarisTheBest20'
        }
    })

    const mailOptions = {
        from : formulario.nombre + " " +  formulario.correo,
        to: 'HiWorldSolutions@gmail.com',
        subject: formulario.asunto,
        text : formulario.mensaje + " " + formulario.correo
        //html: 
        //<strong>Nombre:</strong><br/>
        //<strong>E-mail: </strong><br/>
        //<strong>Mensaje:</strong>
    };

    transporter.sendMail(mailOptions, function (err, info){
        if(err){
            console.log(err);
        } else{
            console.log(info);
        }
    })
}