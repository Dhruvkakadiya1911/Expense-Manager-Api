


module.exports = (req, res, next) => {

    try {
        const token = req.cookies.token;

        // console.log(token);
        //here verify Jwt token

        const verify = sails.config.constant.JWT.verify(token, sails.config.constant.JWT_Secret);
        
        // req.user=verify;
        console.log("verify id", verify.userId);
        // console.log("params",req.params.userId);
        if (verify.userId === (req.params.userId || req.body.User )) {
            next();
        }
        else {
            res.status(404).json({
                message: "not in there"
            })

        }

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "auth failed"
        })
        console.log(error);
    }
}